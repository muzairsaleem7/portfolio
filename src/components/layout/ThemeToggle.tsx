"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { nav } from "~/content/nav";
import { applyTheme, readTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/** Subscribe to the data-theme attribute and to system preference changes. */
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const mq = window.matchMedia("(prefers-color-scheme: light)");
  const onSystemChange = (e: MediaQueryListEvent) => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    // Follow the system only while the user has not chosen explicitly.
    if (stored !== "light" && stored !== "dark") {
      applyTheme(e.matches ? "light" : "dark", false);
    }
  };
  mq.addEventListener("change", onSystemChange);

  return () => {
    observer.disconnect();
    mq.removeEventListener("change", onSystemChange);
  };
}

const getSnapshot = (): Theme => readTheme();
const getServerSnapshot = (): Theme => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";
  const label = isDark ? nav.themeToggle.toLight : nav.themeToggle.toDark;

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="rounded-pill border-line bg-surface text-heading ease-out-soft hover:border-chip-border hover:bg-surface-strong relative inline-flex h-10 w-10 items-center justify-center border transition-[background-color,border-color,transform] duration-300 active:scale-95 motion-reduce:transition-none"
    >
      <Sun
        aria-hidden="true"
        strokeWidth={1.8}
        className={`ease-out-soft absolute size-5 transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
          isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        aria-hidden="true"
        strokeWidth={1.8}
        className={`ease-out-soft absolute size-5 transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
