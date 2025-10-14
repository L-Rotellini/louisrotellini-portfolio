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
    subtitle: "Sites modernes, performants et faciles à maintenir",
    bullets: [
      "Design responsive et accessible (WCAG AA)",
      "Pages clés : Accueil, Services, À propos, Contact",
      "SEO technique et optimisation des performances",
      "Mise en ligne, hébergement et suivi post-livraison",
    ],
    deliverables: [
      "Site complet clé en main",
      "Code source propre (Next.js ou WordPress)",
      "Guide rapide d’administration",
    ],
    leadTime: "1 à 3 semaines selon le projet",
    startingAt: "à partir de 1 200 €",
  },
  {
    id: "integration-web",
    title: "Intégration front-end",
    subtitle: "Landing pages, mini-sites ou composants UI sur mesure",
    bullets: [
      "Intégration fidèle à Figma (états, interactions, animations)",
      "HTML / CSS / TypeScript — code maintenable et documenté",
      "Performances mesurées (Lighthouse ≥ 90)",
      "Livraison modulaire, prête à intégrer en production",
    ],
    deliverables: [
      "Section ou page prête à livrer",
      "Rapport de compatibilité & performance",
    ],
    leadTime: "48–72 h selon complexité",
    startingAt: "à partir de 450 €",
  },
  {
    id: "maintenance-wordpress",
    title: "Maintenance WordPress",
    subtitle: "Mises à jour, sécurité, support et optimisation continue",
    bullets: [
      "Mises à jour du cœur, thèmes et extensions",
      "Corrections d’affichage, bugs et contenu",
      "Sauvegardes automatiques et durcissement sécurité",
      "Optimisation des performances et SEO",
    ],
    deliverables: [
      "Changelog clair et sauvegarde avant/après",
      "Corrections validées et testées",
      "Suggestions d’amélioration continue",
    ],
    leadTime: "ponctuelle ou récurrente",
    startingAt: "à partir de 120 € / intervention",
  },
  {
    id: "subscription",
    title: "Abonnement mensuel — support continu",
    subtitle: "Pour les sites déjà en ligne : mises à jour, sécurité et petites évolutions",
    bullets: [
      "Mises à jour WordPress (cœur, thèmes, extensions)",
      "Sauvegardes, contrôle sécurité et correctifs mineurs",
      "Petites évolutions visuelles ou de contenu",
      "Support prioritaire par e-mail (< 24 h)",
    ],
    deliverables: [
      "Changelog mensuel",
      "Backup avant/après",
      "Suggestions d’amélioration",
    ],
    leadTime: "Sans engagement — résiliation libre",
    startingAt: "à partir de 150 € / mois",
  },
];
