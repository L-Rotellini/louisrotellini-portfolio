export type Project = {
  id: string;
  client: string;
  title: string;
  context: string;
  role: string;
  stack: string[];
  url?: string;
  thumbnail: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: "decathlon-lp",
    client: "Decathlon",
    title: "LP App Mobile",
    context: "Intégration d'une landing page responsive pour promouvoir l'application Decathlon Shopping.",
    role: "Intégration complète de la maquette. Responsive mobile-first.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://www.decathlon.fr/landing/application-decathlon-decathlon/_/R-a-appli-decathlon",
    thumbnail: "/projects/decathlon-lp-desktop.jpg",
    images: ["/projects/decathlon-lp-desktop.jpg", "/projects/decathlon-lp-mobile.jpg"]
  },
  {
    id: "decathlon-data",
    client: "Decathlon",
    title: "Pages Données Personnelles",
    context: "Refonte visuelle des pages de politique de confidentialité pour améliorer la lisibilité.",
    role: "Refonte UI : accordions interactifs, iconographie, mise en page en grille.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://www.decathlon.fr/landing/donnees-personnelles/_/R-a-donnees-personnelles",
    thumbnail: "/projects/decathlon-data-after.jpg",
    images: ["/projects/decathlon-data-before.jpg", "/projects/decathlon-data-after.jpg"]
  },
  {
    id: "ieseg-fiches",
    client: "IÉSEG",
    title: "Fiches Métiers",
    context: "Création d'un template WordPress pour afficher des fiches métiers dynamiques à partir de données JSON.",
    role: "Développement du template, intégration WordPress, structure responsive.",
    stack: ["WordPress", "PHP", "JSON", "HTML", "CSS"],
    url: "https://ieseg.fr/domaines-expertise/marketing-communication/analyste-cybersecurite/",
    thumbnail: "/projects/ieseg-fiches-1.jpg",
    images: ["/projects/ieseg-fiches-1.jpg", "/projects/ieseg-fiches-2.jpg"]
  },
  {
    id: "ieseg-datalayers",
    client: "IÉSEG",
    title: "Data Layers & Tracking",
    context: "Mise en place d'un système de tracking personnalisé pour suivre les interactions utilisateurs.",
    role: "Développement JS : architecture modulaire, mapping programmes, hash SHA-256, intégration GTM. Déployé sur 3 environnements (landing pages, brochures, prod).",
    stack: ["JavaScript", "JSON", "GTM", "WordPress"],
    thumbnail: "/projects/ieseg-datalayers-console.jpg",
    images: ["/projects/ieseg-datalayers-console.jpg"]
  },
  {
    id: "decathlon-rappels",
    client: "Decathlon",
    title: "Page Rappels Produits",
    context: "Refonte complète de la page de rappels produits avec système de recherche, filtres par statut et historique par année.",
    role: "Développement front-end : recherche dynamique, filtres, accordéons par année, cartes produits responsive.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://www.decathlon.fr/landing/rappels-produits-decathlon/_/R-a-rappels-produits",
    thumbnail: "/projects/decathlon-rappels-after.jpg",
    images: ["/projects/decathlon-rappels-before.jpg", "/projects/decathlon-rappels-after.jpg"]
  }
];

export default projects;