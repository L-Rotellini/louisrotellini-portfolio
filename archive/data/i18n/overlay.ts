// Champs traduisibles d'un projet. Le contenu FR reste la source dans
// projects.ts / sideProjects.ts ; ces overlays fournissent la version EN.
export type ProjectOverlay = {
  title?: string;
  tagline?: string;
  context?: string;
  status?: string;
  challenges?: string[];
  solutions?: string[];
  // Titres des snippets, dans le même ordre que codeSnippets. Le code reste inchangé.
  codeSnippetTitles?: string[];
};
