"use client";

import Image from "next/image";
import Link from "next/link";

import StatusBadge from "@/components/ui/StatusBadge";
import TechBadge from "@/components/ui/TechBadge";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Project } from "@/types/project";

export default function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const { language, t } = useLanguage();

  const isMobileProject =
    project.viewportType === "mobile" ||
    (!project.viewportType &&
      (project.platform.toLowerCase().includes("ios") ||
        project.platform.toLowerCase().includes("android")));

  const categoryLabel =
    t.projects.categories[project.categoryId] ?? project.category;

  const maxTechTags = compact ? 4 : 6;
  const visibleTech = project.technologies.slice(0, maxTechTags);
  const extraTechCount = Math.max(0, project.technologies.length - maxTechTags);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card transition-[border-color] duration-200 hover:border-border-gold/65">
      {/* STUDIO VISUAL STAGE */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle bg-stage">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(212,175,55,0.11),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.07),transparent_60%)]"
        />

        {project.images ? (
          !isMobileProject ? (
            project.images.secondary ? (
              <>
                <div className="absolute right-[4%] top-[12%] h-[62%] w-[64%] overflow-hidden rounded-lg border border-white/10 bg-[#050811]/75 shadow-2xl transition duration-500 sm:rounded-xl sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1">
                  <Image
                    src={project.images.secondary}
                    alt={`${project.name} secondary interface`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 65vw, 32vw"
                  />
                </div>

                <div className="absolute bottom-[7%] left-[5%] z-10 h-[64%] w-[72%] overflow-hidden rounded-lg border border-white/15 bg-[#050811] shadow-2xl transition duration-500 sm:rounded-xl sm:group-hover:-translate-y-1 sm:group-hover:scale-[1.015]">
                  <Image
                    src={project.images.primary}
                    alt={`${project.name} main interface`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 75vw, 38vw"
                    priority={index < 2}
                  />
                </div>
              </>
            ) : (
              <div className="absolute inset-x-[6%] bottom-[8%] top-[16%] z-10 overflow-hidden rounded-lg border border-white/15 bg-[#050811] shadow-2xl transition duration-500 sm:rounded-xl sm:group-hover:-translate-y-1 sm:group-hover:scale-[1.015]">
                <Image
                  src={project.images.primary}
                  alt={`${project.name} main interface`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 85vw, 42vw"
                  priority={index < 2}
                />
              </div>
            )
          ) : (
            <>
              {project.images.secondary && (
                <div className="absolute right-[10%] top-[10%] h-[90%] w-[33%] rotate-[5deg] overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#050811] shadow-2xl transition duration-500 sm:right-[8%] sm:top-[12%] sm:h-[92%] sm:w-[34%] sm:rotate-6 sm:rounded-[2rem] sm:group-hover:rotate-3 sm:group-hover:scale-[1.03]">
                  <Image
                    src={project.images.secondary}
                    alt={`${project.name} secondary interface`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                </div>
              )}

              <div className="absolute bottom-[-12%] left-[13%] z-10 h-[100%] w-[38%] -rotate-[2deg] overflow-hidden rounded-[1.5rem] border border-white/14 bg-[#050811] shadow-2xl transition duration-500 sm:bottom-[-18%] sm:left-[12%] sm:h-[105%] sm:w-[39%] sm:-rotate-3 sm:rounded-[2rem] sm:group-hover:-rotate-1 sm:group-hover:scale-[1.03]">
                <Image
                  src={project.images.primary}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 22vw"
                  priority={index < 2}
                />
              </div>
            </>
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-6xl font-semibold tracking-[-0.08em] text-white/[0.07] sm:text-8xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}

        {/* TOP STAGE BADGES */}
        <div className="absolute inset-x-4 top-4 z-20 flex items-start justify-between gap-2 sm:inset-x-5 sm:top-5">
          <div className="min-w-0">
            <span className="inline-flex max-w-full items-center rounded-full border border-white/14 bg-[#060a14]/80 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-slate-200 backdrop-blur-md">
              <span className="truncate">{project.platform}</span>
            </span>
          </div>

          <div className="shrink-0">
            <StatusBadge
              status={project.status}
              maturity={project.maturity}
              presentation={project.presentation}
              surface="darkStage"
              showPresentation
            />
          </div>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              />
              <p className="truncate font-mono text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
                {categoryLabel}
              </p>
            </div>
            {project.version && (
              <span className="shrink-0 rounded-full border border-border-gold/60 bg-gold-muted px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-gold">
                v{project.version}
              </span>
            )}
          </div>

          <h3 className="mt-2.5 text-2xl font-semibold tracking-tight text-fg-primary transition-colors group-hover:text-gold sm:text-[1.7rem]">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-md"
            >
              {project.name}
            </Link>
          </h3>

          <p className="mt-3.5 text-sm leading-7 text-fg-muted sm:text-base">
            {project.description[language]}
          </p>
        </div>

        <div className="mt-6 pt-2">
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((technology) => (
              <TechBadge key={technology} label={technology} />
            ))}
            {extraTechCount > 0 && (
              <span className="inline-flex items-center rounded-full border border-border-subtle bg-pill px-3 py-1.5 font-mono text-[11px] text-fg-subtle">
                +{extraTechCount}
              </span>
            )}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-border-subtle pt-5">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-fg-primary transition group-hover:text-gold"
            >
              <span>{t.projects.viewProject}</span>
              <span
                className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-fg-subtle transition hover:text-gold"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
