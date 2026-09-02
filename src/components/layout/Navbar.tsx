"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.technologies, href: "#tecnologias" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-[0.18em] text-white"
        >
          YESSID ALBA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setLanguage("es")}
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
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "font-medium text-white"
                  : "text-zinc-600 transition hover:text-white"
              }
            >
              EN
            </button>
          </div>

          <a
            href="#contacto"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black sm:inline-flex"
          >
            {t.nav.talk}
          </a>
        </div>
      </nav>
    </header>
  );
}
