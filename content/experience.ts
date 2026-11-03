export type Role = {
  slug: string;
  title: string;
  company: string;
  employmentType: "Freelance" | "Full-time" | "Contract";
  workMode: "Remote" | "On-site" | "Hybrid";
  location: string;
  /** ISO month, e.g. "2024-07" */
  start: string;
  /** ISO month or null for present */
  end: string | null;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export const experience = {
  eyebrow: "Experience",
  heading: "Five years of shipping business software",
  intro:
    "From a first engineering role at a Lahore software house to independent product work with founders. Newest first.",
  viewAll: { label: "Full experience", href: "/experience" },
} as const;

export const roles: readonly Role[] = [
  {
    slug: "freelance-product-engineer",
    title: "Product Engineer, Freelance",
    company: "Self-Employed",
    employmentType: "Freelance",
    workMode: "Remote",
    location: "Lahore, Pakistan",
    start: "2024-07",
    end: null,
    summary:
      "Independent product engineer building B2B SaaS and business applications end to end for clients, from scoping and architecture through delivery and production support.",
    highlights: [
      "Design and ship full-stack web applications with React, Next.js, and Node.js, backed by PostgreSQL, MongoDB, and Supabase.",
      "Build REST APIs and third-party integrations that connect client systems and automate business workflows.",
      "Own deployment and production operations on cloud infrastructure, including CI/CD and monitoring.",
      "Work directly with founders and business owners to turn requirements into working software.",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Supabase", "CI/CD"],
  },
  {
    slug: "techvex-full-stack-software-engineer",
    title: "Full Stack Software Engineer",
    company: "Techvex",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Lahore, Pakistan",
    start: "2024-01",
    end: "2024-06",
    summary: "Full-stack engineer on client-facing business applications and SaaS products.",
    highlights: [
      "Developed web applications with React, Next.js, and Node.js on PostgreSQL and MongoDB.",
      "Designed and implemented REST APIs and third-party integrations for business workflows.",
      "Handled deployments and production fixes, working closely with clients and project leads.",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    slug: "tekxl-full-stack-developer",
    title: "Full Stack Developer",
    company: "TEKXL",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Lahore, Pakistan",
    start: "2022-07",
    end: "2023-12",
    summary:
      "Full-stack developer on web applications and SaaS products delivered for business clients.",
    highlights: [
      "Built and maintained React and Next.js front ends with Node.js back ends on PostgreSQL and MongoDB.",
      "Implemented REST APIs, authentication, and integrations with third-party services.",
      "Took features from requirements to production, including bug fixes, performance improvements, and deployments.",
      "Collaborated with designers, QA, and project managers across concurrent client projects.",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    slug: "webiconz-software-engineer",
    title: "Software Engineer",
    company: "Webiconz Technologies",
    employmentType: "Full-time",
    workMode: "On-site",
    location: "Lahore, Pakistan",
    start: "2021-11",
    end: "2022-06",
    summary: "First engineering role, working on web application features for client projects.",
    highlights: [
      "Built front-end components and pages with React and JavaScript, and back-end endpoints with Node.js.",
      "Worked with PostgreSQL and MongoDB for data modelling and queries.",
      "Fixed bugs, reviewed code with senior engineers, and took features through testing to release.",
    ],
    stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "MongoDB"],
  },
];
