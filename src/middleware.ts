import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/i18n/config";

// i18n "as-needed" : FR servi à la racine (URL inchangée), EN sous /en.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // EN déjà préfixé : on laisse passer (en marquant la locale pour not-found).
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", "en");
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // /fr exposé publiquement : redirection permanente vers l'URL sans préfixe
  // (évite le contenu dupliqué avec la racine).
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/fr/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  // Par défaut (FR) : réécriture interne vers le segment /fr, l'URL reste propre.
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", defaultLocale);
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  // Tout sauf les internes Next, l'API et les fichiers statiques (avec extension).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
