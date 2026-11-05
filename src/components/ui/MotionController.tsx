"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Gsap = typeof import("gsap").gsap;
type ScrollTriggerT = typeof import("gsap/ScrollTrigger").ScrollTrigger;

const INTENT_EVENTS = ["scroll", "wheel", "touchstart", "pointermove", "keydown"] as const;

/**
 * Load GSAP on the visitor's first sign of intent (scroll, touch, pointer, key) instead of during
 * page load, so its parse and setup never land in the loading window. Nothing below the fold is
 * visible before the first scroll anyway.
 */
function onFirstIntent(cb: () => void): () => void {
  let done = false;
  const fire = () => {
    if (done) return;
    done = true;
    remove();
    cb();
  };
  const remove = () =>
    INTENT_EVENTS.forEach((type) => window.removeEventListener(type, fire, { capture: true }));
  INTENT_EVENTS.forEach((type) =>
    window.addEventListener(type, fire, { capture: true, passive: true, once: true }),
  );
  return remove;
}

/**
 * Reveal whatever is on screen at load with the CSS transition (no GSAP needed). An
 * IntersectionObserver reports the first frame asynchronously, so this never forces layout.
 */
function revealInitialViewport(): () => void {
  if (typeof IntersectionObserver === "undefined") {
    revealAll();
    return () => {};
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }
    io.disconnect();
  });
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  return () => io.disconnect();
}

function revealAll() {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
}

function setup(gsap: Gsap, ScrollTrigger: ScrollTriggerT) {
  // 1. Entrance reveals, batched so items entering together stagger together.
  const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]:not(.is-visible)");
  const viewportH = window.innerHeight;
  const inView = targets.filter((el) => el.getBoundingClientRect().top < viewportH * 0.92);
  const below = targets.filter((el) => !inView.includes(el));

  if (inView.length) {
    gsap.fromTo(
      inView,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        clearProps: "transform",
      },
    );
  }
  if (below.length) {
    gsap.set(below, { opacity: 0, y: 32 });
    ScrollTrigger.batch(below, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          overwrite: true,
          clearProps: "transform",
        }),
    });
  }

  // 2. Experience timeline: the accent line draws as the section scrolls past.
  gsap.utils.toArray<HTMLElement>("[data-timeline-line]").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: line.parentElement,
          start: "top 70%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      },
    );
  });

  // 3. Backdrop glows drift slowly against the scroll for depth.
  const scrollRange = {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1.2,
  };
  gsap.to(".glow-sky", { yPercent: 18, ease: "none", scrollTrigger: scrollRange });
  gsap.to(".glow-indigo", { yPercent: -22, ease: "none", scrollTrigger: { ...scrollRange } });

  // 4. Reading progress bar under the header.
  gsap.to(".scroll-progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
  });

  // 5. Highlight the header link for the section in view (home page only).
  document.querySelectorAll<HTMLAnchorElement>('header .nav-link[href^="/#"]').forEach((link) => {
    const section = document.getElementById(link.hash.slice(1));
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: "top 45%",
      end: "bottom 45%",
      onToggle: (self) => link.classList.toggle("is-active", self.isActive),
    });
  });

  // 6. Magnetic pull on primary calls to action (fine pointers only).
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (fine) {
    gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
    });
  }
}

/** Cursor spotlight on hoverable cards: one delegated listener, rAF-throttled. */
function bindSpotlight(): () => void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};
  let frame = 0;
  const onMove = (e: PointerEvent) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const card = (e.target as Element | null)?.closest<HTMLElement>(".card-spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  };
  document.addEventListener("pointermove", onMove, { passive: true });
  return () => {
    document.removeEventListener("pointermove", onMove);
    cancelAnimationFrame(frame);
  };
}

/**
 * Site-wide motion, mounted once in the root layout. GSAP and ScrollTrigger load on first
 * interaction; the hero and anything visible at load animate with CSS, so first paint and the
 * loading window never wait on them.
 * Reduced motion: everything is shown immediately and nothing moves.
 * If GSAP fails to load, a timeout reveals all content so nothing stays hidden.
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealAll();
      return;
    }

    let cancelled = false;
    let revert: (() => void) | undefined;
    const unbindSpotlight = bindSpotlight();
    const stopInitial = revealInitialViewport();

    const cancelIntent = onFirstIntent(async () => {
      // If GSAP is slow or blocked, show everything rather than leave content hidden.
      const failsafe = setTimeout(revealAll, 3000);
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        clearTimeout(failsafe);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        document.documentElement.classList.add("gsap-ready");
        const ctx = gsap.context(() => setup(gsap, ScrollTrigger));
        revert = () => ctx.revert();
      } catch {
        clearTimeout(failsafe);
        revealAll();
      }
    });

    return () => {
      cancelled = true;
      cancelIntent();
      stopInitial();
      unbindSpotlight();
      revert?.();
    };
  }, [pathname]);

  return null;
}
