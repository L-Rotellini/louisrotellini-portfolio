import type { MetadataRoute } from "next";
import projects from "@/data/projects";


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://louisrotellini.fr";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      // évite new Date() qui change à chaque build
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projets/${p.id}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
