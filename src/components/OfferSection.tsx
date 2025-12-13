"use client";

import OfferCard from "@/components/OfferCard";
import { offers } from "@/data/offers";
import { mailtoHref } from "@/lib/mailto";

export default function OfferSection() {
  // 1) Sépare les offres
  const mainOffers = offers.filter((o) => o.id !== "subscription");
  const subscriptionOffer = offers.find((o) => o.id === "subscription");

  return (
    <section id="offre" aria-labelledby="offre-title" className="space-y-8">
      <div className="space-y-2">
        <h2 id="offre-title">Offre</h2>
        <p className="text-[--muted] text-sm">
          Trois formats clairs, pensés pour livrer vite et bien. Code propre, intégration fluide, zéro perte de temps.
        </p>
      </div>

      {/* 2) Grille = seulement les 3 principales */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {mainOffers.map((o) => (
          <OfferCard
            key={o.id}
            id={o.id}
            title={o.title}
            subtitle={o.subtitle}
            bullets={o.bullets}
            deliverables={o.deliverables}
            leadTime={o.leadTime}
            startingAt={o.startingAt}
            ctaHref={mailtoHref(`${o.title} — Demande de mission`)}
          />
        ))}
      </div>

      {/* 3) Abonnement plein largeur en dessous */}
      {subscriptionOffer && (
        <div className="pt-2">
          <OfferCard
            key={subscriptionOffer.id}
            id={subscriptionOffer.id}
            title={subscriptionOffer.title}
            subtitle={subscriptionOffer.subtitle}
            bullets={subscriptionOffer.bullets}
            deliverables={subscriptionOffer.deliverables}
            leadTime={subscriptionOffer.leadTime}
            startingAt={subscriptionOffer.startingAt}
            ctaHref={mailtoHref(`${subscriptionOffer.title} — Demande d'information`)}
          />
        </div>
      )}
    </section>
  );
}
