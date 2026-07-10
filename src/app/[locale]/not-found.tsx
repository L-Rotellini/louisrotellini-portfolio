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
    <section className="wrap" style={{ minHeight: 520, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "140px clamp(20px,5vw,64px) 80px" }}>
      <span className="eyebrow" style={{ marginBottom: 24 }}>
        {dict.notFound.eyebrow}
      </span>

      <h1 style={{ fontSize: "clamp(5rem,18vw,160px)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>404.</h1>

      <p style={{ fontSize: "clamp(1.05rem,2.4vw,21px)", color: "var(--muted)", maxWidth: "42ch", margin: "18px 0" }}>
        {dict.notFound.body}
      </p>

      <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
        <Link
          href={home}
          style={{ display: "inline-flex", alignItems: "center", gap: 9, borderRadius: 100, padding: "11px 20px", fontSize: 14, background: "var(--ink)", color: "var(--paper)", border: "1px solid var(--ink)" }}
        >
          {dict.notFound.backHome} <span className="mono" style={{ fontSize: 12 }}>→</span>
        </Link>
        <a
          href={mailtoHref(dict.mail.subject, dict.mail.body)}
          style={{ display: "inline-flex", alignItems: "center", gap: 9, borderRadius: 100, padding: "11px 20px", fontSize: 14, border: "1px solid var(--rule-2)", color: "var(--ink)" }}
        >
          {dict.notFound.emailCta}
        </a>
      </div>
    </section>
  );
}
