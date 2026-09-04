"use client";

import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="proyectos"
      className="border-t border-white/10 bg-black px-6 py-24 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
            {t.projects.eyebrow}
          </p>

          <h2 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t.projects.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            {t.projects.description}
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const isDesktopProject =
              project.slug === "asist-finance" ||
              project.slug === "vitalscan";

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
              >
                {/* VISUAL AREA */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                  />

                  {project.images ? (
                    isDesktopProject ? (
                      <>
                        {/* Desktop secondary */}
                        {project.images.secondary && (
                          <div className="absolute right-[4%] top-[12%] h-[62%] w-[64%] overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-2xl transition duration-500 sm:rounded-xl sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1">
                            <Image
                              src={project.images.secondary}
                              alt={`${project.name} secondary interface`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 65vw, 32vw"
                            />
                          </div>
                        )}

                        {/* Desktop primary */}
                        <div className="absolute bottom-[8%] left-[6%] z-10 h-[62%] w-[70%] overflow-hidden rounded-lg border border-white/15 bg-zinc-950 shadow-2xl transition duration-500 sm:rounded-xl sm:group-hover:-translate-y-1 sm:group-hover:scale-[1.01]">
                          <Image
                            src={project.images.primary}
                            alt={`${project.name} main interface`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 75vw, 38vw"
                            priority={index === 0}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Mobile secondary */}
                        {project.images.secondary && (
                          <div className="absolute right-[10%] top-[10%] h-[90%] w-[33%] rotate-[5deg] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl transition duration-500 sm:right-[8%] sm:top-[12%] sm:h-[92%] sm:w-[34%] sm:rotate-6 sm:rounded-[2rem] sm:group-hover:rotate-3 sm:group-hover:scale-[1.03]">
                            <Image
                              src={project.images.secondary}
                              alt={`${project.name} secondary interface`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 40vw, 20vw"
                            />
                          </div>
                        )}

                        {/* Mobile primary */}
                        <div className="absolute bottom-[-12%] left-[13%] z-10 h-[100%] w-[38%] -rotate-[2deg] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl transition duration-500 sm:bottom-[-18%] sm:left-[12%] sm:h-[105%] sm:w-[39%] sm:-rotate-3 sm:rounded-[2rem] sm:group-hover:-rotate-1 sm:group-hover:scale-[1.03]">
                          <Image
                            src={project.images.primary}
                            alt={`${project.name} screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 45vw, 22vw"
                            priority={index === 0}
                          />
                        </div>
                      </>
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-semibold tracking-[-0.08em] text-white/[0.06] sm:text-8xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  {/* PLATFORM */}
                  <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
                    <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[11px] text-zinc-300 backdrop-blur-md sm:text-xs">
                      {project.platform}
                    </span>
                  </div>

                  {/* STATUS */}
                  <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] text-zinc-300 backdrop-blur-md sm:text-xs">
                      {t.projects.status[project.status]}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs text-zinc-600 sm:text-sm">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description[language]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[11px] text-zinc-400 sm:text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 sm:mt-8">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-sm font-medium text-white transition group-hover:text-zinc-300"
                    >
                      {t.projects.viewProject}

                      <span
                        className="ml-2 inline-block transition-transform duration-300 sm:group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
