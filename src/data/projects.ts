export type Project = {
  brand: string;
  role: string;
  period?: string;
  details: string[];
  stack?: string[];
  link?: string;
};

const projects: Project[] = [
  {
    brand: "IÉSEG",
    role: "Développpeur front-end",
    period: "09/2024 – aujourd’hui",
    details: [
      "Webmaster, design, maintenance, développement",
      "HTML, CSS, JavaScript, PHP, Débogage, JSON, Emailing, WordPress, React"
    ],
    stack: ["HTML5", "CSS", "JavaScript", "WordPress / PHP", "Webdesign", "React"],
  },
  {
    brand: "Decathlon",
    role: "Responsable des landing pages (freelance)",
    period: "04/2023 – aujourd’hui",
    details: [
      "Réception & QA des livrables (HTML + assets) de prestataires",
      "Contrôle performance & accessibilité (directives internes)",
      "Publication / dépublication + correctifs rapides",
      "Création ponctuelle de nouvelles LP si besoin",
    ],
    stack: ["HTML5", "CSS", "JavaScript", "QA", "Accessibilité"],
  },
  {
    brand: "Damart",
    role: "Intégrateur web (freelance)",
    period: "12/2021 – 03/2024",
    details: [
      "Remplacement ponctuel de l’intégrateur (congés/arrêts)",
      "LP, guides d’achat, opérations commerciales",
      "Emailing HTML (tables), Liferay → puis Magento / Dartan­gan",
      "Découpe/optimisation médias, intégrations via builder",
    ],
    stack: ["HTML5", "CSS", "JavaScript", "Photoshop", "Liferay", "Magento", "Emailing"],
  },
  {
    brand: "Disneyland Paris",
    role: "Content integrator (app mobile – freelance)",
    period: "12/2021 – 01/2024",
    details: [
      "Intégration contenu multi-langues dans Tridion (app parcs)",
      "Workflow anglais (équipes US/Amérique du Sud)",
      "Clés schémas fournies par front designers (Confluence → Tridion)",
      "Pré-prod puis mise en prod avec QA",
    ],
    stack: ["JSON", "HTML", "Figma", "Tridion", "Teamwork"],
  },
  {
    brand: "Crédit Mutuel",
    role: "Intégrateur web (freelance)",
    period: "09/2021 – 12/2021",
    details: [
      "Pages services & actualités : intégration et maintenance",
      "Structure, accessibilité, cohérence UI",
      "Coordination design / contenu / dev",
    ],
    stack: ["HTML", "CSS", "Photoshop", "Emailing", "DotLiquid"],
  },
  {
    brand: "Promod",
    role: "Intégrateur web (freelance)",
    period: "09/2020 – 12/2021",
    details: [
      "Soutien ops commerciales (bannières, habillages)",
      "Injection JS contrôlée sur pages produit",
      "Respect strict de la charte visuelle",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    brand: "La Foir’Fouille",
    role: "Intégrateur web (freelance)",
    period: "02/2020 – 12/2021",
    details: [
      "Refonte complète du site (collab design)",
      "Site interne WordPress pour la centrale d’achat",
      "LP récurrentes pour opérations marketing",
    ],
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "Adobe XD"],
  },
  {
    brand: "Tape à l’œil",
    role: "Webmaster / Intégrateur (freelance)",
    period: "10/2019 – 11/2019",
    details: [
      "Renfort pendant transition d’équipe",
      "Formation & passation au/à la remplaçant(e)",
      "Ops commerciales & adaptations front",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Photoshop", "Hybris"],
  },
  {
    brand: "Blancheporte",
    role: "Intégrateur e-mail (freelance)",
    period: "04/2019 – 09/2019",
    details: [
      "Intégration emails HTML (tables, compat clients)",
      "Tests Email on Acid & QA multi-clients",
      "Ops AB Tasty (tests A/B & perso)",
    ],
    stack: ["HTML", "CSS", "Photoshop", "Emailing", "AB Tasty"],
  },
  {
    brand: "Cometik / Novaseo",
    role: "Intégrateur web (agence)",
    period: "09/2017 – 08/2018",
    details: [
      "Refonte CMS de l’agence (front du builder)",
      "Montée en compétence JS (Angular), jQuery",
      "Collab étroite avec développeur back",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Angular", "jQuery", "Git"],
  },
  {
    brand: "Sites vitrines & e-commerce (TPE)",
    role: "Créateur de sites (freelance)",
    period: "09/2017 – 12/2025",
    details: [
      "Gestion de A à Z : cadrage, design, dev, SEO, maintenance",
      "Thèmes vierges & optimisation sur mesure",
      "Suivi client et évolutions continues",
    ],
    stack: ["HTML", "CSS", "WordPress", "jQuery", "JavaScript", "SEO"],
  },
];

export default projects;
