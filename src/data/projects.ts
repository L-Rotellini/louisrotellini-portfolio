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
};

const projects: Project[] = [
  {
  id: "damart-landing-pages",
  client: "Damart",
  title: "Landing Pages Éditoriales — Magento Page Builder",
  context:
    "Mission de renfort : prise en charge de la création de 6 landing pages éditoriales (blogs tendance, guides d'achat) sur un environnement Magento avec Page Builder natif. Composants interactifs (carousel morpho, FAQ accordéon) développés en JS vanilla et greffés sur un CMS aux contraintes fortes.",
  stack: ["HTML", "CSS", "JavaScript", "Magento"],
  year: "2026",
  url: "https://www.damart.fr/guide-pantalon",

  after: "/projects/damart-guide-pantalon-desktop.jpg",
  mobile: "/projects/damart-guide-pantalon-mobile.jpg",

  tagline:
    "6 landing pages éditoriales livrées en autonomie sur Magento : blogs tendance, guides d'achat, carousel morpho interactif et FAQ — dans un environnement CMS contraint.",

  challenges: [
    "Reprendre un projet en cours sur un environnement inconnu (mission de renfort)",
    "Contourner les limitations du Page Builder Magento pour des mises en page éditoriales riches",
    "Intégrer des composants interactifs (carousel, FAQ) dans un CMS non prévu pour du JS custom",
    "Assurer une cohérence visuelle sur 6 pages aux contenus hétérogènes (blogs, guides)",
  ],

  solutions: [
    "Prise en main rapide de l'environnement Magento et des conventions du projet",
    "Utilisation des blocs HTML natifs du Page Builder comme points d'injection pour le JS custom",
    "Carousel morpho en JS vanilla avec filtres par silhouette et navigation tactile en popup",
    "FAQ accordéon en JS vanilla : toggle exclusif, fermeture automatique des autres items",
  ],

  codeSnippets: [
    {
      title: "Carousel morpho — navigation + filtres par silhouette",
      language: "javascript",
      code: `const slides = document.querySelectorAll('.slide');
const filterButtons = document.querySelectorAll('.filter-button');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  filterButtons.forEach(b => b.classList.remove('active'));
  slides[index].classList.add('active');
  filterButtons[index].classList.add('active');
  currentIndex = index;
}

document.getElementById('prev').addEventListener('click', () => {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
});
document.getElementById('next').addEventListener('click', () => {
  showSlide((currentIndex + 1) % slides.length);
});
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => showSlide(+btn.dataset.index));
});`,
    },
    {
      title: "FAQ accordéon — toggle exclusif",
      language: "javascript",
      code: `document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Ferme tous les autres items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle l'item actuel
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});`,
    },
  ],
},
  {
    id: "jules-bulant",
    client: "Jules Bulant",
    title: "Portfolio Artistique — Nuxt 3 + Sanity CMS",
    context:
      "Création d'un portfolio artistique complet pour un artiste peintre : galerie responsive avec modal viewer, gestion des expositions, et studio CMS privé pour gérer les œuvres. Architecture monorepo avec frontend Nuxt 3 et backend Sanity Studio.",
    stack: ["Nuxt 3", "Sanity CMS", "TypeScript", "CSS", "React 19"],
    year: "2026",
    url: "https://julesbulant.fr",

    // À compléter avec tes captures d'écran
    after: "/projects/jules-bulant-desktop.jpg",
    mobile: "/projects/jules-bulant-mobile.jpg",
    // before: "/projects/jules-bulant-before.jpg", // Si tu as un avant/après

    tagline:
      "Portfolio artistique moderne avec galerie interactive, modal viewer plein écran, navigation tactile mobile, et CMS headless pour gérer les œuvres.",

    challenges: [
      "Créer une expérience galerie immersive avec navigation fluide entre les œuvres",
      "Gérer une architecture monorepo (site public + studio CMS privé)",
      "Permettre une gestion simple des œuvres et expositions sans compétences techniques",
      "Assurer une navigation tactile optimale sur mobile (swipe entre œuvres)",
      "Optimiser le chargement d'images haute résolution (œuvres d'art)",
    ],

    solutions: [
      "Modal viewer plein écran avec navigation clavier/swipe et préchargement",
      "Monorepo organisé : site/ (Nuxt SSR) + studio/ (Sanity CMS)",
      "Schémas Sanity typés : Paintings, Exhibitions, Profile avec images multiples",
      "Swipe mobile natif avec détection de gestes et animations fluides",
      "SSR Nuxt + lazy loading + images optimisées Sanity (hotspot, crop)",
    ],

    codeSnippets: [
      {
        title: "Modal viewer avec navigation et swipe mobile",
        language: "typescript",
        code: `// Composables/useModal.ts - Gestion du modal avec navigation
  const currentIndex = ref(0);
  const paintings = ref<Painting[]>([]);

  function openModal(index: number) {
    currentIndex.value = index;
    document.body.style.overflow = 'hidden';
    
    // Précharger images adjacentes
    preloadAdjacentImages(index);
  }

  function navigate(direction: 'prev' | 'next') {
    if (direction === 'prev' && currentIndex.value > 0) {
      currentIndex.value--;
    } else if (direction === 'next' && currentIndex.value < paintings.value.length - 1) {
      currentIndex.value++;
    }
    preloadAdjacentImages(currentIndex.value);
  }

  // Support navigation clavier
  onMounted(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'Escape') closeModal();
    });
  });`,
      },
      {
        title: "Requête GROQ pour récupérer les œuvres depuis Sanity",
        language: "typescript",
        code: `// server/api/paintings.get.ts
  import { sanityClient } from '~/utils/sanity';

  export default defineEventHandler(async () => {
    const query = \`
      *[_type == "painting"] | order(order asc) {
        _id,
        title,
        slug,
        year,
        technique,
        dimensions,
        availability,
        price,
        "coverImage": images[isCover == true][0]{
          "url": asset->url,
          hotspot
        },
        "allImages": images[]{
          "url": asset->url,
          hotspot,
          caption
        }
      }
    \`;
    
    try {
      const paintings = await sanityClient.fetch(query);
      return { paintings };
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: 'Erreur lors de la récupération des œuvres'
      });
    }
  });`,
      },
      {
        title: "Schéma Sanity pour les œuvres",
        language: "typescript",
        code: `// studio/schemas/painting.ts
  export default {
    name: 'painting',
    title: 'Œuvres',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'isCover',
              title: 'Image de couverture',
              type: 'boolean'
            },
            {
              name: 'caption',
              title: 'Légende',
              type: 'string'
            }
          ]
        }],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'technique',
        title: 'Technique',
        type: 'string'
      },
      {
        name: 'dimensions',
        title: 'Dimensions',
        type: 'string',
        description: 'Ex: 100 × 80 cm'
      },
      {
        name: 'availability',
        title: 'Disponibilité',
        type: 'string',
        options: {
          list: [
            { title: 'Disponible', value: 'available' },
            { title: 'Vendue', value: 'sold' },
            { title: 'Sur demande', value: 'on_request' }
          ]
        }
      }
    ]
  }`,
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
  },
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
    title: "Fiches métiers dynamiques (WordPress)",
    context:
      "Développement d’un template WordPress pour générer 50+ fiches métiers à partir de données JSON structurées (FR/EN). Objectif : un rendu robuste malgré des contenus variables, et une mise à jour simple côté équipes.",

    stack: ["WordPress", "PHP", "JSON", "HTML", "CSS"],
    year: "2025",
    url: "https://ieseg.fr/domaines-expertise/marketing-communication/analyste-cybersecurite/",

    after: "/projects/ieseg-fiches-desktop.jpg",
    mobile: "/projects/ieseg-fiches-mobile.jpg",

    challenges: [
      "Industrialiser la génération de 50+ fiches à partir de structures hétérogènes",
      "Gérer le multilingue (FR/EN) et la cohérence des slugs / URLs",
      "Garantir un rendu propre même si certaines sections sont absentes (données incomplètes)",
      "Rendre l’édition maintenable : contenu dans les JSON, affichage dans le template",
    ],

    solutions: [
      "Template PHP découpé en blocs (missions, compétences, formations, CTA, etc.) alimentés par JSON",
      "Système de fallback : section masquée si vide, valeurs par défaut, labels centralisés (common.json)",
      "Mapping des slugs FR/EN pour des URLs stables et des liens de traduction cohérents",
      "Contenus partagés (ex : contacts) référencés par ID pour éviter les duplications",
    ],

    codeSnippets: [
    {
      title: "Chargement JSON + rendu conditionnel (sans ACF)",
      language: "php",
      code: `// Déterminer la langue (ex : via WPML/Polylang ou une règle maison)
  $lang = function_exists('pll_current_language') ? pll_current_language('slug') : 'fr';

  // Exemple : URL -> .../marketing-communication/analyste-cybersecurite/
  // $category_slug et $job_slug proviennent du routage/template
  $category_slug = get_query_var('category_slug');
  $job_slug      = get_query_var('job_slug');

  // Charger le JSON de la catégorie (fr/categories/<slug>.json)
  $json_path = get_stylesheet_directory() . "/fiches-metiers/{$lang}/categories/{$category_slug}.json";
  $items = file_exists($json_path) ? json_decode(file_get_contents($json_path), true) : [];

  // Retrouver la fiche par slug
  $job = null;
  foreach ($items as $item) {
    if (($item['slug'] ?? '') === $job_slug) {
      $job = $item;
      break;
    }
  }
  if (!$job) {
    // 404 si fiche introuvable
    status_header(404);
    nocache_headers();
    include get_404_template();
    exit;
  }

  // Exemple : rendre une section uniquement si la donnée existe
  $skills = $job['competences_block']['items'] ?? [];
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
    url: "https://www.ieseg.fr/programmes/bachelor-international-business/",
    
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
  id: "ieseg-notable-alumni",
  client: "IÉSEG",
  title: "Notable Alumni (module filtrable, WP + WPML)",
  context:
    "Développement d’un module “Notable Alumni” filtrable par catégories : grille dynamique côté front (fetch/AJAX), contenu piloté par un custom post type et une taxonomie, compatible WPML (FR/EN).",

  stack: ["WordPress", "PHP", "WP_Query", "WPML", "JavaScript", "Fetch/AJAX", "CSS"],
  year: "2025",
  url: "https://www.ieseg.fr/lecole/a-propos/diplomes-emblematiques/",

  after: "/projects/notable-alumni-desktop.jpg",
  mobile: "/projects/notable-alumni-mobile.jpg",

  challenges: [
    "Créer un filtre par taxonomie avec chargement dynamique (sans recharger la page)",
    "Gérer correctement le multilingue (WPML) : termes traduits + requêtes cohérentes",
    "Garantir un rendu propre même si certains champs sont vides (photo, bio, société, etc.)",
    "Trier les résultats de manière fiable (ordre alphabétique sur le nom)",
  ],

  solutions: [
    "Endpoint PHP qui renvoie les alumni en JSON via WP_Query (CPT + tax_query)",
    "Switch de langue WPML côté endpoint + récupération du term_id traduit pour filtrer correctement",
    "Rendu front en JS (fetch) avec fallback d’affichage si champ absent",
    "Persistance du filtre via le hash d’URL pour garder l’état au refresh / partage de lien",
  ],

  codeSnippets: [
    {
      title: "Endpoint AJAX : WPML + tax_query + JSON",
      language: "php",
      code: `<?php
require_once('../../../wp-load.php');
header('Content-Type: application/json');

$lang = isset($_GET['lang']) ? sanitize_text_field($_GET['lang']) : 'fr';
$category = isset($_GET['category']) ? sanitize_text_field($_GET['category']) : '';

do_action('wpml_switch_language', $lang);

$args = [
  'post_type'      => 'notable-alumnus',
  'posts_per_page' => -1,
  'post_status'    => 'publish',
  'orderby'        => 'title',
  'order'          => 'ASC',
];

// Filtre par catégorie (taxonomie) avec traduction WPML
if (!empty($category)) {
  $term = get_term_by('slug', $category, 'notable-alumni-category');
  if ($term && function_exists('apply_filters')) {
    $translated_term_id = apply_filters('wpml_object_id', $term->term_id, 'notable-alumni-category', true, $lang);
    if ($translated_term_id) {
      $args['tax_query'] = [[
        'taxonomy' => 'notable-alumni-category',
        'field'    => 'term_id',
        'terms'    => $translated_term_id,
      ]];
    }
  }
}

$q = new WP_Query($args);
$out = [];

while ($q->have_posts()) {
  $q->the_post();
  $id = get_the_ID();

  $out[] = [
    'title'     => get_the_title(),
    'thumbnail' => get_the_post_thumbnail_url($id, 'full'),
    'poste'     => get_post_meta($id, 'wpcf-poste', true),
    'societe'   => get_post_meta($id, 'wpcf-societe', true),
    'annee'     => get_post_meta($id, 'wpcf-annee-diplomation', true),
    'bio_url'   => get_post_meta($id, 'wpcf-biographie', true),
    'categories'=> wp_get_post_terms($id, 'notable-alumni-category', ['fields' => 'names']),
  ];
}

wp_reset_postdata();
echo json_encode($out);
exit;`,
    },
  ],
}

];

export default projects;
