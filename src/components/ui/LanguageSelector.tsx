"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

export default function LanguageSelector({
  onSelect,
}: {
  onSelect?: () => void;
}) {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className="inline-flex items-center rounded-full border border-border-subtle bg-pill p-1 text-xs"
    >
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            aria-pressed={isActive}
            onClick={() => {
              setLanguage(item.code);
              onSelect?.();
            }}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.12em] transition duration-200 ${
              isActive
                ? "border border-border-gold bg-gold-muted text-gold"
                : "border border-transparent text-fg-muted hover:text-fg-primary"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
