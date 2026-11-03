export const skills = {
  eyebrow: "Skills",
  heading: "Tools I work with",
  intro: "Grouped by where they sit in the stack. Only what I have used in real projects.",
  groups: [
    { label: "Front end", items: ["React.js", "Next.js", "JavaScript"] },
    {
      label: "Back end",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "API Development",
        "Python",
        "Django",
        "FastAPI",
      ],
    },
    { label: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "SQL", "Database Design"] },
    {
      label: "Delivery and practice",
      items: [
        "CI/CD",
        "Git",
        "Software Architecture",
        "Agile Methodologies",
        "Web Application Development",
        "Full-Stack Development",
        "Software Development",
        "Software as a Service (SaaS)",
        "Product Development",
      ],
    },
  ],
} as const;
