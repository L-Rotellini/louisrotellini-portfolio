import type { MetadataRoute } from "next";
import projects from "@/data/projects";
import sideProjects from "@/data/sideProjects";

const baseUrl = "https://www.louisrotellini.fr";
// évite new Date() qui change à chaque build
const lastModified = new Date("2025-01-01");

// hreflang alternates : le FR vit à la racine, l'EN sous /en.
function alternates(frPath: string) {
  const enPath = frPath === "/" ? "/en" : `/en${frPath}`;
  return {
    languages: {
      "fr-FR": `${baseUrl}${frPath}`,
      "en-US": `${baseUrl}${enPath}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternates("/"),
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("/"),
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: alternates("/mentions-legales"),
    },
    {
      url: `${baseUrl}/en/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: alternates("/mentions-legales"),
    },
  ];

  const allProjects = [...projects, ...sideProjects];
  for (const p of allProjects) {
    entries.push({
      url: `${baseUrl}/projets/${p.id}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: alternates(`/projets/${p.id}`),
    });
    entries.push({
      url: `${baseUrl}/en/projets/${p.id}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: alternates(`/projets/${p.id}`),
    });
  }

  return entries;
}
