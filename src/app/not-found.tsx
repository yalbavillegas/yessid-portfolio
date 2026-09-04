"use client";

import Link from "next/link";

import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();

  const content =
    language === "es"
      ? {
          title: "Página no encontrada.",
          description:
            "La página que estás buscando no existe o fue movida.",
          back: "Volver al inicio",
        }
      : {
          title: "Page not found.",
          description:
            "The page you're looking for doesn't exist or may have been moved.",
          back: "Back to home",
        };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          404
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
          {content.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          {content.description}
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          {content.back}
        </Link>

        <p className="mt-12 text-xs font-medium tracking-[0.18em] text-zinc-700">
          YALBA LABS
        </p>
      </div>
    </main>
  );
}
