// Dictionnaire FR : source de vérité de la forme `Dictionary`.
// en.ts doit satisfaire ce même type.

export const fr = {
  nav: {
    homeAria: "Louis Rotellini, accueil",
    projets: "Projets",
    contact: "Contact",
    themeToggle: "Basculer le thème",
    mobileNav: "Navigation mobile",
    switchLabel: "EN",
    switchAria: "Switch to English",
  },

  hero: {
    metaHeader: "Lille · France · LR-2026",
    signature: {
      pre: "Je construis des produits en ",
      bold: "pilotant l'IA",
      post: " : je cadre, je dirige, je vérifie.",
    },
    subtitle: {
      pre: "AI Product Engineer. React, Next.js, TypeScript et agents IA avec ",
      bold: "Claude Code",
      post: ", de l'idée à la production. 10 ans de dev web : aujourd'hui je dirige l'IA et j'audite le code produit. Ex-Decathlon, Damart, IÉSEG.",
    },
    tags: [
      "ai product engineer",
      "claude code",
      "agents ia",
      "next.js",
      "typescript",
      "react",
      "rag",
    ],
    contactCta: "Me contacter",
    linkedin: "LinkedIn",
    newTab: "(nouvel onglet)",
  },

  sideProjects: {
    eyebrowLabel: "Side projects",
    productsWord: "produits IA",
    title: "Mes produits IA, en autonomie.",
    intro:
      "Construits en pilotant l'IA, du cadrage à la mise en prod. Je pilote Claude Code pour développer ; les produits intègrent le LLM adapté au besoin, souvent Mistral pour la conformité européenne.",
    cardBadge: "PRODUIT",
  },

  projects: {
    eyebrowLabel: "Projets",
    eyebrowMeta: "Sélection 2025-2026",
    title: "Sélection clients récents.",
    intro:
      "Front-end et intégration sur des produits à fort trafic : Magento, WordPress, environnements contraints.",
  },

  process: {
    eyebrowLabel: "Comment j'aborde un projet",
    eyebrowMeta: "approche & expertise",
    title: "Comment j'aborde un projet.",
    intro:
      "Basé à Lille, je travaille en distanciel partout en France et au Benelux, ou en présentiel sur Paris et Lille.",
    items: [
      {
        title: "Construction de produits en pilotant l'IA",
        text: "De l'idée à la production, je cadre, je dirige l'IA et j'audite ce qu'elle produit : avancer vite sans jamais livrer ce que je ne contrôle pas. Next.js, TypeScript, intégration LLM quand elle apporte de la valeur.",
        metaEnd: "↳ Produit",
      },
      {
        title: "Intégration LLM",
        text: "Connecter des modèles de langage à des interfaces et des workflows concrets : agents, OCR, RAG.",
        metaEnd: "↳ IA appliquée",
      },
      {
        title: "Front-end React/Next.js moderne",
        text: "Refontes, modules et intégrations : interfaces rapides, accessibles et maintenables en React, Next.js, TypeScript.",
        metaEnd: "↳ Front-end",
      },
    ],
    clientsLine: "Mes clients récents : Decathlon, Damart, IÉSEG.",
  },

  workflow: {
    eyebrowLabel: "Workflow",
    eyebrowMeta: "je pilote l'IA · décisions humaines",
    title: "Mon workflow : je pilote l'IA",
    intro:
      "Je pilote Claude Code et les outils IA équivalents sur l'ensemble du cycle de développement, avec jugement.",
    quoteLine1: "L'IA accélère le code.",
    quoteLine2:
      "Je ne livre pas ce que je ne contrôle pas : contexte, validation et décisions critiques restent sous mon contrôle.",
    rows: [
      { num: "01", step: "Specs · contexte", role: "humain", pct: "100%" },
      { num: "02", step: "Claude Code · génération", role: "agent", pct: "~70%" },
      { num: "03", step: "Revue · tests", role: "humain", pct: "100%" },
      { num: "04", step: "Production · livraison", role: "humain", pct: "100%" },
    ],
    roleHuman: "humain",
    roleAgent: "agent",
    stackLabel: "Stack",
  },

  contact: {
    eyebrowLabel: "Contact",
    eyebrowMeta: "email · linkedin",
    title: "Me contacter.",
    emailMeta: "EMAIL · DIRECT",
    linkedinMeta: "RÉSEAU · MESSAGE",
    maltLabel: "Profil Malt",
    maltMeta: "PROFIL",
    newTab: "(nouvel onglet)",
  },

  footer: {
    contact: "Contact",
    legal: "Mentions légales",
    newTab: "(nouvel onglet)",
  },

  projectPage: {
    back: "← Retour aux projets",
    challenges: "Challenges",
    solutions: "Solutions",
    nextEyebrow: "→ Suite",
    otherProjects: "Autres projets",
    breadcrumbHome: "Accueil",
    breadcrumbProjects: "Projets",
    newTab: "(nouvel onglet)",
  },

  notFound: {
    metaTitle: "Page introuvable",
    eyebrow: "04 / Not found · Route invalide",
    body: "Cette page n'existe pas, ou plus. Tu peux revenir à l'accueil, ou m'écrire si tu cherchais quelque chose en particulier.",
    backHome: "Retour à l'accueil",
    emailCta: "Écrire un email",
  },

  legal: {
    metaTitle: "Mentions légales",
    metaDescription:
      "Informations légales relatives au site louisrotellini.fr, conformément à la loi pour la confiance dans l'économie numérique.",
    back: "← Retour à l'accueil",
    title: "Mentions légales.",
    intro:
      "Informations légales relatives au site louisrotellini.fr, conformément à la loi pour la confiance dans l'économie numérique.",
    publisherTitle: "01 / Éditeur",
    publisherRole: "Louis Rotellini, AI Product Engineer.",
    publisherLocation: "Lille / Paris, France.",
    contactPrefix: "Contact : ",
    hostTitle: "02 / Hébergeur",
    hostBody: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    ipTitle: "03 / Propriété intellectuelle",
    ipBody:
      "L'ensemble des contenus présents sur ce site (textes, code, images, structure) est protégé par le droit d'auteur. Toute reproduction, même partielle, est soumise à autorisation préalable.",
    dataTitle: "04 / Données personnelles",
    dataBody:
      "Ce site n'utilise aucun cookie tiers à des fins publicitaires. Les statistiques de visite sont collectées via Vercel Web Analytics, anonymement et sans transfert hors UE.",
    dataBullets: [
      "Aucune création de profil utilisateur",
      "Aucun cookie publicitaire",
      "Données anonymisées, conservées 30 jours",
    ],
    contactTitle: "05 / Contact",
    contactBody: "Pour toute question relative aux mentions légales ou à la protection des données : ",
    lastUpdate: "Dernière mise à jour · Mai 2026",
  },

  mail: {
    subject: "Prise de contact",
    body: `Bonjour Louis,

Je vous contacte suite à la consultation de votre portfolio.

Merci !`,
  },

  meta: {
    title: "Louis Rotellini · AI Product Engineer · React / Next.js / TypeScript",
    description:
      "AI Product Engineer. Je construis des produits en pilotant l'IA, de l'idée à la production : React, Next.js, TypeScript, agents IA avec Claude Code. Produits IA et références grands comptes (Decathlon, Damart, IÉSEG).",
    keywords: [
      "AI Product Engineer",
      "AI Engineer",
      "Product Engineer",
      "AI Product Builder",
      "construire des produits IA",
      "piloter l'IA",
      "agents IA",
      "Claude Code",
      "intégration LLM",
      "Mistral",
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "RAG",
      "Lille",
      "Paris",
    ],
    ogTitle:
      "AI Product Engineer · React / Next.js / TypeScript · Je construis des produits en pilotant l'IA",
    ogImageAlt:
      "Portfolio de Louis Rotellini : AI Product Engineer · React / Next.js · Claude Code",
    jobTitle: "AI Product Engineer",
    personDescription:
      "AI Product Engineer à Lille. Je construis des produits en pilotant l'IA : React, Next.js, TypeScript, agents IA avec Claude Code. Ex-Decathlon, Damart, IÉSEG.",
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Claude Code",
      "Agents IA",
      "RAG",
      "MCP",
      "Mistral",
      "Intégration LLM",
      "Construction de produits en pilotant l'IA",
      "Tailwind CSS",
    ],
    serviceName: "Louis Rotellini · AI Product Engineer",
    serviceDescription:
      "Construction de produits en pilotant l'IA (Next.js, TypeScript), intégration LLM et développement front-end React / Next.js, avec un workflow piloté par Claude Code.",
    serviceTypes: [
      "Construction de produits en pilotant l'IA",
      "Pilotage Claude Code",
      "Intégration LLM",
      "Développement front-end React / Next.js / TypeScript",
    ],
    consoleTitle: "Louis Rotellini, AI Product Engineer",
    consolePortfolio: "Portfolio : https://www.louisrotellini.fr",
    consoleSpecialties: "Spécialités : Claude Code · Next.js · TypeScript · Agents IA",
  },
};

export type Dictionary = typeof fr;

export default fr;
