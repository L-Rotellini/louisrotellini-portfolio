"use client";

import { Timer, Euro, CheckCircle2, Shield} from "lucide-react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  deliverables?: string[];
  leadTime?: string;
  startingAt?: string;
  ctaHref: string;
};

export default function OfferCard({
  id, title, subtitle, bullets, deliverables, leadTime, startingAt, ctaHref,
}: Props) {
  return (
    <article
      className="surface flex flex-col justify-between rounded-2xl border border-[--surface-border] p-6 transition-colors hover:bg-[--foreground]/[0.02] focus-within:bg-[--foreground]/[0.03] outline-none"
      aria-labelledby={`${id}-title`}
      role="region"
    >
      <div className="space-y-4">
        {/* En-tête avec icône */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div>
              <h3 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              {subtitle && <p className="text-[--muted] text-sm">{subtitle}</p>}
            </div>
          </div>
        </div>

        {/* Bullets : ce qui est inclus */}
        <ul className="mt-2 space-y-1.5" role="list">
          {bullets.map((b) => (
            <li key={b} className="text-sm flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 text-emerald-500 shrink-0" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Livrables */}
        {deliverables && deliverables.length > 0 && (
          <div className="pt-1">
            <div className="text-xs text-[--muted] uppercase tracking-wide">Livrables</div>
            <ul className="mt-2 flex flex-wrap gap-2" role="list">
              {deliverables.map((d) => (
                <li key={d} className="text-xs rounded-full border border-[--surface-border] px-2 py-1">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Badges délai/prix + garanties mini */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {leadTime && (
            <span className="chip text-xs inline-flex items-center gap-1.5">
              <Timer className="size-3.5" aria-hidden="true" />
              {leadTime}
            </span>
          )}
          {startingAt && (
            <span className="chip text-xs inline-flex items-center gap-1.5">
              <Euro className="size-3.5" aria-hidden="true" />
              {startingAt}
            </span>
          )}
          {/* petits signaux de confiance */}
          <span className="chip text-xs inline-flex items-center gap-1.5">
            <Shield className="size-3.5" aria-hidden="true" />
            Sauvegarde & QA
          </span>
        </div>
      </div>

      {/* CTAs */}
      <div className="pt-5 sm:grid-cols-2 gap-2">
        <a
          href={ctaHref}
          className="inline-block w-full rounded-md border border-[--surface-border] bg-[--foreground] text-[--background] px-4 py-2 text-center text-sm font-medium hover:opacity-90 transition-colors hover-invert"
        >
          Discuter de cette offre
        </a>
      </div>
    </article>
  );
}
