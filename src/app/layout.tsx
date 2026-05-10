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
      "Développeur Full-stack freelance · Next.js, TypeScript, AI-assisted – Louis Rotellini",
    template: "%s | Louis Rotellini",
  },
  description:
    "Développeur Full-stack freelance basé à Lille. Je construis des produits web (Next.js, TypeScript) en mode AI-assisted. Ex-Decathlon, Damart, IÉSEG.",
  keywords: [
    "Développeur Full-stack freelance",
    "AI-assisted",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "agents IA",
    "intégration LLM",
    "Lille",
    "Paris",
    "freelance",
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
      "Développeur Full-stack freelance · Next.js, TypeScript, AI-assisted – Louis Rotellini",
    description:
      "Développeur Full-stack freelance basé à Lille. Je construis des produits web (Next.js, TypeScript) en mode AI-assisted. Ex-Decathlon, Damart, IÉSEG.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Louis Rotellini – développeur Full-stack freelance · Next.js, TypeScript, AI-assisted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@louisrotellini",
    creator: "@louisrotellini",
    title:
      "Développeur Full-stack freelance · Next.js, TypeScript, AI-assisted – Louis Rotellini",
    description:
      "Développeur Full-stack freelance basé à Lille. Je construis des produits web (Next.js, TypeScript) en mode AI-assisted. Ex-Decathlon, Damart, IÉSEG.",
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
          "min-h-dvh bg-[--background] text-[--foreground] antialiased transition-colors duration-500",
        ].join(" ")}
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 30%, rgba(244, 63, 94, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 15% 90%, rgba(168, 85, 247, 0.08) 0%, transparent 40%)
          `
        }}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Louis Rotellini",
            jobTitle: "Développeur Full-stack freelance",
            url: "https://www.louisrotellini.fr",
            sameAs: [
              "https://www.malt.fr/profile/louisrotellini",
              "https://www.linkedin.com/in/louis-rotellini/"
            ],
            knowsAbout: ["Next.js", "TypeScript", "React", "Node.js", "Intégration LLM", "Agents IA", "AI-assisted development", "Tailwind CSS"],
            worksFor: { "@type": "Organization", name: "Freelance" },
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
            name: "Développeur Full-stack freelance – Louis Rotellini",
            url: "https://www.louisrotellini.fr",
            areaServed: ["FR", "Europe"],
            description: "Construction de produits web Full-stack (Next.js, TypeScript) en mode AI-assisted, intégration LLM et missions front-end / fullstack pour agences et grands comptes.",
            serviceType: ["Construction de produits AI-assisted", "Intégration LLM", "Développement Next.js / TypeScript", "Missions front-end / fullstack"],
          }),
        }}
      />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <ScrollProgressBar placeBelowHeader />
            <main className="mx-auto max-w-5xl px-4 md:px-6 pb-24">{children}</main>
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

            console.log("%cLouis Rotellini — Développeur Full-stack Freelance", styleHeader);
            console.log("%cPortfolio : https://www.louisrotellini.fr", styleBody);
            console.log("%cSpécialités : Next.js · TypeScript · AI-assisted · Agents IA", styleBody);
          `}
       </Script>
    </html>
  );
}
