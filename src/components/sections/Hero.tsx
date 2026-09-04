"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-12 pt-32 text-white sm:px-6 sm:pb-16 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[110px] sm:h-[500px] sm:w-[700px] sm:blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-6 sm:text-sm sm:tracking-[0.32em]">
            {t.hero.role}
          </p>

          <h1 className="text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {t.hero.title}

            <span className="mt-1 block text-zinc-500 sm:mt-0">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-xl sm:leading-8">
            {t.hero.description}
          </p>

          <div className="mt-7 flex items-start gap-3 sm:mt-8 sm:items-center">
            <span
              aria-hidden="true"
              className="mt-2.5 h-px w-8 shrink-0 bg-white/20 sm:mt-0"
            />

            <p className="max-w-[290px] text-sm leading-6 text-zinc-500 sm:max-w-none">
              {t.hero.companyRole}{" "}
              <span className="font-semibold tracking-[0.12em] text-zinc-300 sm:tracking-[0.14em]">
                {t.hero.company}
              </span>
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#proyectos"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200"
            >
              {t.hero.projects}
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href="#sobre-mi"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.05]"
            >
              {t.hero.about}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-600 sm:mt-16 sm:gap-x-8">
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
