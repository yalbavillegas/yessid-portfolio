"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import LanguageSelector from "@/components/ui/LanguageSelector";
import ThemeSelector from "@/components/ui/ThemeSelector";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "/#inicio" },
    { label: t.nav.about, href: "/#sobre-mi" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.technologies, href: "/#tecnologias" },
    { label: t.nav.research, href: "/#investigacion" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-border-gold focus:bg-canvas focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-gold focus:shadow-lg"
      >
        {t.nav.skipToContent}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-glass backdrop-blur-xl">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
        >
          {/* BRAND IDENTITY */}
          <Link
            href="/#inicio"
            onClick={closeMobileMenu}
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-fg-primary"
          >
            <span>YESSID ALBA</span>
            <span
              aria-hidden="true"
              className="hidden h-3.5 w-px bg-border-strong sm:inline-block"
            />
            <span className="hidden font-mono text-[11px] font-medium tracking-[0.22em] text-gold sm:inline-block">
              LABS
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-fg-muted transition duration-200 hover:text-fg-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeSelector />
            <LanguageSelector />

            <Link
              href="/#contacto"
              className="ml-1 inline-flex items-center justify-center rounded-full border border-border-gold bg-gold-muted px-4 py-2 text-xs font-medium tracking-wide text-gold transition duration-200 hover:bg-gold hover:text-[#050811]"
            >
              {t.nav.talk}
            </Link>
          </div>

          {/* TABLET & MOBILE CONTROLS + DRAWER TOGGLE */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="hidden items-center gap-2 sm:flex">
              <ThemeSelector />
              <LanguageSelector />
            </div>

            <button
              type="button"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-pill text-fg-primary transition hover:border-border-strong"
            >
              {isMobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* MOBILE & TABLET NAVIGATION DRAWER */}
        {isMobileOpen && (
          <div
            id="mobile-navigation-drawer"
            className="h-[calc(100dvh-69px)] overflow-y-auto border-t border-border-subtle bg-canvas shadow-2xl lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-6 pb-8 pt-4">
              <div className="flex flex-col divide-y divide-border-subtle">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="py-3.5 text-lg font-medium text-fg-secondary transition hover:text-gold active:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6">
                <div className="flex items-center gap-3 sm:hidden">
                  <ThemeSelector onSelect={closeMobileMenu} />
                  <LanguageSelector onSelect={closeMobileMenu} />
                </div>

                <Link
                  href="/#contacto"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-full border border-border-gold bg-gold-muted px-5 py-2.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-[#050811]"
                >
                  {t.nav.talk}
                </Link>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-5">
                <p className="font-mono text-xs font-medium tracking-[0.22em] text-fg-subtle">
                  YESSID ALBA LABS
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
