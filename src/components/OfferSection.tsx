"use client";

import { offers, addons } from "@/data/offers";

function mailtoHref(subject: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(
    "Bonjour Louis,\n\nJe suis intéressé par cette offre. Voici quelques infos :\n- Contexte :\n- Délai souhaité :\n- Budget indicatif :\n\nMerci !"
  );
  return `mailto:louis.rotellini@gmail.com?subject=${s}&body=${b}`;
}

export default function OfferSection() {
  // on fusionne les deux tableaux pour avoir 3 cartes côte à côte
  const allOffers = [...offers, ...addons];

  return (
    <section id="offre" className="space-y-8">
      {/* En-tête */}
      <div className="space-y-3">
        <h2>Offre</h2>
      </div>

      {/* Grille unique en 3 colonnes */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {allOffers.map((o) => (
          <article
            key={o.id}
            className="surface flex flex-col justify-between rounded-2xl border border-[--surface-border] p-6 transition-colors hover:bg-[--foreground]/[0.02]"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold tracking-tight">{o.title}</h3>
                {o.subtitle && <p className="text-[--muted]">{o.subtitle}</p>}
              </div>

              <ul className="mt-2 space-y-1">
                {o.bullets.map((b) => (
                  <li key={b} className="text-sm">{b}</li>
                ))}
              </ul>

              {o.deliverables && (
                <div className="pt-1">
                  <div className="text-xs text-[--muted] uppercase tracking-wide">Livrables</div>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {o.deliverables.map((d) => (
                      <li key={d} className="text-xs rounded-full border px-2 py-1">{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {o.leadTime && <span className="chip text-xs">{o.leadTime}</span>}
                {o.startingAt && <span className="chip text-xs">{o.startingAt}</span>}
              </div>
            </div>

            <div className="pt-5">
              <a
                href={mailtoHref(`[${o.title}] Demande de mission`)}
                className="inline-block w-full rounded-md border px-4 py-2 text-center text-sm hover:bg-[--foreground]/5 transition-colors"
              >
                Discuter de cette offre
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
