"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="border-t border-white/10 bg-black px-6 py-24 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
              {t.contact.eyebrow}
            </p>

            <h2 className="mt-5 max-w-4xl text-[3rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:mt-6 sm:text-6xl lg:text-7xl">
              {t.contact.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
              {t.contact.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <a
                href="mailto:Yessidalba@me.com"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200"
              >
                {t.contact.sendEmail}

                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>

              <span className="inline-flex max-w-[280px] items-start gap-2 text-sm leading-6 text-zinc-500 sm:max-w-none sm:items-center">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400 sm:mt-0" />

                {t.contact.availability}
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-12">
            <div className="divide-y divide-white/10">
              <a
                href="mailto:Yessidalba@me.com"
                className="group flex items-center justify-between gap-6 py-5 sm:py-6"
              >
                <span className="text-sm text-zinc-500">
                  {t.contact.email}
                </span>

                <span className="text-right text-sm text-zinc-200 transition group-hover:text-white">
                  Yessidalba@me.com
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>

              <a
                href="https://github.com/yalbavillegas"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-5 sm:py-6"
              >
                <span className="text-sm text-zinc-500">
                  {t.contact.github}
                </span>

                <span className="text-right text-sm text-zinc-200 transition group-hover:text-white">
                  @yalbavillegas
                  <span className="ml-2" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-600 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium tracking-[0.18em] text-zinc-400">
              {t.contact.company}
            </p>

            <p className="mt-2">
              Software · Products · Technology
            </p>
          </div>

          <p>
            © {new Date().getFullYear()} Yessid Alba
          </p>
        </div>
      </div>
    </section>
  );
}
