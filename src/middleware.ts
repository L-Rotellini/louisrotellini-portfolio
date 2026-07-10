import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/i18n/config";

const isProd = process.env.NODE_ENV === "production";

// CSP stricte à nonce. Posée uniquement en prod : en dev, le HMR de Next
// a besoin d'inline/eval que la CSP casserait.
function buildCsp(nonce: string) {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://*.vercel-insights.com",
    "manifest-src 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

// Attache la CSP à nonce à une réponse + aux headers de requête (Next lit le
// nonce depuis la CSP de requête pour l'appliquer à ses propres scripts).
function withCsp(
  response: NextResponse,
  requestHeaders: Headers,
  nonce: string,
) {
  if (!isProd) return response;
  const csp = buildCsp(nonce);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

// i18n "as-needed" : FR servi à la racine (URL inchangée), EN sous /en.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const nonce = crypto.randomUUID().replace(/-/g, "");

  // EN déjà préfixé : on laisse passer (en marquant la locale pour not-found).
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", "en");
    if (isProd) requestHeaders.set("x-nonce", nonce);
    return withCsp(
      NextResponse.next({ request: { headers: requestHeaders } }),
      requestHeaders,
      nonce,
    );
  }

  // /fr exposé publiquement : redirection permanente vers l'URL sans préfixe
  // (évite le contenu dupliqué avec la racine).
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/fr/, "") || "/";
    const res = NextResponse.redirect(url, 308);
    if (isProd) res.headers.set("Content-Security-Policy", buildCsp(nonce));
    return res;
  }

  // Par défaut (FR) : réécriture interne vers le segment /fr, l'URL reste propre.
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", defaultLocale);
  if (isProd) requestHeaders.set("x-nonce", nonce);
  return withCsp(
    NextResponse.rewrite(url, { request: { headers: requestHeaders } }),
    requestHeaders,
    nonce,
  );
}

export const config = {
  // Tout sauf les internes Next, l'API et les fichiers statiques (avec extension).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
