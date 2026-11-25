"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import ProjectGallery from "@/components/ui/ProjectGallery";
import StatusBadge from "@/components/ui/StatusBadge";
import TechBadge from "@/components/ui/TechBadge";
import { getPublicProjects, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProjectDetail({
  project,
}: {
  project: Project;
}) {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = `${project.name} (${project.platform}) | Yessid Alba Labs`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", project.description[language]);
    }
  }, [language, project.name, project.platform, project.description]);

  const content = project.details[language];
  const labels = t.projectDetail;

  const isMobile =
    project.viewportType === "mobile" ||
    (!project.viewportType &&
      (project.platform.toLowerCase().includes("ios") ||
        project.platform.toLowerCase().includes("android")));

  const categoryLabel =
    t.projects.categories[project.categoryId] ?? project.category;

  const statusLabel = t.projects.status[project.status];
  const maturityLabel = t.projects.maturity[project.maturity];
  const presentationLabel = t.projects.presentation[project.presentation];

  const galleryItems =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.images
        ? [
            {
              src: project.images.primary,
              caption: {
                es: `${project.name} — Interfaz principal`,
                en: `${project.name} — Main interface`,
              },
            },
            ...(project.images.secondary
              ? [
                  {
                    src: project.images.secondary,
                    caption: {
                      es: `${project.name} — Vista secundaria`,
                      en: `${project.name} — Secondary view`,
                    },
                  },
                ]
              : []),
          ]
        : [];

  const relatedProjects = getPublicProjects()
    .filter((item) => item.slug !== project.slug)
    .sort((a, b) => {
      const aSameCat = a.categoryId === project.categoryId ? 1 : 0;
      const bSameCat = b.categoryId === project.categoryId ? 1 : 0;
      return bSameCat - aSameCat;
    })
    .slice(0, 3);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-canvas text-fg-primary"
    >
      {/* 1. HERO SECTION */}
      <section className="border-b border-border-subtle px-6 pb-16 pt-28 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition hover:text-gold"
          >
            <span aria-hidden="true">←</span>
            <span>{labels.back}</span>
          </Link>

          <div className="mt-8 grid gap-10 sm:mt-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex flex-wrap items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-gold" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-gold sm:text-sm">
                  {categoryLabel}
                </p>
                {project.version && (
                  <span className="rounded-full border border-border-gold bg-gold-muted px-2.5 py-0.5 font-mono text-[11px] font-medium text-gold">
                    v{project.version}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-fg-primary sm:mt-5 sm:text-6xl">
                {project.name}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-fg-secondary sm:mt-6 sm:text-lg sm:leading-8">
                {project.description[language]}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8">
                <TechBadge label={project.platform} variant="gold" />
                <StatusBadge
                  status={project.status}
                  maturity={project.maturity}
                  presentation={project.presentation}
                  showPresentation
                />

                {project.technologies.map((technology) => (
                  <TechBadge key={technology} label={technology} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold/60" />
                  <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-fg-subtle sm:text-xs">
                    {labels.studioBadge}
                  </p>
                </div>

                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-gold bg-gold-muted px-4 py-2 font-mono text-xs font-medium text-gold transition hover:bg-gold hover:text-[#050811]"
                  >
                    <span>{labels.viewRepository}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* VISUAL DEVICE STAGE */}
            {project.images && (
              <>
                {!isMobile ? (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border-subtle bg-stage sm:rounded-3xl">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(212,175,55,0.12),transparent_55%)]"
                    />

                    {project.images.secondary ? (
                      <>
                        <div className="absolute right-[3%] top-[10%] h-[62%] w-[68%] overflow-hidden rounded-lg border border-white/10 bg-[#050811] shadow-2xl sm:rounded-xl">
                          <Image
                            src={project.images.secondary}
                            alt={`${project.name} secondary interface`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 75vw, 38vw"
                          />
                        </div>

                        <div className="absolute bottom-[7%] left-[4%] z-10 h-[65%] w-[74%] overflow-hidden rounded-lg border border-white/15 bg-[#050811] shadow-2xl sm:rounded-xl">
                          <Image
                            src={project.images.primary}
                            alt={`${project.name} main interface`}
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 1024px) 80vw, 42vw"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-4 z-10 overflow-hidden rounded-lg border border-white/15 bg-[#050811] shadow-2xl sm:inset-6 sm:rounded-xl">
                        <Image
                          src={project.images.primary}
                          alt={`${project.name} main interface`}
                          fill
                          priority
                          className="object-contain"
                          sizes="(max-width: 1024px) 90vw, 48vw"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border-subtle bg-stage sm:rounded-3xl">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(212,175,55,0.12),transparent_55%)]"
                    />

                    {project.images.secondary && (
                      <div className="absolute right-[15%] top-[8%] h-[88%] w-[33%] rotate-[5deg] overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#050811] shadow-2xl sm:right-[14%] sm:h-[90%] sm:w-[34%] sm:rotate-6 sm:rounded-[2.2rem]">
                        <Image
                          src={project.images.secondary}
                          alt={`${project.name} secondary interface`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 38vw, 20vw"
                        />
                      </div>
                    )}

                    <div className="absolute bottom-[-5%] left-[16%] z-10 h-[94%] w-[36%] -rotate-[2deg] overflow-hidden rounded-[1.6rem] border border-white/14 bg-[#050811] shadow-2xl sm:bottom-[-8%] sm:left-[15%] sm:h-[98%] sm:w-[37%] sm:-rotate-3 sm:rounded-[2.2rem]">
                      <Image
                        src={project.images.primary}
                        alt={`${project.name} main interface`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 42vw, 22vw"
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PROBLEM / PURPOSE */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-gold" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
                  {labels.project}
                </p>
              </div>

              <h2 className="mt-4 max-w-md text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg-primary sm:mt-5 sm:text-4xl">
                {content.headline}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-5 text-base leading-7 text-fg-secondary sm:text-lg sm:leading-8">
                {content.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {content.problemAndPurpose && (
                <div className="mt-8 rounded-2xl border border-border-gold/50 bg-card p-6 sm:p-7">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {labels.problemAndPurpose}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-fg-secondary sm:text-base">
                    {content.problemAndPurpose}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES & FEATURES */}
      <section className="border-y border-border-subtle bg-surface px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-gold" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
              {labels.features}
            </p>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:mt-10 md:grid-cols-2">
            {content.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-start gap-4 bg-card p-5 transition-colors hover:bg-elevated sm:gap-5 sm:p-6"
              >
                <span className="mt-0.5 font-mono text-xs font-semibold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-medium leading-6 text-fg-primary sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ARCHITECTURE */}
      {content.architecture && content.architecture.length > 0 && (
        <section className="border-b border-border-subtle bg-canvas px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
                {labels.architecture}
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
              {content.architecture.map((pillar, idx) => (
                <div
                  key={pillar}
                  className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-card p-6 transition hover:border-border-gold/50 sm:p-7"
                >
                  <div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-gold bg-gold-muted font-mono text-xs font-semibold text-gold">
                      0{idx + 1}
                    </span>
                    <p className="mt-5 text-sm leading-7 text-fg-secondary sm:text-base">
                      {pillar}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. AUTHENTIC INTERFACE GALLERY */}
      {galleryItems.length > 0 && (
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
                {labels.gallery}
              </p>
            </div>

            <ProjectGallery
              projectName={project.name}
              items={galleryItems}
              isMobile={isMobile}
            />
          </div>
        </section>
      )}

      {/* 6. TECHNICAL SPECIFICATIONS SHEET */}
      <section className="border-t border-border-subtle bg-surface px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-gold" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
              {labels.specifications}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {labels.platform}
              </p>
              <p className="mt-2.5 text-base font-medium text-fg-primary sm:text-lg">
                {project.platform}
              </p>
              {project.version && (
                <p className="mt-1 font-mono text-xs text-fg-muted">
                  {labels.version}: v{project.version}
                </p>
              )}
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {labels.technologies}
              </p>
              <p className="mt-2.5 text-sm font-medium leading-6 text-fg-primary sm:text-base">
                {project.technologies.join(" · ")}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {labels.status}
              </p>
              <p className="mt-2.5 text-base font-medium text-fg-primary sm:text-lg">
                {maturityLabel} · {statusLabel}
              </p>
              <p className="mt-1 font-mono text-xs text-gold">
                {labels.presentation}: {presentationLabel}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                {labels.development}
              </p>
              <p className="mt-2.5 text-base font-medium text-fg-primary sm:text-lg">
                Yessid Alba
              </p>
              <p className="mt-1 font-mono text-xs tracking-[0.16em] text-gold">
                YESSID ALBA LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELATED CATALOG PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-border-subtle bg-canvas px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-gold" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm">
                  {labels.relatedProjects}
                </p>
              </div>

              <Link
                href="/#catalogo"
                className="font-mono text-xs text-fg-muted transition hover:text-gold"
              >
                {labels.back} →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-card p-6 transition hover:border-border-gold/60"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                      {t.projects.categories[rel.categoryId] ?? rel.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-fg-primary transition group-hover:text-gold">
                      {rel.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-fg-muted">
                      {rel.description[language]}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-3 font-mono text-[11px] text-fg-subtle">
                    <span>{rel.platform}</span>
                    <span className="text-gold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
