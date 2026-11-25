import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetail from "@/components/sections/ProjectDetail";
import { getProjectJsonLd, SITE_CONFIG } from "@/config/site";
import {
  getPublicProjectBySlug,
  getPublicProjects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublicProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const ogImage = project.images?.primary ?? "/opengraph-image";
  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: `${project.name} (${project.platform})`,
    description: project.description.es,
    keywords: [
      project.name,
      project.category,
      project.platform,
      "Yessid Alba",
      "Yessid Alba Labs",
      ...project.technologies,
    ],
    alternates: {
      canonical: canonicalPath,
      languages: {
        "es-BO": canonicalPath,
        "en-US": canonicalPath,
      },
    },
    openGraph: {
      title: `${project.name} | ${SITE_CONFIG.shortName}`,
      description: project.description.es,
      url: `${SITE_CONFIG.url}${canonicalPath}`,
      siteName: SITE_CONFIG.name,
      locale: "es_BO",
      alternateLocale: ["en_US"],
      type: "article",
      images: [
        {
          url: ogImage,
          alt: `${project.name} — ${SITE_CONFIG.shortName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${SITE_CONFIG.shortName}`,
      description: project.description.en,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getPublicProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const softwareJsonLd = getProjectJsonLd(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd),
        }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
