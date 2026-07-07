import Link from "next/link";
import { headers } from "next/headers";
import { mailtoHref } from "@/lib/mailto";
import { defaultLocale, isLocale, localePrefix, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata() {
  const raw = (await headers()).get("x-locale") ?? defaultLocale;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  return { title: getDictionary(locale).notFound.metaTitle };
}

export default async function NotFound() {
  const raw = (await headers()).get("x-locale") ?? defaultLocale;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const home = localePrefix(locale) || "/";

  return (
    <section className="min-h-[520px] flex flex-col items-start justify-center py-20 pt-[140px]">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mb-6">
        {dict.notFound.eyebrow}
      </span>

      <p className="text-[clamp(5rem,18vw,160px)] font-medium tracking-[-0.06em] leading-[0.85] tabular-nums m-0">
        404.
      </p>

      <p className="text-[clamp(1.125rem,2.4vw,22px)] text-[--muted] max-w-[42ch] my-[18px] leading-[1.4]">
        {dict.notFound.body}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link
          href={home}
          className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] bg-[--ink] text-[--paper] border border-[--ink] hover:bg-[--accent] hover:border-[--accent] transition-colors"
        >
          {dict.notFound.backHome}
          <span className="font-mono text-[12px]">→</span>
        </Link>
        <a
          href={mailtoHref(dict.mail.subject, dict.mail.body)}
          className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] border border-[--rule-strong] text-[--ink] hover:bg-[--ink] hover:text-[--paper] hover:border-[--ink] transition-colors"
        >
          {dict.notFound.emailCta}
        </a>
      </div>
    </section>
  );
}
