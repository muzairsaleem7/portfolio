export const services = {
  eyebrow: "Services",
  heading: "What I can build for your business",
  pitch:
    "I build B2B SaaS products and business applications end to end for founders and business owners: scoping, architecture, front end, back end, integrations, and production support. Remote, with clear communication and dependable delivery.",
  pricing: "Contact for pricing.",
  items: [
    {
      title: "Web Development",
      description:
        "Fast, accessible web applications built with React and Next.js, designed to be maintained for years, not months.",
    },
    {
      title: "SaaS Development",
      description:
        "Multi-user SaaS products from first data model to billing-ready production: authentication, roles, APIs, and dashboards.",
    },
    {
      title: "Custom Software Development",
      description:
        "Internal tools and workflow software shaped around how your team actually works, replacing spreadsheets and manual steps.",
    },
    {
      title: "Application Development",
      description:
        "Full-stack applications with Node.js back ends, REST APIs, and third-party integrations that connect the systems you already use.",
    },
    {
      title: "Database Development",
      description:
        "Schema design, migrations, and query work on PostgreSQL, MongoDB, and Supabase, with data integrity built in from the start.",
    },
  ],
  process: {
    heading: "How an engagement works",
    steps: [
      { title: "Scope", body: "We map the workflow, the users, and what done looks like." },
      { title: "Architecture", body: "Data model, API design, and a plan you can review." },
      { title: "Build", body: "Front end and back end shipped in short, visible increments." },
      { title: "Run", body: "Deployment, CI/CD, monitoring, and support after launch." },
    ],
  },
  cta: { label: "Start a conversation", href: "#contact" },
} as const;
