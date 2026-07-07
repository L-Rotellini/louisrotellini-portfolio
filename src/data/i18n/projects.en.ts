import type { ProjectOverlay } from "./overlay";

// Traductions EN des projets clients (par id). Voir src/data/projects.ts pour le FR.
export const projectsEn: Record<string, ProjectOverlay> = {
  "damart-landing-pages": {
    title: "Editorial Landing Pages — Magento Page Builder",
    context:
      "Reinforcement mission: took over the creation of 6 editorial landing pages (trend blogs, buying guides) on a Magento environment with the native Page Builder. Interactive components (morpho carousel, accordion FAQ) built in vanilla JS and grafted onto a CMS with strong constraints.",
    tagline:
      "6 editorial landing pages delivered independently on Magento: trend blogs, buying guides, an interactive morpho carousel and FAQ, within a constrained CMS.",
    challenges: [
      "Pick up an in-progress project on an unfamiliar environment (reinforcement mission)",
      "Work around Magento Page Builder limits to achieve rich editorial layouts",
      "Embed interactive components (carousel, FAQ) in a CMS not designed for custom JS",
      "Keep visual consistency across 6 pages with heterogeneous content (blogs, guides)",
    ],
    solutions: [
      "Quickly got up to speed with the Magento environment and the project conventions",
      "Used the Page Builder's native HTML blocks as injection points for custom JS",
      "Morpho carousel in vanilla JS with silhouette filters and touch navigation in a popup",
      "Accordion FAQ in vanilla JS: exclusive toggle, other items close automatically",
    ],
    codeSnippetTitles: [
      "Morpho carousel — navigation + silhouette filters",
      "Accordion FAQ — exclusive toggle",
    ],
  },

  "jules-bulant": {
    title: "Artist Portfolio — Nuxt 3 + Sanity CMS",
    context:
      "Full artist portfolio for a painter: responsive gallery with a modal viewer, exhibition management, and a private CMS studio to manage the artworks. Monorepo architecture with a Nuxt 3 front-end and a Sanity Studio back-end.",
    tagline:
      "Modern artist portfolio with an interactive gallery, full-screen modal viewer, mobile touch navigation, and a headless CMS to manage the artworks.",
    challenges: [
      "Create an immersive gallery experience with smooth navigation between artworks",
      "Manage a monorepo architecture (public site + private CMS studio)",
      "Allow simple management of artworks and exhibitions without technical skills",
      "Ensure optimal touch navigation on mobile (swipe between artworks)",
      "Optimize loading of high-resolution images (artworks)",
    ],
    solutions: [
      "Full-screen modal viewer with keyboard/swipe navigation and preloading",
      "Organized monorepo: site/ (Nuxt SSR) + studio/ (Sanity CMS)",
      "Typed Sanity schemas: Paintings, Exhibitions, Profile with multiple images",
      "Native mobile swipe with gesture detection and smooth animations",
      "Nuxt SSR + lazy loading + optimized Sanity images (hotspot, crop)",
    ],
    codeSnippetTitles: [
      "Modal viewer with navigation and mobile swipe",
      "GROQ query to fetch artworks from Sanity",
      "Sanity schema for artworks",
    ],
  },

  "decathlon-rappels": {
    title: "Product Recalls Page",
    context:
      "Complete redesign of the product recalls page: search, filters and navigation by year to make the history browsable.",
    tagline:
      "UX redesign of a critical page: search, filters and navigation by year to make 48+ recalls browsable.",
    challenges: [
      "Handle 48+ recalled products across several years",
      "Enable fast, intuitive search",
      "Visually distinguish active recalls from archived ones",
      "Create clear navigation through the history",
    ],
    solutions: [
      "JS search with real-time filtering",
      "Status filters (All / Active / Archived) with counters",
      "Per-year accordions for the history",
      "Product cards with status badges and animations",
    ],
    codeSnippetTitles: ["Real-time filtering", "Per-year accordions"],
  },

  "decathlon-app": {
    title: "Landing Page — Decathlon App",
    context:
      "Marketing landing page to promote the Decathlon app: clear structure, editorial sections, and social proof (reviews) via a slider.",
    tagline:
      "Marketing landing page for the Decathlon app: conversion hero, editorial sections and a reviews slider to support acquisition.",
    challenges: [
      "Present a clear value proposition (app + benefits) in a few sections",
      "Keep good readability on a long page (quick scan)",
      "Adapt mobile content (order, CTA, blocks) without losing information",
      "Add social proof (reviews) without weighing the page down",
    ],
    solutions: [
      "Conversion-oriented hero (stores + QR code) + CTA reminder at the bottom of the page",
      "Alternating sections (media/text) to pace the reading",
      "Responsive: block reordering and simplification on mobile",
      "Reviews slider with pagination and navigation",
    ],
    codeSnippetTitles: ["Reviews slider (Slick) + navigation"],
  },

  "decathlon-data": {
    title: "Personal Data Page",
    context:
      "UI update of a long legal page to improve readability, hierarchy and navigation, staying aligned with the design system.",
    tagline:
      "UI redesign of a dense legal page: typographic hierarchy and navigation to make the content scannable, without deviating from the design system.",
    challenges: [
      "Make dense legal content readable and scannable",
      "Structure the information without losing completeness",
      "Preserve the Decathlon design system",
    ],
    solutions: [
      "Typographic hierarchy + spacing for scanning",
      "Sections + more explicit headings",
      "Consistent UI components (blocks, separators, emphasis)",
    ],
  },

  "ieseg-fiches": {
    title: "Dynamic job profiles (WordPress)",
    context:
      "Development of a WordPress template to generate 50+ job profiles from structured JSON data (FR/EN). Goal: robust rendering despite variable content, and easy updates for the teams.",
    tagline:
      "WordPress template that generates 50+ FR/EN job profiles from structured JSON, with robust rendering on variable content.",
    challenges: [
      "Industrialize the generation of 50+ profiles from heterogeneous structures",
      "Handle multilingual (FR/EN) and consistent slugs / URLs",
      "Guarantee clean rendering even when some sections are missing (incomplete data)",
      "Keep editing maintainable: content in the JSON, display in the template",
    ],
    solutions: [
      "PHP template split into blocks (missions, skills, training, CTA, etc.) fed by JSON",
      "Fallback system: section hidden if empty, default values, centralized labels (common.json)",
      "FR/EN slug mapping for stable URLs and consistent translation links",
      "Shared content (e.g. contacts) referenced by ID to avoid duplication",
    ],
    codeSnippetTitles: ["JSON loading + conditional rendering (no ACF)"],
  },

  "ieseg-datalayers": {
    title: "DataLayer & Tracking (GTM/GA)",
    context:
      "Set up a robust dataLayer on a multilingual WordPress site: standardized events, program/specialty context, and reliable tracking of CTAs and forms.",
    tagline:
      "Standardized GTM/GA dataLayer for a multilingual WordPress site: unified events, reliable CTA and form tracking.",
    challenges: [
      "Standardize events on a multilingual WordPress site",
      "Infer program/specialty from heterogeneous URLs",
      "Handle dynamic DOM (injected CTAs, forms)",
      "Ensure reliable form tracking (real success) + de-duplication + hash",
    ],
    solutions: [
      "Shared core: init event + logger + utilities + observeDOM",
      "Specific script: CTA/brochure tracking + per-page rules + safe redirect",
      "Maintainable JSON mapping (program/specialty) based on URL",
      "Ninja Forms tracking: snapshot + hooks + MutationObserver + SHA-256",
    ],
    codeSnippetTitles: [
      "Init dataLayer + unified logger",
      "Form tracking: real success + de-duplication",
    ],
  },

  "ieseg-notable-alumni": {
    title: "Notable Alumni (filterable module, WP + WPML)",
    context:
      "Development of a 'Notable Alumni' module filterable by category: dynamic front-end grid (fetch/AJAX), content driven by a custom post type and a taxonomy, WPML-compatible (FR/EN).",
    tagline:
      "'Notable Alumni' module filterable by taxonomy on WP + WPML: dynamic fetch/AJAX grid, state persisted via URL hash, FR/EN multilingual.",
    challenges: [
      "Create a taxonomy filter with dynamic loading (without reloading the page)",
      "Correctly handle multilingual (WPML): translated terms + consistent queries",
      "Guarantee clean rendering even when some fields are empty (photo, bio, company, etc.)",
      "Sort results reliably (alphabetical order by name)",
    ],
    solutions: [
      "PHP endpoint returning alumni as JSON via WP_Query (CPT + tax_query)",
      "WPML language switch on the endpoint + fetching the translated term_id to filter correctly",
      "Front-end rendering in JS (fetch) with a display fallback when a field is missing",
      "Filter persistence via the URL hash to keep state on refresh / link sharing",
    ],
    codeSnippetTitles: ["AJAX endpoint: WPML + tax_query + JSON"],
  },
};

export default projectsEn;
