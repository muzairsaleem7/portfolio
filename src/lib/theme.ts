export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs inline in <head> before paint: marks that JS is available (enables entrance animations)
 * and applies the stored theme or the system preference. Keep it tiny and dependency-free.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add("js");var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");d.setAttribute("data-theme",t);}catch(e){}})();`;

export function readTheme(): Theme {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme, persist = true): void {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* storage unavailable; theme still applies for this page */
    }
  }
}
