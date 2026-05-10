import Link from "next/link";
import { mailtoHref } from "@/lib/mailto";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="min-h-[520px] flex flex-col items-start justify-center py-20 pt-[140px]">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mb-6">
        04 / Not found · Route invalide
      </span>

      <p className="text-[clamp(5rem,18vw,160px)] font-medium tracking-[-0.06em] leading-[0.85] tabular-nums m-0">
        404.
      </p>

      <p className="text-[clamp(1.125rem,2.4vw,22px)] text-[--muted] max-w-[42ch] my-[18px] leading-[1.4]">
        Cette page n&apos;existe pas — ou plus. Tu peux revenir à l&apos;accueil,
        ou m&apos;écrire si tu cherchais quelque chose en particulier.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] bg-[--ink] text-[--paper] border border-[--ink] hover:bg-[--accent] hover:border-[--accent] transition-colors"
        >
          Retour à l&apos;accueil
          <span className="font-mono text-[12px]">→</span>
        </Link>
        <a
          href={mailtoHref()}
          className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] border border-[--rule-strong] text-[--ink] hover:bg-[--ink] hover:text-[--paper] hover:border-[--ink] transition-colors"
        >
          Écrire un email
        </a>
      </div>
    </section>
  );
}
