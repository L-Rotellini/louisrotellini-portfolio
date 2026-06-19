import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.louisrotellini.fr"),
  title: {
    default:
      "Louis Rotellini · AI Product Builder · React / Next.js / TypeScript",
    template: "%s | Louis Rotellini",
  },
  description:
    "AI Product Builder. Je construis des produits en pilotant l'IA, de l'idée à la production — React, Next.js, TypeScript, agents IA avec Claude Code. Produits IA et références grands comptes (Decathlon, Damart, IÉSEG).",
  keywords: [
    "AI Product Builder",
    "Product Builder",
    "AI Product Engineer",
    "construire des produits IA",
    "piloter l'IA",
    "agents IA",
    "Claude Code",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "RAG",
    "Lille",
    "Paris",
  ],
  authors: [{ name: "Louis Rotellini", url: "https://www.louisrotellini.fr" }],
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "https://www.louisrotellini.fr" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.louisrotellini.fr",
    siteName: "Louis Rotellini",
    title:
      "AI Product Builder · React / Next.js / TypeScript · Je construis des produits en pilotant l'IA",
    description:
      "AI Product Builder. Je construis des produits en pilotant l'IA, de l'idée à la production — React, Next.js, TypeScript, agents IA avec Claude Code. Produits IA et références grands comptes (Decathlon, Damart, IÉSEG).",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Louis Rotellini – AI Product Builder · React / Next.js · Claude Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@louisrotellini",
    creator: "@louisrotellini",
    title:
      "AI Product Builder · React / Next.js / TypeScript · Je construis des produits en pilotant l'IA",
    description:
      "AI Product Builder. Je construis des produits en pilotant l'IA, de l'idée à la production — React, Next.js, TypeScript, agents IA avec Claude Code. Produits IA et références grands comptes (Decathlon, Damart, IÉSEG).",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={[
          GeistSans.variable,
          GeistMono.variable,
          "min-h-dvh bg-[--paper] text-[--ink] antialiased transition-colors duration-500",
        ].join(" ")}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Louis Rotellini",
            jobTitle: "AI Product Builder",
            description: "AI Product Builder à Lille. Je construis des produits en pilotant l'IA — React, Next.js, TypeScript, agents IA avec Claude Code. Ex-Decathlon, Damart, IÉSEG.",
            url: "https://www.louisrotellini.fr",
            sameAs: [
              "https://www.malt.fr/profile/louisrotellini",
              "https://www.linkedin.com/in/louis-rotellini/"
            ],
            knowsAbout: ["Next.js", "TypeScript", "React", "Node.js", "Claude Code", "Agents IA", "RAG", "MCP", "Mistral", "Intégration LLM", "Construction de produits en pilotant l'IA", "Tailwind CSS"],
            address: { "@type": "PostalAddress", addressLocality: "Lille", addressRegion: "Hauts-de-France", addressCountry: "FR" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Louis Rotellini – AI Product Builder",
            url: "https://www.louisrotellini.fr",
            areaServed: ["FR", "Europe"],
            description: "Construction de produits en pilotant l'IA (Next.js, TypeScript), intégration LLM et développement front-end React / Next.js, avec un workflow piloté par Claude Code.",
            serviceType: ["Construction de produits en pilotant l'IA", "Pilotage Claude Code", "Intégration LLM", "Développement front-end React / Next.js / TypeScript"],
          }),
        }}
      />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <ScrollProgressBar placeBelowHeader />
            <main className="mx-auto max-w-[1080px] px-8 pb-24">{children}</main>
            <Footer />
            <BackToTop />
        </ThemeProvider>

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
      <Script id="console-signature" strategy="afterInteractive">
          {`
            const styleHeader = [
              "color: #0f172a",
              "background: #e2e8f0",
              "font-size: 14px",
              "padding: 6px 10px",
              "border-radius: 4px",
              "font-weight: 600",
            ].join(";");
            const styleBody = [
              "color: #475569",
              "font-size: 13px",
            ].join(";");

            console.log("%cLouis Rotellini — AI Product Builder", styleHeader);
            console.log("%cPortfolio : https://www.louisrotellini.fr", styleBody);
            console.log("%cSpécialités : Claude Code · Next.js · TypeScript · Agents IA", styleBody);
          `}
       </Script>
    </html>
  );
}
