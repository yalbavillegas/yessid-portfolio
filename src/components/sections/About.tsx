"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="border-t border-white/10 bg-zinc-950 px-6 py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              {t.about.eyebrow}
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
              {t.about.description}
            </p>

            <p className="max-w-2xl leading-7 text-zinc-500">
              {t.about.secondary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                {t.about.specialties.multiplatform}
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                {t.about.specialties.electronics}
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                {t.about.specialties.products}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          <div className="bg-zinc-950 p-8">
            <p className="text-4xl font-semibold tracking-tight">
              {t.about.stats.engineering}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {t.about.stats.engineeringLabel}
            </p>
          </div>

          <div className="bg-zinc-950 p-8">
            <p className="text-4xl font-semibold tracking-tight">
              {t.about.stats.programming}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {t.about.stats.programmingLabel}
            </p>
          </div>

          <div className="bg-zinc-950 p-8">
            <p className="text-4xl font-semibold tracking-tight">
              {t.about.stats.analysis}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {t.about.stats.analysisLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
