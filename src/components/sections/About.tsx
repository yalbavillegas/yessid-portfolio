"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="border-t border-white/10 bg-zinc-950 px-6 py-24 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
              {t.about.eyebrow}
            </p>

            <h2 className="max-w-xl text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
              {t.about.description}
            </p>

            <p className="max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              {t.about.secondary}
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3 sm:pt-2">
              <span className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm">
                {t.about.specialties.multiplatform}
              </span>

              <span className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm">
                {t.about.specialties.electronics}
              </span>

              <span className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm">
                {t.about.specialties.products}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-20 sm:grid-cols-3">
          <div className="bg-zinc-950 p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.stats.engineering}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {t.about.stats.engineeringLabel}
            </p>
          </div>

          <div className="bg-zinc-950 p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.stats.programming}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {t.about.stats.programmingLabel}
            </p>
          </div>

          <div className="bg-zinc-950 p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
