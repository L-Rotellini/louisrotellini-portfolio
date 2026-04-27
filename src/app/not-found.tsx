import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { mailtoHref } from "@/lib/mailto";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100dvh-10rem)] flex flex-col items-center justify-center text-center gap-6 py-12">
      <span className="text-[clamp(6rem,16vw,12rem)] font-bold tracking-[-0.04em] leading-none select-none">
        404
      </span>

      <p className="text-xs text-[--muted] uppercase tracking-[0.12em]">
        Page introuvable
      </p>

      <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight leading-[1.15] max-w-md">
        Cette page n&apos;existe pas ou a été déplacée.
      </h1>

      <p className="text-sm text-[--muted] max-w-sm">
        Vous avez peut-être suivi un lien cassé ou tapé une URL incorrecte.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <a
          href={mailtoHref()}
          className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors"
        >
          <Mail className="size-4" aria-hidden="true" />
          <span>Contacter Louis</span>
        </a>
      </div>
    </section>
  );
}
