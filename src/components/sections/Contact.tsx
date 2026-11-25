"use client";

import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="border-t border-border-subtle bg-surface px-6 py-24 text-fg-primary sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-gold" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.26em] text-gold sm:text-[13px] sm:tracking-[0.28em]">
                {t.contact.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.05em] text-fg-primary sm:mt-6 sm:text-6xl lg:text-7xl">
              {t.contact.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-fg-secondary sm:mt-8 sm:text-lg sm:leading-8">
              {t.contact.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-cta-bg px-7 py-3.5 text-sm font-medium text-cta-text hover:bg-cta-hover"
              >
                <span>{t.contact.sendEmail}</span>
                <span className="ml-2 text-gold" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-border-strong bg-pill px-6 py-3.5 text-sm font-medium text-fg-primary transition duration-200 hover:border-border-gold hover:text-gold"
              >
                <span>{t.contact.exploreGithub}</span>
                <span className="ml-2 text-gold" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2.5 text-sm text-fg-muted">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>{t.contact.availability}</span>
            </div>

            {/* COLLABORATION FOCUS AREAS */}
            <div className="mt-12 border-t border-border-subtle pt-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
                {t.contact.areasTitle}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.contact.areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-fg-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VERIFIED ENDPOINTS CARD */}
          <div className="rounded-3xl border border-border-subtle bg-card p-6 sm:p-8">
            <div className="divide-y divide-border-subtle">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {t.contact.email}
                </span>

                <span className="text-right text-sm font-medium text-fg-primary transition group-hover:text-gold">
                  {SITE_CONFIG.email}
                  <span className="ml-2 text-gold" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {t.contact.github}
                </span>

                <span className="text-right text-sm font-medium text-fg-primary transition group-hover:text-gold">
                  {SITE_CONFIG.githubHandle}
                  <span className="ml-2 text-gold" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>

              <a
                href={SITE_CONFIG.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {t.contact.domain}
                </span>

                <span className="text-right text-sm font-medium text-fg-primary transition group-hover:text-gold">
                  yessidalbalabs.tech
                  <span className="ml-2 text-gold" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>

              <a
                href={SITE_CONFIG.vercelUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {t.contact.mirror}
                </span>

                <span className="text-right text-sm font-medium text-fg-secondary transition group-hover:text-gold">
                  yessid-portfolio.vercel.app
                  <span className="ml-2 text-gold" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>

              <div className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0 sm:py-5">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {t.contact.locationLabel}
                </span>

                <span className="text-right text-sm font-medium text-fg-secondary">
                  {t.contact.locationValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
