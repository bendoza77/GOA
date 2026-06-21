import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "goa-theme";

/** Reads the current theme, preferring a saved choice, then the OS setting. */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

/** Applies the theme by toggling the `light` class on <html>. */
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
}

const ThemeContext = createContext(null);

/**
 * Owns light/dark mode for the whole app. Holding the state in a single
 * provider (instead of a per-component hook) means every consumer — the
 * navbar toggle, the mobile menu toggle — shares one source of truth and
 * stays in sync. Persists the choice and keeps the <html> class current so
 * every CSS variable token flips at once.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Consume the theme context. Throws if used outside <ThemeProvider>. */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
