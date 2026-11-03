export const about = {
  eyebrow: "About",
  heading: "I build business software end to end",
  paragraphs: [
    "I'm a product engineer who builds B2B SaaS and business applications end to end: scoping the problem with the people who will use the software, designing the data model and architecture, shipping the front end and back end, and keeping it running in production.",
    "Over the past five years I've worked on client-facing web applications at software houses in Lahore and, since 2024, directly with founders and business owners as an independent engineer. The common thread is turning a real business workflow into dependable software, without a hand-off between the person who understands the problem and the person who writes the code.",
    "The measure I care about is business impact. I help companies grow through software: SaaS products their customers pay for, B2B lead generation and sales pipeline tools, customer portals, and internal systems that remove manual work and give teams reliable data.",
  ],
  stackHeading: "What I work with",
  stack: [
    { label: "Front end", items: ["React", "Next.js"] },
    {
      label: "Back end",
      items: ["Node.js", "Python", "REST API development", "Third-party integrations"],
    },
    { label: "Data", items: ["PostgreSQL", "MongoDB", "Supabase"] },
    {
      label: "Delivery",
      items: ["Cloud deployment", "CI/CD", "Monitoring", "Production support"],
    },
  ],
  /** How I work: short principles for both audiences (hiring teams and founders). */
  principles: [
    {
      title: "Scope with the people who use it",
      body: "I start from the workflow, not the ticket. Requirements come from talking to the people who will rely on the software every day.",
    },
    {
      title: "Own the whole stack",
      body: "Data model, API, front end, deployment. One engineer accountable for the product from first commit to production.",
    },
    {
      title: "Keep it running",
      body: "Shipping is the start. I set up CI/CD, monitoring, and production support so the software stays dependable after launch.",
    },
  ],
} as const;
