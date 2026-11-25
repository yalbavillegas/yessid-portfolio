"use client";

import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import StatusBadge from "@/components/ui/StatusBadge";
import TechBadge from "@/components/ui/TechBadge";
import { getPublicProjectBySlug } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const RESEARCH_SLUGS = [
  "mrel-reconstruction-initiative",
  "astro-warrior",
  "mrel",
  "audiosphere-pro",
] as const;

export default function Research() {
  const { language, t } = useLanguage();

  const researchItems = RESEARCH_SLUGS.map((slug) =>
    getPublicProjectBySlug(slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="investigacion"
      className="border-t border-border-subtle bg-canvas px-6 py-24 text-fg-primary sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.research.eyebrow}
          title={t.research.title}
          description={t.research.description}
        />

        {/* 1. MATURITY & RESEARCH TAXONOMY BANNER */}
        <div className="mt-12 rounded-3xl border border-border-subtle bg-surface p-6 sm:mt-16 sm:p-9">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t.research.distinctionTitle}
            </p>
            <p className="mt-2 text-sm leading-7 text-fg-secondary sm:text-base">
              {t.research.distinctionSubtitle}
            </p>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {t.research.tiers.map((tier, idx) => {
              const dotClass =
                idx === 0
                  ? "bg-sky-400"
                  : idx === 1
                    ? "bg-gold"
                    : "bg-emerald-400";

              return (
                <div
                  key={tier.title}
                  className="rounded-2xl border border-border-subtle bg-card p-5 sm:p-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-pill px-3 py-1 font-mono text-[11px] font-medium text-fg-secondary">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${dotClass}`}
                    />
                    <span>{tier.badge}</span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-fg-primary sm:text-lg">
                    {tier.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-fg-muted sm:text-sm">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. VERIFIED RESEARCH & EXPERIMENTAL INITIATIVES */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
          {researchItems.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card transition duration-300 hover:border-border-gold/65"
            >
              {project.images && (
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle bg-stage">
                  <Image
                    src={project.images.primary}
                    alt={project.name}
                    fill
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.015]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full border border-white/14 bg-[#060a14]/80 px-3 py-1 font-mono text-[11px] font-medium text-slate-200 backdrop-blur-md">
                      {project.platform}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 z-10">
                    <StatusBadge
                      status={project.status}
                      maturity={project.maturity}
                      presentation={project.presentation}
                      surface="darkStage"
                      showPresentation
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {t.projects.categories[project.categoryId] ??
                      project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg-primary transition-colors group-hover:text-gold">
                    <Link href={`/projects/${project.slug}`}>
                      {project.name}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-fg-secondary">
                    {project.description[language]}
                  </p>

                  {project.details[language].problemAndPurpose && (
                    <div className="mt-4 rounded-2xl border border-border-subtle bg-surface p-4">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-subtle">
                        {t.research.highlightsLabel}
                      </p>
                      <p className="mt-1.5 line-clamp-3 text-xs leading-6 text-fg-muted">
                        {project.details[language].problemAndPurpose}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border-subtle pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-sm font-medium text-fg-primary transition group-hover:text-gold"
                    >
                      <span>{t.research.exploreResearch}</span>
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
