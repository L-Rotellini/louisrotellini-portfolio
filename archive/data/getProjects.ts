import projects, { type Project } from "./projects";
import sideProjects from "./sideProjects";
import { projectsEn } from "./i18n/projects.en";
import { sideProjectsEn } from "./i18n/sideProjects.en";
import type { ProjectOverlay } from "./i18n/overlay";
import type { Locale } from "@/i18n/config";

function applyOverlay(p: Project, o?: ProjectOverlay): Project {
  if (!o) return p;
  return {
    ...p,
    title: o.title ?? p.title,
    tagline: o.tagline ?? p.tagline,
    context: o.context ?? p.context,
    status: o.status ?? p.status,
    challenges: o.challenges ?? p.challenges,
    solutions: o.solutions ?? p.solutions,
    codeSnippets: p.codeSnippets?.map((s, i) => ({
      ...s,
      title: o.codeSnippetTitles?.[i] ?? s.title,
    })),
  };
}

export function getProjects(locale: Locale): Project[] {
  if (locale === "fr") return projects;
  return projects.map((p) => applyOverlay(p, projectsEn[p.id]));
}

export function getSideProjects(locale: Locale): Project[] {
  if (locale === "fr") return sideProjects;
  return sideProjects.map((p) => applyOverlay(p, sideProjectsEn[p.id]));
}

export function getAllProjects(locale: Locale): Project[] {
  return [...getProjects(locale), ...getSideProjects(locale)];
}

export function getProject(locale: Locale, id: string): Project | undefined {
  return getAllProjects(locale).find((p) => p.id === id);
}
