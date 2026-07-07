import { profile } from "@/data/profile";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

type Props = {
  dict: Dictionary["footer"];
  locale: Locale;
};

export default function Footer({ dict, locale }: Props) {
  return (
    <footer className="w-full border-t border-[--rule] font-mono text-[11.5px] text-[--muted] z-40">
      <div className="mx-auto max-w-[1080px] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="m-0">
          © {new Date().getFullYear()} louisrotellini.fr
        </p>
        <nav className="flex items-center gap-4">
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--ink] transition-colors"
            >
              LinkedIn
              <span className="sr-only"> {dict.newTab}</span>
            </a>
          )}
          {profile.maltUrl && (
            <a
              href={profile.maltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--ink] transition-colors"
            >
              Malt
              <span className="sr-only"> {dict.newTab}</span>
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[--ink] transition-colors"
          >
            {dict.contact}
          </a>
          <a
            href={localizedHref(locale, "/mentions-legales")}
            className="hover:text-[--ink] transition-colors"
          >
            {dict.legal}
          </a>
        </nav>
      </div>
    </footer>
  );
}
