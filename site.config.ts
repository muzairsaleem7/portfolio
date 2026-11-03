/**
 * Single place for identity, links, and contact details.
 * Everything here is used across the contact section, footer, resume, metadata, and JSON-LD.
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
  /** Production URL. Used for metadataBase, canonical URLs, sitemap, robots, OG, and JSON-LD. NEXT_PUBLIC_SITE_URL overrides it (e.g. for preview deployments). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://muzairsaleem.vercel.app").replace(/\/$/, ""),
  links: {
    linkedin: "https://www.linkedin.com/in/muzairsaleem7/",
    github: "https://github.com/muzairsaleem7" as string,
    /** Optional extra link (Upwork, blog, etc.). Leave href empty to hide it. */
    other: { label: "" as string, href: "" as string },
  },
  contact: {
    /** Public email. Leave empty to hide every mailto link. */
    email: "muzairsaleem7@gmail.com" as string,
    /** Public phone in international format. Leave empty to hide it. */
    phone: "+92 320 9865164" as string,
    /** Whether the phone number also takes WhatsApp messages (adds a wa.me link). */
    whatsapp: true as boolean,
  },
  availability:
    "Open to full-time and contract product engineering roles with international teams, and to freelance engagements with businesses that need a SaaS product or internal tool built.",
  /** Profile photo path under /public. The avatar falls back to initials until this file exists. */
  profileImage: "/images/profile.jpg",
} as const;

export type SiteConfig = typeof siteConfig;

/** "+92 320 9865164" -> "+923209865164" for tel: links. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** "+92 320 9865164" -> "https://wa.me/923209865164" */
export function whatsappHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
