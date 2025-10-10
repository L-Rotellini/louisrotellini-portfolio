"use client";

import OfferCard from "@/components/OfferCard";
import { offers } from "@/data/offers";

function mailtoHref(subject: string) {
  const b = encodeURIComponent(
    "Bonjour Louis,\n\nJe suis intéressé par cette offre. Voici quelques infos :\n- Contexte :\n- Délai souhaité :\n- Budget indicatif :\n\nMerci !"
  );
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${b}`;
}

export default function OfferSection() {
  return (
    <div id="offre" aria-labelledby="offre-title" className="space-y-8">
      <div className="space-y-2">
        <h2 id="offre-title">Offre</h2>
        <p className="text-[--muted] text-sm">
          Trois formats simples et efficaces. Délai court, code propre, transfert sans friction.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {offers.map((o) => (
          <OfferCard
            key={o.id}
            id={o.id}
            title={o.title}
            subtitle={o.subtitle}
            bullets={o.bullets}
            deliverables={o.deliverables}
            leadTime={o.leadTime}
            startingAt={o.startingAt}
            ctaSubject={`${o.title} — Demande de mission`}
          />
        ))}
      </div>
    </div>
  );
}
