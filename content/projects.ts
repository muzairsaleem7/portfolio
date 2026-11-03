export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: readonly string[];
  role: string;
  links: { live?: string; repo?: string };
  /** Path under /public, e.g. "/images/projects/example.jpg" */
  image?: string;
  featured: boolean;
};

export const projectsSection = {
  eyebrow: "Projects",
  heading: "Selected work",
  intro:
    "A few of the products and internal tools I've built. Project details are being added; the entries below are placeholders.",
  viewAll: { label: "All projects", href: "/projects" },
} as const;

/**
 * PLACEHOLDER CONTENT. Replace each entry with a real project.
 * Keep `slug` URL-safe; it drives /projects/[slug].
 */
export const projects: readonly Project[] = [
  {
    slug: "project-placeholder-1",
    title: "Project placeholder 1",
    summary: "[Placeholder] One-sentence summary of what this product does and who it is for.",
    problem:
      "[Placeholder] Describe the business problem: who had it, what was slow or manual, what it cost them.",
    solution:
      "[Placeholder] Describe what was built, the key decisions in the data model and architecture, and how it was delivered and run in production.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    role: "[Placeholder] Product engineer, end to end",
    links: {},
    featured: true,
  },
  {
    slug: "project-placeholder-2",
    title: "Project placeholder 2",
    summary: "[Placeholder] One-sentence summary of what this product does and who it is for.",
    problem:
      "[Placeholder] Describe the business problem: who had it, what was slow or manual, what it cost them.",
    solution:
      "[Placeholder] Describe what was built, the key decisions in the data model and architecture, and how it was delivered and run in production.",
    stack: ["React", "Express.js", "MongoDB"],
    role: "[Placeholder] Full-stack engineer",
    links: {},
    featured: true,
  },
  {
    slug: "project-placeholder-3",
    title: "Project placeholder 3",
    summary: "[Placeholder] One-sentence summary of what this product does and who it is for.",
    problem:
      "[Placeholder] Describe the business problem: who had it, what was slow or manual, what it cost them.",
    solution:
      "[Placeholder] Describe what was built, the key decisions in the data model and architecture, and how it was delivered and run in production.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    role: "[Placeholder] Product engineer",
    links: {},
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
