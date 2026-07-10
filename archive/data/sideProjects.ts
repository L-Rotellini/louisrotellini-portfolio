import type { Project } from "./projects";

const sideProjects: Project[] = [
  {
    id: "horizon",
    client: "Side project",
    title: "Horizon : Hub de connaissance personnel augmenté par IA",
    tagline:
      "Hub de connaissance personnel augmenté par IA · En construction (MVP fonctionnel)",
    context:
      "Un espace de travail en chat où plusieurs agents IA spécialisés par domaine partagent une base de connaissance commune. L'architecture est pensée autour d'un principe : l'IA propose, l'humain valide (le modèle n'a jamais d'accès en écriture à la base, zéro dérive). Direction visuelle « Altitude ».",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Anthropic SDK"],
    status: "En construction (MVP fonctionnel)",
    after: "/projects/horizon-desktop.jpg",
    mobile: "/projects/horizon-mobile.jpg",
    solutions: [
      "Routeur d'agents : sélection avec niveau de confiance, forçage manuel possible",
      "RAG sur embeddings pour mobiliser le bon contexte",
      "Réponses en streaming avec citations des sources",
      "Artefacts éditables dans un canevas",
      "Modèles LLM épinglés et centralisés (une seule valeur à changer pour migrer de version)",
      "Clé API strictement côté serveur, accès base derrière RLS",
      "Priorité coût : recherche web désactivée par défaut, modèle le moins cher adapté à chaque tâche, cache de prompt préservé",
    ],
  },
  {
    id: "doctap",
    client: "Side project",
    title: "DocTap : PWA de capture et mise en forme de documents en PDF",
    tagline:
      "PWA mobile-first qui transforme des photos de documents en PDF propres, prêts à imprimer. Conçue, développée et déployée en autonomie en pilotant Claude Code de bout en bout.",
    context:
      "Une PWA mobile-first qui transforme des photos de documents en PDF propres, prêts à imprimer. Deux modes, deux pipelines techniques distincts : un mode Photos 100% local et un mode IA (OCR) qui reconstruit un PDF texte natif, avec vérification humaine avant génération.",
    stack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Zustand",
      "IndexedDB",
      "pdf-lib",
      "@react-pdf/renderer",
      "API Mistral",
      "PWA",
      "Tailwind CSS",
      "Vercel",
    ],
    status: "En production publique",
    url: "https://doctap.app",
    after: "/projects/doctap-desktop.jpg",
    mobile: "/projects/doctap-mobile.jpg",
    challenges: [
      "Numériser des documents depuis un mobile sans application native ni infrastructure serveur lourde",
      "Traiter des documents sensibles sans jamais compromettre leur confidentialité",
      "Fiabiliser une sortie IA faillible par nature (OCR) avant toute génération finale",
    ],
    solutions: [
      "Deux pipelines PDF séparés selon la sensibilité de la donnée. Mode Photos (100% local) : capture, recadrage puis assemblage A4 paysage, 2 photos par page, PDF généré dans le navigateur, aucune donnée envoyée à un serveur",
      "Mode IA (OCR) : transcription du document et reconstruction d'un PDF texte natif, sélectionnable et recherchable, côté serveur",
      "Human-in-the-loop sur la sortie IA : vérification humaine page par page avant génération, la transcription n'est jamais figée sans relecture possible",
      "Robustesse : une page en erreur est signalée et ignorée plutôt que de bloquer le lot, annulation réelle des requêtes en vol, gestion des quotas",
      "Privacy by design : local-first, refus délibéré d'un stockage de données nominatives, rétention locale configurable avec effacement automatique",
      "Intégration LLM : API Mistral (modèle vision) pour l'OCR, cohérent avec le positionnement français et la conformité européenne",
    ],
  },
  {
    id: "rekap",
    client: "Side project",
    title: "Rekap : Agent IA de préparation de visite commerciale",
    tagline:
      "Outil qui prépare automatiquement les visites de commerciaux terrain en secteur pharmaceutique : une fiche de visite PDF générée en moins d'une minute, sans saisie manuelle. Projet cadré de bout en bout en pilotant l'IA.",
    context:
      "Un outil qui prépare automatiquement les visites de commerciaux terrain en secteur pharmaceutique. L'outil se connecte au CRM, analyse les données et génère une fiche de visite PDF en moins d'une minute, sans saisie manuelle : identité client, contrat, chiffre d'affaires, historique, calcul de marge, alertes et synthèse générées par IA.",
    stack: ["Next.js", "TypeScript", "Tailwind", "@react-pdf/renderer", "API Mistral", "CRM API"],
    status: "Cadrage produit complet",
    after: "/projects/rekap-desktop.jpg",
    mobile: "/projects/rekap-mobile.jpg",
    challenges: [
      "Avant chaque visite, un commercial passe une vingtaine de minutes à collecter des données dispersées dans plusieurs onglets et outils",
      "Les calculs de marge sont faits à la main, chronophages et source d'erreurs",
      "Les données utiles vivent dans un CRM complexe, difficiles à agréger rapidement",
    ],
    solutions: [
      "Connexion directe au CRM, analyse des données et génération d'une fiche de visite PDF en moins d'une minute, sans saisie manuelle",
      "Fiche complète : identité client, contrat, chiffre d'affaires, historique d'activité, calcul de marge automatisé, alertes et synthèse générées par IA",
      "Cadrage produit de bout en bout : audit du besoin, spécification métier fine, wireframe, modèle économique. Un exemple de product thinking, pas seulement de développement",
      "Architecture prévue : génération PDF côté serveur (@react-pdf/renderer), API Mistral pour la synthèse et les alertes, connexion CRM via API, hébergement souverain (France, conforme RGPD)",
    ],
  },
  {
    id: "relancia",
    client: "Side project",
    title: "RelancIA : Agent IA de relance de factures personnalisée",
    tagline:
      "Agent qui aide les commerciaux à relancer leurs factures impayées dans leur propre voix, sans casser la relation client. Conçu et développé en pilotant Claude Code.",
    context:
      "Un agent qui aide les commerciaux à relancer leurs factures impayées sans casser la relation client. Il analyse le style d'écriture propre à chaque commercial à partir de ses mails passés, puis génère des relances dans sa voix : le destinataire a l'impression que c'est le commercial qui a écrit.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "API Mistral", "Vercel"],
    status: "Prototype fonctionnel, testé avec un premier utilisateur réel",
    after: "/projects/relancia-desktop.jpg",
    mobile: "/projects/relancia-mobile.jpg",
    challenges: [
      "Relancer une facture impayée sans dégrader la relation commerciale",
      "Une relance générique sonne faux : elle ne ressemble pas à ce que le commercial écrirait lui-même",
      "Garder la main sur le message final, éditable, avant tout envoi",
    ],
    solutions: [
      "Analyse du corpus de mails passés pour apprendre le ton propre à chaque commercial, puis génération dans sa voix : le destinataire a l'impression que c'est le commercial qui a écrit",
      "Configuration du style via une bibliothèque d'exemples, saisie des infos de facture, calcul automatique du retard, suggestion du niveau de relance (amical, direct, ferme)",
      "Objet et corps éditables et régénérables, ouverture directe dans la messagerie",
      "Intégration LLM : API Mistral (mistral-small-latest), clé API strictement côté serveur, choix RGPD (infrastructure européenne)",
      "Coût maîtrisé et mesuré, logging structuré de la consommation",
    ],
  },
  {
    id: "assistant-tri-offres",
    client: "Side project",
    title: "Assistant de tri d'offres : Scoring IA et fiabilisation du jugement d'un LLM",
    tagline:
      "Outil de scoring automatique qui qualifie des offres selon des critères définis. La fiabilité du jugement ne vient pas du modèle mais des règles fermes et éliminatoires qu'on lui impose.",
    context:
      "Un outil de scoring automatique qui qualifie des offres selon des critères définis. L'enjeu technique central : un LLM nuance par défaut et évite de trancher. La fiabilité du jugement ne vient pas du modèle mais des règles fermes et éliminatoires qu'on lui impose.",
    stack: ["n8n", "API Claude", "Airtable"],
    status: "Outil de R&D",
    after: "/projects/assistant-tri-offres-desktop.jpg",
    mobile: "/projects/assistant-tri-offres-mobile.jpg",
    challenges: [
      "Un LLM nuance par défaut et évite de trancher : difficile d'en tirer un jugement fiable et reproductible",
      "Faire correspondre exactement le tri automatique au jugement attendu, sans dérive",
      "Qualifier des offres selon des critères définis, de façon constante",
    ],
    solutions: [
      "Fiabilité par les règles, pas par le modèle : critères fermes et conditions éliminatoires imposés au LLM plutôt que confiance en aveugle",
      "Itération du prompt jusqu'à ce que le tri corresponde exactement au jugement attendu, transformant un LLM hésitant en outil qui tranche",
      "Pipeline d'orchestration : n8n déclenche le scoring, l'API Claude évalue, les résultats sont consignés et exploitables dans Airtable",
      "Angle fiabilité appliqué au scoring et à la qualification automatique",
    ],
  },
];

export default sideProjects;
