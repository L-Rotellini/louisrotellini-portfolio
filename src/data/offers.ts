export type Offer = {
  id: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  deliverables?: string[];
  leadTime?: string;     // délai indicatif (ex: "48–72h")
  startingAt?: string;   // ex: "à partir de 300€"
};

export const offers: Offer[] = [
  {
    id: "integration-web",
    title: "Intégration Web",
    subtitle: "Landing pages, mini-sites, composants UI",
    bullets: [
      "HTML/CSS/JS propre, compatible et responsive",
      "Debug et QA rapides",
      "Collaboration directe avec l’équipe marketing/produit",
    ],
    deliverables: ["LP/section prête à mettre en prod", "Conseils perf & accessibilité basiques"],
    leadTime: "48–72h selon complexité",
    startingAt: "à partir de 300€",
  },
  {
    id: "wordpress",
    title: "WordPress",
    subtitle: "Maintenance et petites évolutions",
    bullets: [
      "Mises à jour de contenus et templates",
      "Correctifs front basiques (thèmes, CSS)",
      "Durcissement léger (rôles, extensions, sauvegardes)",
    ],
    deliverables: ["Changelog simple", "Recommandations d’amélioration"],
    leadTime: "mission ponctuelle ou récurrente",
    startingAt: "mission courte, devis rapide",
  },
];

export const addons: Offer[] = [
  {
    id: "emailing",
    title: "Emailing",
    subtitle: "Templates responsive",
    bullets: [
      "Intégration HTML email (compatibilité clients majeurs)",
      "A/B tests simples",
      "Conseils délivrabilité de base",
    ],
    leadTime: "24–48h par template",
    startingAt: "à partir de 150€ / template",
  },
];
