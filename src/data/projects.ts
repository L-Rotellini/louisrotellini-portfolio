export type Project = {
  id: string;
  client: string;
  title: string;
  context: string;
  stack: string[];
  year?: string;
  url?: string;

  // media (règle unique)
  after: string; // obligatoire = thumbnail + image principale
  before?: string; // optionnel = active avant/après
  mobile?: string; // optionnel = aperçu mobile

  tagline?: string;
  challenges?: string[];
  solutions?: string[];
  codeSnippets?: { title: string; language: string; code: string }[];
  facts?: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    id: "decathlon-app",
    client: "Decathlon",
    title: "Landing Page — Decathlon App",
    context:
      "Création d’une landing page marketing pour promouvoir l’app Decathlon : structure claire, sections éditoriales, et preuve sociale (avis) via slider.",
    stack: ["HTML", "CSS", "JavaScript", "Slick.js"],
    year: "2023",
    url: "https://www.decathlon.fr/landing/application-decathlon-decathlon/_/R-a-appli-decathlon",

    after: "/projects/decathlon-app-desktop.jpg",
    mobile: "/projects/decathlon-app-mobile.jpg",

    challenges: [
      "Présenter une proposition de valeur claire (app + bénéfices) en quelques sections",
      "Maintenir une bonne lisibilité sur une page longue (scan rapide)",
      "Adapter le contenu mobile (ordre, CTA, blocs) sans perdre d’information",
      "Ajouter une preuve sociale (avis) sans alourdir la page",
    ],
    solutions: [
      "Hero orienté conversion (stores + QR code) + rappel CTA en bas de page",
      "Sections alternées (media/texte) pour rythmer la lecture",
      "Responsive : réorganisation des blocs et simplification sur mobile",
      "Slider d’avis avec pagination et navigation",
    ],
    codeSnippets: [
      {
        title: "Slider d’avis (Slick) + navigation",
        language: "javascript",
        code: `$(document).ready(function () {
  $('.slider--object').slick({
    dots: true,
    dotsClass: 'slick-pastilles slick-pastilles-circles',
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768,  settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
});

$('.slider--prev').prop('disabled', true);
$('.slider--prev').click(() => $('.slider--object').slick('slickPrev'));
$('.slider--next').click(() => $('.slider--object').slick('slickNext'));

$('.slider--object').on('afterChange', function (event, slick, currentSlide) {
  $('.slider--prev').prop('disabled', currentSlide === 0);
  $('.slider--next').prop('disabled', currentSlide === slick.slideCount - slick.options.slidesToShow);
});`,
      },
    ],
  },

  {
    id: "decathlon-data",
    client: "Decathlon",
    title: "Page Données Personnelles",
    context:
      "Mise à jour UI d’une page légale longue pour améliorer lisibilité, hiérarchie et navigation, en restant aligné avec le design system.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    url: "https://www.decathlon.fr/landing/donnees-personnelles/_/R-a-donnees-personnelles",

    after: "/projects/decathlon-data-after.jpg",
    before: "/projects/decathlon-data-before.jpg",
    mobile: "/projects/decathlon-data-mobile.jpg",

    challenges: [
      "Rendre un contenu légal dense lisible et scannable",
      "Structurer l’information sans perdre en exhaustivité",
      "Préserver le design system Decathlon",
    ],
    solutions: [
      "Hiérarchie typographique + espacements pour le scan",
      "Sections + titres plus explicites",
      "Composants UI cohérents (blocs, séparateurs, emphases)",
    ],
  },

  {
    id: "ieseg-fiches",
    client: "IÉSEG",
    title: "Fiches Métiers (WordPress)",
    context:
      "Création d’un template WordPress pour afficher des fiches métiers dynamiques à partir de données structurées (JSON), avec un rendu cohérent et maintenable.",
    stack: ["WordPress", "PHP", "ACF", "JSON", "HTML", "CSS"],
    year: "2024",
    url: "https://ieseg.fr/domaines-expertise/marketing-communication/analyste-cybersecurite/",

    after: "/projects/ieseg-fiches-desktop.jpg",
    mobile: "/projects/ieseg-fiches-mobile.jpg",

    challenges: [
      "Créer un template réutilisable pour 50+ métiers",
      "Structurer des données hétérogènes (salaire, compétences, formations, missions)",
      "Garantir un rendu cohérent malgré des contenus variables",
      "Permettre aux équipes de mettre à jour facilement sans casser la mise en page",
    ],
    solutions: [
      "Template PHP modulaire (sections/blocs) basé sur un modèle de contenu",
      "Données structurées (JSON + champs) pour fiabiliser l’affichage",
      "Composants réutilisables : cards, listes, CTA",
      "Règles de fallback (champ vide → section masquée) pour éviter les trous",
    ],
    codeSnippets: [
      {
        title: "Template : rendu conditionnel depuis JSON",
        language: "php",
        code: `// Exemple : rendre une section uniquement si des données existent
$job_data_json = get_field('job_data_json'); // ACF (texte JSON)
$data = $job_data_json ? json_decode($job_data_json, true) : [];

$skills = $data['skills'] ?? [];
if (!empty($skills)) : ?>
  <section class="job-section">
    <h2>Compétences clés</h2>
    <ul>
      <?php foreach ($skills as $skill) : ?>
        <li><?php echo esc_html($skill); ?></li>
      <?php endforeach; ?>
    </ul>
  </section>
<?php endif; ?>`,
      },
    ],
  },

  {
    id: "ieseg-datalayers",
    client: "IÉSEG",
    title: "DataLayer & Tracking (GTM/GA)",
    context:
      "Mise en place d’une dataLayer robuste sur WordPress multi-langue : événements standardisés, contexte programme/spécialité, et tracking fiable des CTA et formulaires.",
    stack: ["WordPress", "PHP", "JavaScript", "GTM/GA"],
    year: "2025",

    after: "/projects/ieseg-datalayers-desktop.jpg",

    challenges: [
      "Standardiser les événements sur un site WordPress multi-langue",
      "Déduire programme/spécialité à partir d’URLs hétérogènes",
      "Gérer du DOM dynamique (CTA injectés, formulaires)",
      "Assurer un tracking formulaire fiable (succès réel) + anti-doublon + hash",
    ],
    solutions: [
      "Core mutualisé : init event + logger + utilitaires + observeDOM",
      "Script spécifique : tracking CTA/brochure + rules par page + redirection safe",
      "Mapping JSON maintenable (program/speciality) basé sur URL",
      "Tracking Ninja Forms : snapshot + hooks + MutationObserver + SHA-256",
    ],
    codeSnippets: [
      {
        title: "Init dataLayer + logger unifié",
        language: "javascript",
        code: `window.dataLayer = window.dataLayer || [];
document.addEventListener('DOMContentLoaded', function () {
  const initEvent = {
    event: "initialization_page",
    page_language: wpDataLayer.page_language || '',
    page_type: wpDataLayer.page_type || '',
    page_program: wpDataLayer.page_program || '',
    page_speciality: wpDataLayer.page_speciality || ''
  };
  window.dataLayer.push(initEvent);
  console.log('✅ Event - initialization_page (core):', initEvent);
});

window.logDataLayerEvent = function(label, data) {
  console.log(\`✅ Event - \${label}:\`, data);
  window.dataLayer.push(data);
};`,
      },
      {
        title: "Tracking formulaire : succès réel + anti-doublon",
        language: "javascript",
        code: `let sentOnce = false;

async function pushAfterSuccess() {
  if (sentOnce) return;
  // ... lecture email + hash SHA-256 ...
  const eventData = { event: 'contact_form_submitted', /* ... */ };
  window.logDataLayerEvent('contact_form_submitted', eventData);
  sentOnce = true;
}

document.addEventListener('nfFormSubmitResponse', () => pushAfterSuccess());

const mo = new MutationObserver(() => {
  // ... msgShown || formHidden ...
  pushAfterSuccess();
});

// mo.observe(formContainer, { subtree: true, childList: true, attributes: true });`,
      },
    ],
  },

  {
    id: "decathlon-rappels",
    client: "Decathlon",
    title: "Page Rappels Produits",
    context:
      "Refonte complète de la page de rappels produits : recherche, filtres et navigation par année pour rendre l’historique consultable.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    url: "https://www.decathlon.fr/landing/rappels-produits-decathlon/_/R-a-rappels-produits",

    after: "/projects/decathlon-rappels-after.jpg",
    before: "/projects/decathlon-rappels-before.jpg",
    mobile: "/projects/decathlon-rappels-mobile.jpg",

    tagline:
      "Refonte UX d’une page critique : recherche, filtres et navigation par année pour rendre 48+ rappels consultables.",

    challenges: [
      "Gérer 48+ produits rappelés sur plusieurs années",
      "Permettre une recherche rapide et intuitive",
      "Différencier visuellement les rappels en cours des archivés",
      "Créer une navigation claire dans l'historique",
    ],
    solutions: [
      "Recherche JS avec filtrage en temps réel",
      "Filtres par statut (Tous / En cours / Archivés) avec compteurs",
      "Accordéons par année pour l'historique",
      "Cards produits avec badges de statut et animations",
    ],
    codeSnippets: [
      {
        title: "Filtrage en temps réel",
        language: "javascript",
        code: `function filterRecalls() {
  const searchTerm = searchInput.value.toLowerCase();
  const activeFilter = document.querySelector('.recall-toolbar__filter--active').dataset.filter;

  const filtered = recalls.filter(recall => {
    const matchesSearch = recall.title.toLowerCase().includes(searchTerm)
      || recall.description.toLowerCase().includes(searchTerm);

    const matchesFilter = activeFilter === 'all'
      || (activeFilter === 'current' && recall.status === 'current')
      || (activeFilter === 'archived' && recall.status === 'archived');

    return matchesSearch && matchesFilter;
  });

  renderCards(filtered);
  updateCounts();
}`,
      },
      {
        title: "Accordéons par année",
        language: "javascript",
        code: `function renderArchive(recalls) {
  const years = [...new Set(recalls.map(r => new Date(r.date).getFullYear()))]
    .sort((a, b) => b - a);

  years.forEach(year => {
    const yearRecalls = recalls.filter(r => new Date(r.date).getFullYear() === year);
    const accordion = createYearAccordion(year, yearRecalls);
    archiveContainer.appendChild(accordion);
  });
}`,
      },
    ],
    facts: [
      { label: "Client", value: "Decathlon" },
      { label: "Année", value: "2025" },
      { label: "Stack", value: "HTML / CSS / JavaScript" },
      { label: "Volume", value: "48+ produits, multi-années" },
      { label: "Livrables", value: "UI + logique recherche/filtre" },
      { label: "Rôle", value: "Dev front + UX" },
    ],
  },
];

export default projects;
