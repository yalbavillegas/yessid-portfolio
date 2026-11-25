"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/ui/ProjectCard";
import ProjectFilters, {
  type CategoryFilterValue,
  type MaturityFilterValue,
  type PresentationFilterValue,
} from "@/components/ui/ProjectFilters";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedProjects, getPublicProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const publicProjects = useMemo(() => getPublicProjects(), []);
  const featuredProjects = useMemo(() => getFeaturedProjects(), []);

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterValue>("all");
  const [selectedMaturity, setSelectedMaturity] =
    useState<MaturityFilterValue>("all");
  const [selectedPresentation, setSelectedPresentation] =
    useState<PresentationFilterValue>("all");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const proj of publicProjects) {
      counts[proj.categoryId] = (counts[proj.categoryId] ?? 0) + 1;
    }
    return counts;
  }, [publicProjects]);

  const filteredProjects = useMemo(() => {
    return publicProjects.filter((project) => {
      if (
        selectedCategory !== "all" &&
        project.categoryId !== selectedCategory
      ) {
        return false;
      }
      if (
        selectedMaturity !== "all" &&
        project.maturity !== selectedMaturity
      ) {
        return false;
      }
      if (
        selectedPresentation !== "all" &&
        project.presentation !== selectedPresentation
      ) {
        return false;
      }
      return true;
    });
  }, [
    publicProjects,
    selectedCategory,
    selectedMaturity,
    selectedPresentation,
  ]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedMaturity("all");
    setSelectedPresentation("all");
  };

  return (
    <section
      id="proyectos"
      className="border-t border-border-subtle bg-canvas px-6 py-24 text-fg-primary sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
          className="mb-14 sm:mb-20"
        />

        {/* 1. FEATURED FLAGSHIPS SHOWCASE */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-8 flex flex-col justify-between gap-3 border-b border-border-subtle pb-5 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-fg-primary sm:text-2xl">
                {t.projects.featuredHeading}
              </h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                {t.projects.featuredSubheading}
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              01 — {String(featuredProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 2. COMPLETE INTERACTIVE ENGINEERING CATALOG */}
        <div id="catalogo">
          <div className="mb-8 flex flex-col justify-between gap-3 border-b border-border-subtle pb-5 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-fg-primary sm:text-2xl">
                {t.projects.catalogHeading}
              </h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                {t.projects.catalogSubheading}
              </p>
            </div>
          </div>

          <ProjectFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedMaturity={selectedMaturity}
            onSelectMaturity={setSelectedMaturity}
            selectedPresentation={selectedPresentation}
            onSelectPresentation={setSelectedPresentation}
            categoryCounts={categoryCounts}
            totalCount={publicProjects.length}
            filteredCount={filteredProjects.length}
            onReset={resetFilters}
          />

          {filteredProjects.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  compact
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-border-subtle bg-card p-12 text-center">
              <p className="text-lg font-semibold text-fg-primary">
                {t.projects.emptyFilterTitle}
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">
                {t.projects.emptyFilterDescription}
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex items-center rounded-full border border-border-gold bg-gold-muted px-5 py-2.5 text-xs font-medium text-gold transition hover:bg-gold hover:text-[#050811]"
              >
                {t.projects.resetFilters}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
