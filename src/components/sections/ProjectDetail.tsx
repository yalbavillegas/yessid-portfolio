"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProjectDetail({
  project,
}: {
  project: Project;
}) {
  const { language } = useLanguage();

  const content = project.details[language];

  const isDesktop =
    project.slug === "asist-finance" ||
    project.slug === "vitalscan";

  const labels =
    language === "es"
      ? {
          back: "Volver a proyectos",
          project: "Proyecto",
          features: "Funcionalidades",
          gallery: "Interfaz",
          platform: "Plataforma",
          technologies: "Tecnologías",
          status: "Estado",
          development: "Desarrollo",
          completed: "Completado",
          inDevelopment: "En desarrollo",
          active: "Activo",
        }
      : {
          back: "Back to projects",
          project: "Project",
          features: "Features",
          gallery: "Interface",
          platform: "Platform",
          technologies: "Technologies",
          status: "Status",
          development: "Development",
          completed: "Completed",
          inDevelopment: "In development",
          active: "Active",
        };

  const statusLabel = {
    completed: labels.completed,
    development: labels.inDevelopment,
    active: labels.active,
  }[project.status];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#proyectos"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← {labels.back}
          </Link>

          <div className="mt-8 grid gap-10 sm:mt-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
                {project.category}
              </p>

              <h1 className="mt-4 text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:mt-5 sm:text-7xl">
                {project.name}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
                {project.description[language]}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                <span className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm">
                  {project.platform}
                </span>

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 sm:mt-10">
                <span className="h-px w-8 bg-white/15" />

                <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-600 sm:text-xs sm:tracking-[0.16em]">
                  A YALBA LABS PRODUCT
                </p>
              </div>
            </div>

            {project.images && (
              <>
                {isDesktop ? (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:rounded-3xl">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"
                    />

                    {project.images.secondary && (
                      <div className="absolute right-[3%] top-[10%] h-[62%] w-[68%] overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl sm:rounded-xl">
                        <Image
                          src={project.images.secondary}
                          alt={`${project.name} secondary interface`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 75vw, 38vw"
                        />
                      </div>
                    )}

                    <div className="absolute bottom-[7%] left-[4%] z-10 h-[65%] w-[74%] overflow-hidden rounded-lg border border-white/15 bg-zinc-950 shadow-2xl sm:rounded-xl">
                      <Image
                        src={project.images.primary}
                        alt={`${project.name} main interface`}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 1024px) 80vw, 42vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:rounded-3xl">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"
                    />

                    {project.images.secondary && (
                      <div className="absolute right-[15%] top-[8%] h-[88%] w-[33%] rotate-[5deg] overflow-hidden rounded-[1.6rem] border border-white/10 shadow-2xl sm:right-[14%] sm:h-[90%] sm:w-[34%] sm:rotate-6 sm:rounded-[2.2rem]">
                        <Image
                          src={project.images.secondary}
                          alt={`${project.name} secondary interface`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 38vw, 20vw"
                        />
                      </div>
                    )}

                    <div className="absolute bottom-[-5%] left-[16%] z-10 h-[94%] w-[36%] -rotate-[2deg] overflow-hidden rounded-[1.6rem] border border-white/10 shadow-2xl sm:bottom-[-8%] sm:left-[15%] sm:h-[98%] sm:w-[37%] sm:-rotate-3 sm:rounded-[2.2rem]">
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

      {/* ABOUT PROJECT */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
              {labels.project}
            </p>

            <h2 className="mt-4 max-w-md text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:mt-5 sm:text-4xl">
              {content.headline}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-400 sm:space-y-6 sm:text-lg sm:leading-8">
            {content.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
            {labels.features}
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-10 md:grid-cols-2">
            {content.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-4 bg-zinc-950 p-5 sm:gap-5 sm:p-6"
              >
                <span className="text-[11px] font-medium text-zinc-700 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm text-zinc-300 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.images && (
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
              {labels.gallery}
            </p>

            {isDesktop ? (
              <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:rounded-3xl">
                  <Image
                    src={project.images.primary}
                    alt={`${project.name} main interface`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {project.images.secondary && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:rounded-3xl">
                    <Image
                      src={project.images.secondary}
                      alt={`${project.name} secondary interface`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center justify-center gap-7 sm:mt-10 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative aspect-[9/19.5] w-full max-w-[290px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl sm:max-w-[330px] sm:rounded-[2.5rem]">
                  <Image
                    src={project.images.primary}
                    alt={`${project.name} main interface`}
                    fill
                    className="object-cover"
                    sizes="330px"
                  />
                </div>

                {project.images.secondary && (
                  <div className="relative aspect-[9/19.5] w-full max-w-[290px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl sm:mt-16 sm:max-w-[330px] sm:rounded-[2.5rem]">
                    <Image
                      src={project.images.secondary}
                      alt={`${project.name} secondary interface`}
                      fill
                      className="object-cover"
                      sizes="330px"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* PROJECT INFO */}
      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            <div>
              <p className="text-sm text-zinc-600">
                {labels.platform}
              </p>

              <p className="mt-2 text-base sm:text-lg">
                {project.platform}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-600">
                {labels.technologies}
              </p>

              <p className="mt-2 text-base sm:text-lg">
                {project.technologies.join(" · ")}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-600">
                {labels.status}
              </p>

              <p className="mt-2 text-base sm:text-lg">
                {statusLabel}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-600">
                {labels.development}
              </p>

              <p className="mt-2 text-base sm:text-lg">
                Yessid Alba
              </p>

              <p className="mt-1 text-xs tracking-[0.12em] text-zinc-600 sm:text-sm">
                YALBA LABS
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
