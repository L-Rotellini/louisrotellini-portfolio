import type { Project } from "./projects";

const sideProjects: Project[] = [
  {
    id: "doctap",
    client: "Side project",
    title: "DocTap",
    tagline: "PWA OCR documents · En production publique",
    context:
      "Application web qui transforme des photos de documents en PDF organisés et recherchables. Stockage local-first, déployée sur Vercel.",
    stack: ["Next.js", "TypeScript", "OCR", "Vercel", "PWA"],
    status: "MVP terminé",
    after: "/projects/doctap-desktop.jpg",
    mobile: "/projects/doctap-mobile.jpg",
    challenges: [
      "Numériser des documents papier sans application native ni infrastructure serveur lourde",
      "Garantir la confidentialité des documents traités",
      "Permettre la recherche dans des PDF générés à partir de photos",
    ],
    solutions: [
      "PWA installable avec capture caméra directe depuis le navigateur",
      "Pipeline OCR pour extraire le texte et générer des PDF recherchables",
      "Stockage local-first : aucune donnée envoyée sur un serveur tiers par défaut",
      "Déploiement Vercel pour la couche statique et les routes nécessaires",
    ],
  },
  {
    id: "rekap",
    client: "Side project",
    title: "Rekap",
    tagline: "Agent IA pour équipes commerciales · POC en cadrage",
    context:
      "Agent IA qui génère des fiches client synthétiques avant les visites commerciales. Réduit le temps de préparation de plusieurs minutes par visite.",
    stack: ["Next.js", "TypeScript", "agents IA"],
    status: "En développement",
    after: "/projects/rekap-desktop.jpg",
    mobile: "/projects/rekap-mobile.jpg",
    challenges: [
      "Préparer une visite commerciale exige d'agréger des informations dispersées",
      "Les commerciaux n'ont pas le temps de fouiller plusieurs outils avant chaque rendez-vous",
      "Synthétiser sans perdre les signaux importants (historique, points d'attention)",
    ],
    solutions: [
      "Agent IA orchestrant la collecte et la synthèse en une fiche unique",
      "Format court, prêt à lire en 30 secondes avant la visite",
      "Intégration pensée pour s'insérer dans le workflow existant des équipes",
    ],
  },
  {
    id: "relancia",
    client: "Side project",
    title: "RelancIA",
    tagline: "Agent de relance facturation · Prototype testé sur un premier cas",
    context:
      "Agent IA qui automatise la relance des factures impayées pour les PME. Tonalité personnalisable, suivi des relances.",
    stack: ["Next.js", "TypeScript", "agents IA"],
    status: "En développement",
    after: "/projects/relancia-desktop.jpg",
    mobile: "/projects/relancia-mobile.jpg",
    challenges: [
      "Les relances de factures impayées sont chronophages et souvent reportées",
      "Le ton doit s'adapter au profil du client et à l'ancienneté de la facture",
      "Garder une trace claire des relances envoyées et des réponses reçues",
    ],
    solutions: [
      "Agent IA qui rédige la relance avec une tonalité paramétrable",
      "Suivi des relances envoyées et de leur statut",
      "Pensé pour les PME qui n'ont pas de service de recouvrement dédié",
    ],
  },
];

export default sideProjects;
