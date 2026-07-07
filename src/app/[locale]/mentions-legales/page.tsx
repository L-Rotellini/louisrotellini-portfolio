import Link from "next/link";
import type { Metadata } from "next";
import { defaultLocale, isLocale, localePrefix, localizedHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

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
  const path = localizedHref(locale, "/mentions-legales");

  return {
    title: dict.legal.metaTitle,
    description: dict.legal.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        "fr-FR": "/mentions-legales",
        "en-US": "/en/mentions-legales",
        "x-default": "/mentions-legales",
      },
    },
    robots: { index: false, follow: true },
  };
}

export default async function MentionsLegales({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const t = dict.legal;
  const home = localePrefix(locale) || "/";

  return (
    <article className="max-w-[680px] pt-[120px] pb-20">
      <Link
        href={home}
        className="inline-flex items-center gap-2 font-mono text-[12px] text-[--muted] hover:text-[--ink] transition-colors mb-9"
      >
        {t.back}
      </Link>

      <h1 className="text-[clamp(2rem,5.5vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 mb-4">
        {t.title}
      </h1>

      <p className="text-[18px] text-[--muted] leading-[1.5] m-0 mb-12">
        {t.intro}
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        {t.publisherTitle}
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        {t.publisherRole}
        <br />
        {t.publisherLocation}
        <br />
        {t.contactPrefix}
        <a
          href="mailto:louis.rotellini@gmail.com"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          louis.rotellini@gmail.com
        </a>
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        {t.hostTitle}
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        {t.hostBody}
        <br />
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          vercel.com
        </a>
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        {t.ipTitle}
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">{t.ipBody}</p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        {t.dataTitle}
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">{t.dataBody}</p>
      <ul className="text-[15.5px] leading-[1.65] mt-3 pl-5 list-disc">
        {t.dataBullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        {t.contactTitle}
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        {t.contactBody}
        <a
          href="mailto:louis.rotellini@gmail.com"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          louis.rotellini@gmail.com
        </a>
      </p>

      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[--muted] mt-16 pt-6 border-t border-[--rule]">
        {t.lastUpdate}
      </p>
    </article>
  );
}
