/**
 * Single place for identity, links, and contact details.
 * Anything marked PLACEHOLDER is listed in CONTENT-TODO.md.
 */
export const siteConfig = {
  name: "Uzair Saleem",
  initials: "US",
  title: "Product Engineer | Full-Stack Software Engineer",
  tagline: "B2B SaaS & Business Application Development, 5+ years",
  description:
    "Uzair Saleem is a product engineer in Lahore, Pakistan who builds B2B SaaS and business applications end to end: scoping, architecture, front end, back end, integrations, and production support.",
  location: {
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
    label: "Lahore, Pakistan · Remote",
  },
  /** PLACEHOLDER: set NEXT_PUBLIC_SITE_URL (or edit here) to the deployed domain. Used for canonical URLs, sitemap, OG, JSON-LD. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  links: {
    linkedin: "https://www.linkedin.com/in/muzairsaleem7/",
    github: "https://github.com/muzairsaleem7" as string,
    /** PLACEHOLDER: any other public link (Upwork, blog, etc.). Leave href empty to hide. */
    other: { label: "" as string, href: "" as string },
  },
  contact: {
    /** PLACEHOLDER: public email. Leave empty to hide the mailto link. */
    email: "" as string,
    /** PLACEHOLDER: public phone in international format. Leave empty to hide. */
    phone: "" as string,
  },
  availability:
    "Open to full-time and contract product engineering roles with international teams, and to freelance engagements with businesses that need a SaaS product or internal tool built.",
  /** Profile photo path under /public. The avatar falls back to initials until this file exists. */
  profileImage: "/images/profile.jpg",
} as const;

export type SiteConfig = typeof siteConfig;
