"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

type ThemeContextType = {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme";

function getSystemPreference(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "system") {
    return getSystemPreference();
  }
  return mode;
}

function applyDocumentTheme(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initialMode: ThemeMode =
      saved === "dark" || saved === "light" || saved === "system"
        ? saved
        : "dark";

    const initialResolved = resolveTheme(initialMode);
    applyDocumentTheme(initialResolved);

    queueMicrotask(() => {
      setThemeState(initialMode);
      setResolvedTheme(initialResolved);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleSystemChange = () => {
      if (theme === "system") {
        const nextResolved = getSystemPreference();
        setResolvedTheme(nextResolved);
        applyDocumentTheme(nextResolved);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    const nextResolved = resolveTheme(newTheme);
    setThemeState(newTheme);
    setResolvedTheme(nextResolved);
    window.localStorage.setItem(STORAGE_KEY, newTheme);
    applyDocumentTheme(nextResolved);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
