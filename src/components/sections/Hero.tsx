"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            {t.hero.role}
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {t.hero.title}

            <span className="block text-zinc-500">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200"
            >
              {t.hero.projects}
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.05]"
            >
              {t.hero.about}
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-600">
            <span>iOS & macOS</span>
            <span>Android</span>
            <span>Web</span>
            <span>Flutter</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}
