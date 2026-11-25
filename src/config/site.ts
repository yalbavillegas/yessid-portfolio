import type { Project } from "@/types/project";

export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yessidalbalabs.tech",
  vercelUrl: "https://yessid-portfolio.vercel.app",
  name: "Yessid Alba | Yessid Alba Labs",
  shortName: "Yessid Alba Labs",
  alternateName: "YALBA LABS",
  author: "Yessid Alba",
  email: "Yessidalba@me.com",
  githubUrl: "https://github.com/yalbavillegas",
  githubHandle: "@yalbavillegas",
  location: "Bolivia",
  googleVerification: "XRYsome19UXOY3VuZIfWxTd3KZAW2SAOw8rOzsi-p10",
  title: {
    es: "Yessid Alba | Software Engineer & Technology Innovator · Yessid Alba Labs",
    en: "Yessid Alba | Software Engineer & Technology Innovator · Yessid Alba Labs",
  },
  description: {
    es: "Portfolio oficial de Yessid Alba, Software Engineer & Systems Analyst. Arquitectura de software, ingeniería de productos multiplataforma (Rust, Python, Swift, Kotlin, TypeScript, Flutter, SQLite) e investigación en ingeniería inversa bajo Yessid Alba Labs.",
    en: "Official portfolio of Yessid Alba, Software Engineer & Systems Analyst. Software architecture, cross-platform product engineering (Rust, Python, Swift, Kotlin, TypeScript, Flutter, SQLite), and reverse-engineering research at Yessid Alba Labs.",
  },
} as const;

export function getHomeJsonLd() {
  const personId = `${SITE_CONFIG.url}/#person`;
  const orgId = `${SITE_CONFIG.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_CONFIG.author,
        url: SITE_CONFIG.url,
        email: `mailto:${SITE_CONFIG.email}`,
        jobTitle: "Software Engineer & Systems Analyst",
        description: SITE_CONFIG.description.en,
        address: {
          "@type": "PostalAddress",
          addressCountry: "BO",
        },
        founder: {
          "@id": orgId,
        },
        worksFor: {
          "@id": orgId,
        },
        sameAs: [
          SITE_CONFIG.githubUrl,
          SITE_CONFIG.url,
          SITE_CONFIG.vercelUrl,
        ],
        knowsAbout: [
          "Software Engineering",
          "Software Architecture",
          "Systems Analysis",
          "Rust Programming",
          "Python Development",
          "PyQt6 & PySide6",
          "Swift & SwiftUI",
          "Kotlin & Android Development",
          "TypeScript & Next.js",
          "Flutter & Dart",
          "SQLite & Database Engineering",
          "Reverse Engineering & Binary Analysis",
          "Cross-platform Application Development",
          "Cryptographic Licensing (Ed25519)",
        ],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_CONFIG.shortName,
        alternateName: SITE_CONFIG.alternateName,
        url: SITE_CONFIG.url,
        email: SITE_CONFIG.email,
        founder: {
          "@id": personId,
        },
        sameAs: [
          SITE_CONFIG.url,
          SITE_CONFIG.vercelUrl,
          SITE_CONFIG.githubUrl,
        ],
        description:
          "Independent software engineering studio and technology research lab founded by Yessid Alba, building native desktop systems, mobile applications, database tools, and binary analysis workbenches.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        publisher: {
          "@id": orgId,
        },
        inLanguage: ["es-BO", "en-US"],
      },
    ],
  };
}

export function getProjectJsonLd(project: Project) {
  const projectUrl = `${SITE_CONFIG.url}/projects/${project.slug}`;
  const imageUrl = project.images?.primary
    ? `${SITE_CONFIG.url}${project.images.primary}`
    : `${SITE_CONFIG.url}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${projectUrl}#software`,
    name: project.name,
    url: projectUrl,
    image: imageUrl,
    description: project.description.en,
    applicationCategory: project.category,
    operatingSystem: project.platform,
    ...(project.version ? { softwareVersion: project.version } : {}),
    ...(project.releaseDate ? { datePublished: project.releaseDate } : {}),
    ...(project.repositoryUrl ? { codeRepository: project.repositoryUrl } : {}),
    inLanguage: ["es", "en"],
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.shortName,
      url: SITE_CONFIG.url,
    },
    featureList: project.details.en.features,
  };
}
