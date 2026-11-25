"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme, type ThemeMode } from "@/theme/ThemeContext";

export default function ThemeSelector({
  onSelect,
  showLabels = false,
}: {
  onSelect?: () => void;
  showLabels?: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const options: {
    mode: ThemeMode;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      mode: "dark",
      label: t.theme.dark,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
    {
      mode: "light",
      label: t.theme.light,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ),
    },
    {
      mode: "system",
      label: t.theme.system,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="group"
      aria-label={t.theme.label}
      className="inline-flex items-center rounded-full border border-border-subtle bg-pill p-1"
    >
      {options.map((option) => {
        const isActive = theme === option.mode;

        return (
          <button
            key={option.mode}
            type="button"
            title={`${t.theme.label}: ${option.label}`}
            aria-label={`${t.theme.label}: ${option.label}`}
            aria-pressed={isActive}
            onClick={() => {
              setTheme(option.mode);
              onSelect?.();
            }}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition duration-200 ${
              isActive
                ? "border border-border-gold bg-gold-muted text-gold shadow-xs"
                : "border border-transparent text-fg-muted hover:text-fg-primary"
            }`}
          >
            {option.icon}
            {showLabels && <span>{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
