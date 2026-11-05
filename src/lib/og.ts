import { hero } from "~/content/hero";
import { absoluteUrl, siteConfig } from "~/site.config";

/**
 * Share image for every page. Pages that set their own `openGraph` replace the parent's object
 * entirely (Next.js merges metadata shallowly), so each of them must include this.
 */
export const OG_IMAGES = [
  {
    url: absoluteUrl("/og.png"),
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} – ${hero.heading}`,
  },
];
