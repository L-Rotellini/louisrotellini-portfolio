import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata = {
  title: {
    default: "Louis Rotellini — Webmaster & Intégrateur freelance",
    template: "%s | Louis Rotellini",
  },
  description:
    "Portfolio de Louis Rotellini, webmaster et intégrateur freelance basé entre Lille et Paris. Spécialisé en intégration front, maintenance WordPress et emailing responsive.",
  metadataBase: new URL("https://www.louisrotellini.fr"),
  keywords: [
    "Louis Rotellini",
    "webmaster freelance",
    "intégrateur web",
    "Next.js",
    "WordPress",
    "HTML",
    "CSS",
    "JavaScript",
    "emailing responsive",
    "Lille",
    "Paris",
  ],
  authors: [{ name: "Louis Rotellini", url: "https://www.louisrotellini.fr" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.louisrotellini.fr",
    title: "Louis Rotellini — Webmaster & Intégrateur freelance",
    description:
      "Portfolio de Louis Rotellini, freelance basé entre Lille et Paris. Intégration front-end, maintenance WordPress et emailing responsive.",
    siteName: "Louis Rotellini Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Louis Rotellini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis Rotellini — Webmaster & Intégrateur freelance",
    description:
      "Intégration front, maintenance WordPress et emailing responsive.",
    creator: "@louisrotellini",
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
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ScrollProgressBar placeBelowHeader />
          <main className="mx-auto max-w-5xl px-4 md:px-6 pb-24">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
