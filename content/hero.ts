export const hero = {
  eyebrow: "Product Engineer",
  /** Availability badge above the heading. */
  status: "Open to new roles and projects",
  heading: "Full-Stack SaaS & B2B Business Applications",
  /** Trailing part of the heading rendered in the accent gradient. Must end the heading. */
  headingAccent: "B2B Business Applications",
  sub: "From scoping and architecture to production, end to end.",
  chips: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase"],
  primaryCta: { label: "Work with me", href: "#contact" },
  secondaryCta: { label: "View experience", href: "#experience" },
  resumeCta: { label: "Resume", href: "/resume" },
  stackLabel: "Core stack",
  currentLabel: "Currently",
  current: "Freelance Product Engineer",
  socialLabel: "Find me online",
  /** Short facts shown beside the hero; all verified. */
  facts: [
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "B2B SaaS & business apps" },
    { label: "Based in", value: "Lahore, Pakistan" },
    { label: "Working", value: "Remote" },
  ],
} as const;
