"use client";

import Link from "next/link";

import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main
      id="main-content"
      className="flex min-h-[82vh] items-center justify-center bg-canvas px-6 text-fg-primary"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-gold sm:text-sm">
          {t.notFound.code}
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-fg-primary sm:text-7xl">
          {t.notFound.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-fg-muted sm:text-lg">
          {t.notFound.description}
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-13 items-center justify-center rounded-full bg-cta-bg px-7 py-3.5 text-sm font-medium text-cta-text hover:bg-cta-hover"
        >
          {t.notFound.back}
        </Link>

        <p className="mt-12 font-mono text-xs font-medium tracking-[0.22em] text-fg-subtle">
          YESSID ALBA LABS
        </p>
      </div>
    </main>
  );
}
