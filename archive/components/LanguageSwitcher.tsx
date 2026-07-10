"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string; // libellé de la langue cible (ex: "EN" sur une page FR)
  ariaLabel: string;
};

// Bascule vers l'autre langue en conservant le chemin courant.
export default function LanguageSwitcher({ locale, label, ariaLabel }: Props) {
  const pathname = usePathname() || "/";

  let target: string;
  if (locale === "fr") {
    // FR -> EN : préfixer /en
    target = pathname === "/" ? "/en" : `/en${pathname}`;
  } else {
    // EN -> FR : retirer /en
    target = pathname.replace(/^\/en/, "") || "/";
  }

  return (
    <Link
      href={target}
      hrefLang={locale === "fr" ? "en" : "fr"}
      aria-label={ariaLabel}
      className="font-mono text-[12px] text-[--muted] hover:text-[--ink] transition-colors"
    >
      {label}
    </Link>
  );
}
