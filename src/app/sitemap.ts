import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/config/site";
import { getPublicProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const projectRoutes: MetadataRoute.Sitemap = getPublicProjects().map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured ? 0.9 : 0.8,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
