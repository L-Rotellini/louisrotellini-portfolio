import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Headers statiques appliqués à toutes les routes. La CSP (à nonce, donc
// dépendante de la requête) est posée dans le middleware.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS seulement en prod (éviter d'épingler HTTPS sur localhost).
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  images: {
    // Autorise le rendu des placeholders SVG (logo fourmi) via next/image.
    // Neutralisé par une CSP sandbox dédiée : aucun script ne peut s'exécuter.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/mentions-legale",
        destination: "/mentions-legales",
        permanent: true, // 301
      },
      // Refonte 2026 : les pages projets détaillées n'existent plus (one-page).
      {
        source: "/projets/:id",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/en/projets/:id",
        destination: "/en#work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
