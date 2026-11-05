export const nav = {
  brand: "Uzair Saleem",
  /** Section links resolve to the home page anchors from any route. */
  links: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  resume: { label: "Resume", href: "/resume" },
  cta: { label: "Work with me", href: "/#contact" },
  skipLink: "Skip to content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  themeToggle: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
} as const;

export const footer = {
  linkedinLabel: "LinkedIn",
  githubLabel: "GitHub",
  whatsappLabel: "WhatsApp",
  resumeLabel: "Resume",
  rights: "All rights reserved.",
  builtWith: "Built with Next.js. Deployed on Vercel.",
  backToTop: "Back to top",
  emailLabel: "Email",
} as const;
