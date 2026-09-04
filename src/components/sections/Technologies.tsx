"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const technologyGroups = [
  {
    key: "mobile",
    technologies: [
      "Swift",
      "SwiftUI",
      "SpriteKit",
      "Kotlin",
      "Android",
      "Flutter",
    ],
  },
  {
    key: "desktop",
    technologies: [
      "macOS",
      "Windows",
      "Python",
      "PyQt6",
      "SQLite",
    ],
  },
  {
    key: "web",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    key: "tools",
    technologies: [
      "Git",
      "GitHub",
      "Xcode",
      "VS Code",
      "FFmpeg",
    ],
  },
] as const;

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section
      id="tecnologias"
      className="border-t border-white/10 bg-zinc-950 px-6 py-24 text-white sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
            {t.technologies.eyebrow}
          </p>

          <h2 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t.technologies.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg sm:leading-8">
            {t.technologies.description}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:mt-16 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <div
              key={group.key}
              className="bg-zinc-950 p-6 sm:p-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
                {t.technologies.groups[group.key]}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-300 sm:px-4 sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
