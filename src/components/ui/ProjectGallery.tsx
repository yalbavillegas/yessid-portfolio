"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useLanguage } from "@/i18n/LanguageContext";
import type { ProjectGalleryItem } from "@/types/project";

export default function ProjectGallery({
  projectName,
  items,
  isMobile = false,
}: {
  projectName: string;
  items: ProjectGalleryItem[];
  isMobile?: boolean;
}) {
  const { language, t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % items.length
        );
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, items.length]);

  if (items.length === 0) return null;

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      {isMobile ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <figure
              key={item.src}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card p-4 transition duration-300 hover:border-border-gold/60"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className="relative mx-auto aspect-[9/19.5] w-full max-w-[260px] cursor-zoom-in overflow-hidden rounded-[1.75rem] border border-white/12 bg-stage shadow-xl"
              >
                <Image
                  src={item.src}
                  alt={`${projectName} — ${item.caption[language]}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 75vw, 260px"
                />
              </button>

              <figcaption className="mt-4 flex items-start gap-2.5 px-1 text-xs leading-6 text-fg-muted">
                <span className="font-mono text-[11px] font-semibold text-gold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{item.caption[language]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div
          className={`mt-8 grid gap-6 sm:mt-10 ${
            items.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
          }`}
        >
          {items.map((item, idx) => (
            <figure
              key={item.src}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-card transition duration-300 hover:border-border-gold/60"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-border-subtle bg-stage"
              >
                <Image
                  src={item.src}
                  alt={`${projectName} — ${item.caption[language]}`}
                  fill
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.015] sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </button>

              <figcaption className="flex items-start gap-3 p-5 text-xs leading-6 text-fg-muted sm:px-6 sm:py-4 sm:text-sm">
                <span className="mt-0.5 font-mono text-xs font-semibold text-gold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{item.caption[language]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* HIGH-RESOLUTION LIGHTBOX VIEWER */}
      {activeItem && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} preview`}
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#040711]/92 p-4 backdrop-blur-xl sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#070b15] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#d4af37]">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-slate-200">
                  {projectName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex(
                          (selectedIndex - 1 + items.length) % items.length
                        )
                      }
                      aria-label={t.projectDetail.lightbox.previous}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200 transition hover:border-[#d4af37] hover:text-[#d4af37]"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIndex((selectedIndex + 1) % items.length)
                      }
                      aria-label={t.projectDetail.lightbox.next}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200 transition hover:border-[#d4af37] hover:text-[#d4af37]"
                    >
                      →
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label={t.projectDetail.lightbox.close}
                  className="ml-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  ESC ✕
                </button>
              </div>
            </div>

            <div className="relative h-[68vh] w-full bg-[#050811]">
              <Image
                src={activeItem.src}
                alt={`${projectName} — ${activeItem.caption[language]}`}
                fill
                className="object-contain p-4"
                sizes="95vw"
              />
            </div>

            <div className="border-t border-white/10 px-6 py-4 text-xs text-slate-300 sm:text-sm">
              {activeItem.caption[language]}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
