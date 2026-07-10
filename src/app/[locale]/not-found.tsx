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
  const nf = dict.notFound;
  const home = localePrefix(locale) || "/";

  return (
    <section className="nf">
      <div className="wrap">
        <div className="nf__eye eyebrow reveal">
          <span className="n">{"//"}</span> {nf.eyebrow}
        </div>

        <div className="nf__code reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          404<span className="dot">.</span>
        </div>

        <p className="nf__body reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
          {nf.body}
        </p>

        <div className="nf__cta reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
          <Link href={home} className="btn btn--primary">
            {nf.backHome} <span className="mono">→</span>
          </Link>
          <a href={mailtoHref(dict.mail.subject, dict.mail.body)} className="btn btn--ghost">
            {nf.emailCta}
          </a>
        </div>
      </div>
    </section>
  );
}
