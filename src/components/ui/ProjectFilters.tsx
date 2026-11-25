"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type {
  ProjectCategoryId,
  ProjectMaturity,
  ProjectPresentation,
} from "@/types/project";

export type CategoryFilterValue = "all" | ProjectCategoryId;
export type MaturityFilterValue = "all" | ProjectMaturity;
export type PresentationFilterValue = "all" | ProjectPresentation;

const CATEGORY_ORDER: ProjectCategoryId[] = [
  "security-reverse-engineering",
  "database-systems",
  "multimedia-audio",
  "enterprise-healthcare",
  "personal-finance",
  "desktop-productivity",
  "games-simulation",
];

const MATURITY_ORDER: ProjectMaturity[] = [
  "production",
  "beta",
  "alpha",
  "prototype",
];

const PRESENTATION_ORDER: ProjectPresentation[] = [
  "featured",
  "standard",
  "research",
];

export default function ProjectFilters({
  selectedCategory,
  onSelectCategory,
  selectedMaturity,
  onSelectMaturity,
  selectedPresentation,
  onSelectPresentation,
  categoryCounts,
  totalCount,
  filteredCount,
  onReset,
}: {
  selectedCategory: CategoryFilterValue;
  onSelectCategory: (category: CategoryFilterValue) => void;
  selectedMaturity: MaturityFilterValue;
  onSelectMaturity: (maturity: MaturityFilterValue) => void;
  selectedPresentation: PresentationFilterValue;
  onSelectPresentation: (presentation: PresentationFilterValue) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}) {
  const { t } = useLanguage();

  const hasActiveFilter =
    selectedCategory !== "all" ||
    selectedMaturity !== "all" ||
    selectedPresentation !== "all";

  return (
    <div className="rounded-3xl border border-border-subtle bg-card p-5 sm:p-7">
      {/* CATEGORY PILLS */}
      <div>
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fg-subtle">
            {t.projects.filters.categoryLabel}
          </span>

          <div className="flex items-center gap-3 font-mono text-xs text-fg-muted">
            <span>
              {t.projects.showingCount}{" "}
              <strong className="text-gold">{filteredCount}</strong>{" "}
              {t.projects.ofCount} {totalCount} {t.projects.projectsUnit}
            </span>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-medium text-gold underline underline-offset-4 transition hover:text-gold-light"
              >
                {t.projects.resetFilters}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={selectedCategory === "all"}
            onClick={() => onSelectCategory("all")}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition duration-200 ${
              selectedCategory === "all"
                ? "border-border-gold bg-gold-muted text-gold"
                : "border-border-subtle bg-pill text-fg-secondary hover:border-border-strong hover:text-fg-primary"
            }`}
          >
            <span>{t.projects.filters.allCategories}</span>
            <span className="font-mono text-[11px] opacity-75">
              {totalCount}
            </span>
          </button>

          {CATEGORY_ORDER.map((categoryId) => {
            const count = categoryCounts[categoryId] ?? 0;
            if (count === 0) return null;
            const isActive = selectedCategory === categoryId;

            return (
              <button
                key={categoryId}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectCategory(categoryId)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition duration-200 ${
                  isActive
                    ? "border-border-gold bg-gold-muted text-gold"
                    : "border-border-subtle bg-pill text-fg-secondary hover:border-border-strong hover:text-fg-primary"
                }`}
              >
                <span>{t.projects.categories[categoryId]}</span>
                <span className="font-mono text-[11px] opacity-75">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MATURITY & PRESENTATION FILTERS */}
      <div className="mt-5 flex flex-col justify-between gap-4 border-t border-border-subtle pt-5 sm:flex-row sm:items-center">
        {/* MATURITY */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fg-subtle">
            {t.projects.filters.maturityLabel}:
          </span>

          <button
            type="button"
            aria-pressed={selectedMaturity === "all"}
            onClick={() => onSelectMaturity("all")}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              selectedMaturity === "all"
                ? "border-border-gold bg-gold-muted text-gold"
                : "border-border-subtle bg-pill text-fg-muted hover:text-fg-primary"
            }`}
          >
            {t.projects.filters.allMaturities}
          </button>

          {MATURITY_ORDER.map((maturity) => {
            const isActive = selectedMaturity === maturity;
            return (
              <button
                key={maturity}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectMaturity(maturity)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "border-border-gold bg-gold-muted text-gold"
                    : "border-border-subtle bg-pill text-fg-muted hover:text-fg-primary"
                }`}
              >
                {t.projects.maturity[maturity]}
              </button>
            );
          })}
        </div>

        {/* PRESENTATION */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fg-subtle">
            {t.projects.filters.presentationLabel}:
          </span>

          <button
            type="button"
            aria-pressed={selectedPresentation === "all"}
            onClick={() => onSelectPresentation("all")}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              selectedPresentation === "all"
                ? "border-border-gold bg-gold-muted text-gold"
                : "border-border-subtle bg-pill text-fg-muted hover:text-fg-primary"
            }`}
          >
            {t.projects.filters.allPresentations}
          </button>

          {PRESENTATION_ORDER.map((presentation) => {
            const isActive = selectedPresentation === presentation;
            return (
              <button
                key={presentation}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectPresentation(presentation)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "border-border-gold bg-gold-muted text-gold"
                    : "border-border-subtle bg-pill text-fg-muted hover:text-fg-primary"
                }`}
              >
                {t.projects.presentation[presentation]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
