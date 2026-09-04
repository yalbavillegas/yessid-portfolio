"use client";

import Link from "next/link";
import { useRef } from "react";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
  if (mobileMenuRef.current) {
    mobileMenuRef.current.open = false;
  }
};

  const navItems = [
    { label: t.nav.home, href: "/#inicio" },
    { label: t.nav.about, href: "/#sobre-mi" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.technologies, href: "/#tecnologias" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#inicio"
          className="text-sm font-semibold tracking-[0.18em] text-white"
        >
          YESSID ALBA
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CONTROLS */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => {
                setLanguage("es");
                closeMobileMenu();
              }}
              className={
                language === "es"
                  ? "font-medium text-white"
                  : "text-zinc-600 transition hover:text-white"
              }
            >
              ES
            </button>

            <span className="text-zinc-700">/</span>

            <button
              type="button"
              onClick={() => {
                setLanguage("en");
                closeMobileMenu();
              }}
              className={
                language === "en"
                  ? "font-medium text-white"
                  : "text-zinc-600 transition hover:text-white"
              }
            >
              EN
            </button>
          </div>

          <Link
            href="/#contacto"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            {t.nav.talk}
          </Link>
        </div>

        {/* MOBILE MENU */}
        <details
           ref={mobileMenuRef}
           className="group relative md:hidden"
        >
          <summary
            aria-label="Abrir menú"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 text-white [&::-webkit-details-marker]:hidden"
          >
            <span className="text-xl leading-none group-open:hidden">
              ☰
            </span>

            <span className="hidden text-2xl leading-none group-open:block">
              ×
            </span>
          </summary>

          <div className="fixed inset-x-0 top-[73px] border-t border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 pb-8 pt-3">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="border-b border-white/10 py-4 text-lg font-medium text-zinc-300 active:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("es");
                      closeMobileMenu();
                    }}
                    className={
                      language === "es"
                        ? "font-medium text-white"
                        : "text-zinc-600"
                    }
                  >
                    ES
                  </button>

                  <span className="text-zinc-700">/</span>

                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("en");
                      closeMobileMenu();
                    }}
                    className={
                      language === "en"
                        ? "font-medium text-white"
                        : "text-zinc-600"
                    }
                  >
                    EN
                  </button>
                </div>

                <Link
                  href="/#contacto"
                  onClick={closeMobileMenu}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white"
                >
                  {t.nav.talk}
                </Link>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs font-medium tracking-[0.2em] text-zinc-700">
                  YALBA LABS
                </p>
              </div>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
