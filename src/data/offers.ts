// src/data/offers.ts
export type Offer = {
  id: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  deliverables?: string[];
  leadTime?: string;
  startingAt?: string;
};

export const offers: Offer[] = [
  {
    id: "creation-site",
    title: "Création de site vitrine",
    subtitle: "Site moderne, rapide et facile à maintenir",
    bullets: [
      "Design responsive et accessible (WCAG AA)",
      "Pages clés : accueil, services, à propos, contact",
      "SEO technique (balises, perf, sitemap/robots)",
      "Mise en ligne et configuration hébergement",
    ],
    deliverables: [
      "Site clé en main",
      "Code source propre (Next.js/WordPress)",
      "Guide d’administration rapide",
    ],
    leadTime: "1–3 semaines",
    startingAt: "à partir de 800€",
  },
  {
    id: "integration-web",
    title: "Intégration front-end",
    subtitle: "Landing pages, mini-sites, composants UI",
    bullets: [
      "Intégration fidèle à Figma (pixels & states)",
      "HTML/CSS/TS — code accessible et maintenable",
      "Perf mesurée (Lighthouse > 90) & QA",
      "Livraison modulaire et documentée",
    ],
    deliverables: [
      "Section/page prête prod",
      "Rapport compatibilité & performance",
    ],
    leadTime: "48–72 h selon complexité",
    startingAt: "à partir de 300€",
  },
  {
    id: "maintenance-wordpress",
    title: "Maintenance WordPress",
    subtitle: "Mises à jour, sécurité, correctifs & support",
    bullets: [
      "Mises à jour cœur/thèmes/plugins",
      "Corrections d’affichage & contenu",
      "Sauvegardes et durcissement léger",
      "Améliorations de perf & SEO",
    ],
    deliverables: [
      "Changelog clair",
      "Backup avant/après",
      "Suggestions d’amélioration",
    ],
    leadTime: "ponctuel ou récurrent",
    startingAt: "à partir de 90€ / intervention",
  },
];
