import { nav } from "~/content/nav";

export function SkipLink() {
  return (
    <a
      href="#content"
      className="rounded-pill bg-heading text-bg sr-only z-50 px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {nav.skipLink}
    </a>
  );
}
