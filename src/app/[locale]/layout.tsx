import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import {
  defaultLocale,
  htmlLang,
  hreflang,
  isLocale,
  localePrefix,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const SITE_URL = "https://www.louisrotellini.fr";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const home = localePrefix(locale) || "/";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: "%s | Louis Rotellini",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Louis Rotellini", url: SITE_URL }],
    alternates: {
      canonical: home,
      languages: {
        "fr-FR": "/",
        "en-US": "/en",
        "x-default": "/",
      },
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
      locale: ogLocale[locale],
      url: home,
      siteName: "Louis Rotellini",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@louisrotellini",
      creator: "@louisrotellini",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);
  const home = localePrefix(locale) || "/";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Louis Rotellini",
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.personDescription,
    url: `${SITE_URL}${localePrefix(locale)}`,
    sameAs: [
      "https://www.malt.fr/profile/louisrotellini",
      "https://www.linkedin.com/in/louis-rotellini/",
    ],
    knowsAbout: dict.meta.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lille",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    inLanguage: hreflang[locale],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: dict.meta.serviceName,
    url: `${SITE_URL}${localePrefix(locale)}`,
    areaServed: ["FR", "Europe"],
    description: dict.meta.serviceDescription,
    serviceType: dict.meta.serviceTypes,
  };

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body
        className={[
          GeistSans.variable,
          GeistMono.variable,
          "min-h-dvh bg-[--paper] text-[--ink] antialiased transition-colors duration-500",
        ].join(" ")}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar locale={locale} dict={dict.nav} home={home} />
          <ScrollProgressBar placeBelowHeader />
          <main className="mx-auto max-w-[1080px] px-8 pb-24">{children}</main>
          <Footer dict={dict.footer} locale={locale} />
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

            console.log("%c${dict.meta.consoleTitle}", styleHeader);
            console.log("%c${dict.meta.consolePortfolio}", styleBody);
            console.log("%c${dict.meta.consoleSpecialties}", styleBody);
          `}
      </Script>
    </html>
  );
}
