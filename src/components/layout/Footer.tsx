"use client";

import Link from "next/link";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-subtle bg-canvas px-6 py-12 text-fg-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-gold"
            />
            <Link
              href="/#inicio"
              className="font-mono text-xs font-semibold tracking-[0.22em] text-fg-primary transition hover:text-gold"
            >
              {t.contact.company}
            </Link>
          </div>

          <p className="mt-2 text-xs text-fg-subtle sm:text-sm">
            {t.contact.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-xs text-fg-subtle sm:items-end sm:text-sm">
          <p>
            © {new Date().getFullYear()} Yessid Alba. {t.contact.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
