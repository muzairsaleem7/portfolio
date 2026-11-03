export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  /**
   * Optional lead paragraph for the solution. The current projects describe their solution
   * as a list, so they use `highlights` only and leave this unset.
   */
  solution?: string;
  /** Solution and highlights, rendered as a list on the detail page. */
  highlights: readonly string[];
  stack: readonly string[];
  role: string;
  /** Where the work happened, e.g. "Independent engagement, Product Engineer (Freelance)". */
  context: string;
  /** Public links. Empty means no buttons are rendered. */
  links: { live?: string; repo?: string };
  /** Path under /public, e.g. "/images/projects/example.jpg". Without it, an abstract header is shown. */
  image?: string;
  /** Featured projects appear on the home page. */
  featured: boolean;
};

export const projectsSection = {
  eyebrow: "Projects",
  heading: "Selected work",
  intro:
    "SaaS products, sales tools, internal platforms, and customer portals I've built, from independent engagements and earlier roles.",
  viewAll: { label: "All projects", href: "/projects" },
  cardCta: "Read the case study",
  detail: {
    eyebrow: "Project",
    problemHeading: "The problem",
    solutionHeading: "Solution and highlights",
    detailsHeading: "Details",
    contextLabel: "Context",
    roleLabel: "Role",
    stackLabel: "Stack",
    linksLabel: "Links",
    liveLabel: "Live site",
    repoLabel: "Source",
    backLabel: "All projects",
    ctaLabel: "Work with me",
  },
} as const;

/** Source: portfolio-prompt.md section 8. Keep the order; the first three are featured on the home page. */
export const projects: readonly Project[] = [
  {
    slug: "multi-tenant-b2b-saas-platform",
    title: "Multi-Tenant B2B SaaS Platform",
    context: "Independent engagement, Product Engineer (Freelance)",
    role: "Product engineer, end to end",
    summary:
      "Subscription-based SaaS web application serving multiple business customers from a single codebase.",
    problem:
      "Several business customers needed the same product with their data kept strictly separate, plus a way to onboard and manage customer accounts.",
    highlights: [
      "Multi-tenant data model with tenant isolation, role-based access control, and an admin console for onboarding and managing customer accounts.",
      "Customer-facing dashboard and workflow screens in Next.js and React; REST API and background jobs in Node.js.",
      "PostgreSQL on Supabase with row-level security, authentication, and file storage; subscription billing and transactional email through third-party integrations.",
      "Deployed with CI/CD, environment-based configuration, logging, and monitoring; owned production support after launch.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
    links: {},
    featured: true,
  },
  {
    slug: "b2b-lead-generation-sales-pipeline",
    title: "B2B Lead Generation & Sales Pipeline Tool",
    context: "Independent engagement, Product Engineer (Freelance)",
    role: "Product engineer, end to end",
    summary: "Web application that helps a B2B business capture, qualify, and follow up on leads.",
    problem:
      "Leads arrived from several sources with no single place to qualify, assign, and follow up on them, and no view of which sources converted.",
    highlights: [
      "Lead capture from website forms and landing pages with validation, de-duplication, and source tracking.",
      "Pipeline board for sales stages, assignment, notes, and reminders, with role-based access for sales and management.",
      "Integrations with a CRM and an email service through REST APIs; automated follow-up sequences and lead notifications.",
      "Reporting views for lead volume, conversion by stage, and source performance so the business can see what is working.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    links: {},
    featured: true,
  },
  {
    slug: "business-workflow-automation-platform",
    title: "Business Workflow Automation Platform",
    context: "Full Stack Developer at TEKXL",
    role: "Full-stack developer",
    summary:
      "Internal web platform that replaced spreadsheet- and email-driven processes for a business client with structured, trackable workflows.",
    problem:
      "Requests and approvals ran through spreadsheets and email, with no status tracking, no audit trail, and manual month-end reporting.",
    highlights: [
      "Configurable request and approval flows with status tracking, assignment, deadlines, and an audit trail of every change.",
      "Role-based dashboards for staff, managers, and administrators; notifications by email and in-app.",
      "Reporting and export for operational metrics, replacing manual month-end reconciliation.",
      "React front end with a Node.js REST API on PostgreSQL; deployed with CI/CD and supported in production after release.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST APIs", "CI/CD"],
    links: {},
    featured: true,
  },
  {
    slug: "customer-portal-integrations",
    title: "Customer Portal with Third-Party Integrations",
    context: "Full Stack Software Engineer at Techvex",
    role: "Full-stack engineer",
    summary:
      "Customer-facing web portal giving a business client's customers self-service access to their accounts, orders, and documents.",
    problem:
      "Customers had to contact staff for routine account, order, and document requests, and the client's systems weren't connected to a customer-facing channel.",
    highlights: [
      "Secure login and account management with role-based permissions for customers and internal staff.",
      "Order and request tracking, document downloads, and a support request flow with status updates.",
      "Integrations with payment, email, and the client's back-office system through a Node.js REST API layer with retries and error handling.",
      "React front end with Next.js; MongoDB for portal data; CI/CD deployments and production support.",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "REST APIs"],
    links: {},
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
