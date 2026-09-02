"use client";

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
      className="border-t border-white/10 bg-black px-6 py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            {t.projects.eyebrow}
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t.projects.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
            {t.projects.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-semibold tracking-[-0.08em] text-white/[0.06] sm:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                    {project.platform}
                  </span>
                </div>

                <div className="absolute right-6 top-6">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
                    {t.projects.status[project.status]}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-sm text-zinc-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description[language]}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                  >
                    {t.projects.viewProject}
                    <span
                      className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
