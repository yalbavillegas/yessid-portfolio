"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const ecosystemPlatforms = [
  "iOS & macOS",
  "Android",
  "Desktop Systems",
  "Rust",
  "Python",
  "Swift & SwiftUI",
  "Next.js & TypeScript",
  "Flutter",
  "SQLite",
] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-canvas px-6 pb-16 pt-32 text-fg-primary sm:px-6 sm:pb-24 sm:pt-36"
    >
      {/* Subtle architectural ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[440px] w-[560px] -translate-x-1/2 rounded-full blur-[130px] sm:h-[520px] sm:w-[760px]"
        style={{
          background:
            "radial-gradient(circle, var(--hero-glow) 0%, var(--navy-glow) 55%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          {/* Eyebrow Role */}
          <div className="mb-6 inline-flex items-center gap-3 sm:mb-7">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gold"
            />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-sm sm:tracking-[0.3em]">
              {t.hero.role}
            </p>
          </div>

          {/* Primary Headline */}
          <h1 className="text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.05em] text-fg-primary sm:text-7xl lg:text-[5.5rem]">
            {t.hero.title}
            <span className="mt-1.5 block text-fg-muted sm:mt-1">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Positioning Statement */}
          <p className="mt-6 max-w-2xl font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold/90 sm:mt-7 sm:text-sm">
            {t.hero.statement}
          </p>

          {/* Supporting Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-fg-secondary sm:mt-6 sm:text-xl sm:leading-8">
            {t.hero.description}
          </p>

          {/* Studio Attribution */}
          <div className="mt-7 flex items-start gap-3 sm:mt-8 sm:items-center">
            <span
              aria-hidden="true"
              className="mt-2.5 h-px w-8 shrink-0 bg-border-strong sm:mt-0"
            />

            <p className="max-w-[300px] text-sm leading-6 text-fg-muted sm:max-w-none">
              {t.hero.companyRole}{" "}
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-fg-primary sm:text-sm">
                {t.hero.company}
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3.5 sm:mt-11 sm:flex-row sm:gap-4">
            <a
              href="#proyectos"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-cta-bg px-7 py-3.5 text-sm font-medium text-cta-text hover:bg-cta-hover"
            >
              <span>{t.hero.projects}</span>
              <span className="ml-2.5 text-gold" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href="#sobre-mi"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-border-strong bg-pill px-7 py-3.5 text-sm font-medium text-fg-primary hover:border-border-gold hover:text-gold"
            >
              {t.hero.about}
            </a>
          </div>

          {/* Ecosystem Bar */}
          <div className="mt-14 border-t border-border-subtle pt-7 sm:mt-18">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-wider text-fg-subtle sm:gap-x-8">
              {ecosystemPlatforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-2 transition-colors hover:text-fg-secondary"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-gold/70"
                  />
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
