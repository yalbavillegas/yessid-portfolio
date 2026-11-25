"use client";

import TechBadge from "@/components/ui/TechBadge";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      value: t.about.stats.engineering,
      label: t.about.stats.engineeringLabel,
    },
    {
      value: t.about.stats.programming,
      label: t.about.stats.programmingLabel,
    },
    {
      value: t.about.stats.analysis,
      label: t.about.stats.analysisLabel,
    },
    {
      value: t.about.stats.products,
      label: t.about.stats.productsLabel,
    },
  ];

  const specialties = [
    t.about.specialties.multiplatform,
    t.about.specialties.architecture,
    t.about.specialties.systemsAnalysis,
    t.about.specialties.databaseEngineering,
    t.about.specialties.reverseEngineering,
    t.about.specialties.electronics,
    t.about.specialties.products,
  ];

  return (
    <section
      id="sobre-mi"
      className="border-t border-border-subtle bg-surface px-6 py-24 text-fg-primary sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* TOP PROFILE BIO */}
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 sm:mb-5">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-[13px] sm:tracking-[0.28em]">
                {t.about.eyebrow}
              </p>
            </div>

            <h2 className="max-w-xl text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-fg-primary sm:text-5xl lg:text-[3.35rem]">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base font-medium leading-7 text-fg-primary sm:text-xl sm:leading-8">
              {t.about.lead}
            </p>

            <p className="text-sm leading-7 text-fg-secondary sm:text-base sm:leading-8">
              {t.about.description}
            </p>

            <p className="text-sm leading-7 text-fg-muted sm:text-base sm:leading-8">
              {t.about.secondary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 sm:gap-2.5">
              {specialties.map((specialty) => (
                <TechBadge key={specialty} label={specialty} />
              ))}
            </div>
          </div>
        </div>

        {/* VERIFIED METRICS BAR */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-card p-6 transition-colors duration-200 hover:bg-elevated sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/75"
              />
              <p className="text-3xl font-semibold tracking-tight text-fg-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-fg-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ENGINEERING PHILOSOPHY & TECHNICAL VISION */}
        <div className="mt-16 sm:mt-24">
          <div className="mb-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-fg-secondary sm:text-sm">
              {t.about.philosophyHeading}
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.about.philosophy.map((pillar) => (
              <div
                key={pillar.code}
                className="group rounded-2xl border border-border-subtle bg-card p-6 transition duration-200 hover:border-border-gold/55 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-gold bg-gold-muted font-mono text-xs font-semibold text-gold">
                    {pillar.code}
                  </span>
                  <h4 className="text-lg font-semibold tracking-tight text-fg-primary transition-colors group-hover:text-gold">
                    {pillar.title}
                  </h4>
                </div>

                <p className="mt-4 text-sm leading-7 text-fg-muted sm:text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
