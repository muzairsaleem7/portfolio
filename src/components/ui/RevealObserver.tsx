"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every `[data-reveal]` element on the page.
 * Mounted once in the root layout; re-scans after client-side navigations.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const all = () => Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || typeof IntersectionObserver === "undefined") {
      all().forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observeAll = () => {
      all().forEach((el) => {
        if (!el.classList.contains("is-visible")) io.observe(el);
      });
    };
    observeAll();

    // Pick up elements added by client-side navigations (App Router swaps <main> content).
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
