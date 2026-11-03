# Build my portfolio website (Next.js)

You are building a personal portfolio website for me, Uzair Saleem, a Product Engineer and Full-Stack Software Engineer based in Lahore, Pakistan. Work in the current folder. Build it fully, not as a scaffold. Everything below is verified fact unless marked PLACEHOLDER. Do not invent projects, clients, metrics, testimonials, or logos. Where I've marked something as a placeholder, build the component with clearly marked sample content and list it in `CONTENT-TODO.md` so I can fill it in later.

## 1. Who I am (verified facts)

- **Name:** Uzair Saleem
- **Title:** Product Engineer | Full-Stack Software Engineer
- **Positioning line:** B2B SaaS & Business Application Development, 5+ years
- **Location:** Lahore, Punjab, Pakistan. Works remotely.
- **LinkedIn:** https://www.linkedin.com/in/muzairsaleem7/
- **Availability:** Open to full-time and contract product engineering roles with international teams, and to freelance engagements with businesses that need a SaaS product or internal tool built.
- **Email:** muzairsaleem7@gmail.com
- **Phone / WhatsApp:** +92 320 9865164
- **GitHub:** https://github.com/muzairsaleem7
- **Portfolio URL (this site):** https://muzairsaleem.vercel.app/
- Keep all contact details and links in a single `site.config.ts` so they can be changed in one place.

## 2. Positioning and tone

The site must read like an experienced engineer who owns products end to end, and must appeal to two audiences at once:

1. International companies hiring experienced software engineers.
2. Founders, business owners, and organizations looking for a reliable product engineering partner.

Communicate: end-to-end product engineering, strong full-stack capability, B2B software and SaaS development, business workflow understanding, application architecture, backend engineering, API development and integrations, database engineering, cloud deployment, production ownership, technical problem solving, and direct collaboration with clients and stakeholders.

Writing rules: concise, confident, business-oriented English. First person. No emojis. No keyword stuffing. No unsupported seniority claims, fake achievements, or invented numbers. Short sentences. Technical depth without overwhelming non-technical decision makers.

## 3. About (use this copy, lightly adapt for the web)

I'm a product engineer who builds B2B SaaS and business applications end to end: scoping the problem with the people who will use the software, designing the data model and architecture, shipping the front end and back end, and keeping it running in production.

Over the past five years I've worked on client-facing web applications at software houses in Lahore and, since 2024, directly with founders and business owners as an independent engineer. The common thread is turning a real business workflow into dependable software, without a hand-off between the person who understands the problem and the person who writes the code.

The measure I care about is business impact. I help companies grow through software: SaaS products their customers pay for, B2B lead generation and sales pipeline tools, customer portals, and internal systems that remove manual work and give teams reliable data.

What I work with:

- Front end: React, Next.js
- Back end: Node.js, Python, REST API development, third-party integrations
- Data: PostgreSQL, MongoDB, Supabase
- Delivery: cloud deployment, CI/CD, monitoring, and production support

## 4. Experience (verified, newest first)

**Product Engineer, Freelance | Self-Employed** — Jul 2024 to Present, Remote, Lahore
Independent product engineer building B2B SaaS and business applications end to end for clients, from scoping and architecture through delivery and production support.

- Design and ship full-stack web applications with React, Next.js, and Node.js, backed by PostgreSQL, MongoDB, and Supabase.
- Build REST APIs and third-party integrations that connect client systems and automate business workflows.
- Own deployment and production operations on cloud infrastructure, including CI/CD and monitoring.
- Work directly with founders and business owners to turn requirements into working software.

**Full Stack Software Engineer, Techvex** — Jan 2024 to Jun 2024, Full-time, On-site, Lahore
Full-stack engineer on client-facing business applications and SaaS products.

- Developed web applications with React, Next.js, and Node.js on PostgreSQL and MongoDB.
- Designed and implemented REST APIs and third-party integrations for business workflows.
- Handled deployments and production fixes, working closely with clients and project leads.

**Full Stack Developer, TEKXL** — Jul 2022 to Dec 2023, Full-time, On-site, Lahore
Full-stack developer on web applications and SaaS products delivered for business clients.

- Built and maintained React and Next.js front ends with Node.js back ends on PostgreSQL and MongoDB.
- Implemented REST APIs, authentication, and integrations with third-party services.
- Took features from requirements to production, including bug fixes, performance improvements, and deployments.
- Collaborated with designers, QA, and project managers across concurrent client projects.

**Software Engineer, Webiconz Technologies** — Nov 2021 to Jun 2022, Full-time, On-site, Lahore
First engineering role, working on web application features for client projects.

- Built front-end components and pages with React and JavaScript, and back-end endpoints with Node.js.
- Worked with PostgreSQL and MongoDB for data modelling and queries.
- Fixed bugs, reviewed code with senior engineers, and took features through testing to release.

## 5. Education (verified)

- **BS Computer Science**, University of Engineering and Technology (UET), Lahore, 2018 to 2022
- **Intermediate (ICS)**, Punjab Group of Colleges, 2016 to 2018

## 6. Skills (verified, grouped)

- **Front end:** React.js, Next.js, JavaScript
- **Back end:** Node.js, Express.js, REST APIs, API Development, Python, Django, FastAPI
- **Data:** PostgreSQL, MongoDB, Supabase, SQL, Database Design
- **Delivery and practice:** CI/CD, Git, Software Architecture, Agile Methodologies, Web Application Development, Full-Stack Development, Software Development, Software as a Service (SaaS), Product Development

Do not add technologies that aren't in this list.

## 7. Services (verified, matches my LinkedIn Services page)

Web Development, SaaS Development, Custom Software Development, Application Development, Database Development.

Service pitch: I build B2B SaaS products and business applications end to end for founders and business owners: scoping, architecture, front end, back end, integrations, and production support. Remote, with clear communication and dependable delivery. Pricing: contact for pricing.

## 8. Projects (verified, matches my LinkedIn Projects section)

Build a `Projects` section driven by a typed array in `content/projects.ts` with fields: `slug`, `title`, `summary`, `problem`, `solution`, `highlights[]`, `stack[]`, `role`, `context`, `links { live?, repo? }`, `image?`, `featured`. Use exactly the four projects below, in this order. Use the copy as written; you may split it into the fields but do not add features, client names, metrics, dates, or outcomes that aren't stated here.

There are no public links or screenshots for these projects. Leave `links` and `image` empty, and design the cards and detail pages so they look complete without them: use a stack-chip row and a simple abstract header in the banner palette instead of a screenshot. Do not render empty "Live demo" or "GitHub" buttons. List "add links or screenshots when available" once in `CONTENT-TODO.md`.

**1. Multi-Tenant B2B SaaS Platform** (featured)

- Slug: `multi-tenant-b2b-saas-platform`
- Context: Independent engagement, Product Engineer (Freelance)
- Role: Product engineer, end to end
- Summary: Subscription-based SaaS web application serving multiple business customers from a single codebase.
- Problem: Several business customers needed the same product with their data kept strictly separate, plus a way to onboard and manage customer accounts.
- Solution and highlights:
  - Multi-tenant data model with tenant isolation, role-based access control, and an admin console for onboarding and managing customer accounts.
  - Customer-facing dashboard and workflow screens in Next.js and React; REST API and background jobs in Node.js.
  - PostgreSQL on Supabase with row-level security, authentication, and file storage; subscription billing and transactional email through third-party integrations.
  - Deployed with CI/CD, environment-based configuration, logging, and monitoring; owned production support after launch.
- Stack: Next.js, React, Node.js, PostgreSQL, Supabase, REST APIs

**2. B2B Lead Generation & Sales Pipeline Tool** (featured)

- Slug: `b2b-lead-generation-sales-pipeline`
- Context: Independent engagement, Product Engineer (Freelance)
- Role: Product engineer, end to end
- Summary: Web application that helps a B2B business capture, qualify, and follow up on leads.
- Problem: Leads arrived from several sources with no single place to qualify, assign, and follow up on them, and no view of which sources converted.
- Solution and highlights:
  - Lead capture from website forms and landing pages with validation, de-duplication, and source tracking.
  - Pipeline board for sales stages, assignment, notes, and reminders, with role-based access for sales and management.
  - Integrations with a CRM and an email service through REST APIs; automated follow-up sequences and lead notifications.
  - Reporting views for lead volume, conversion by stage, and source performance so the business can see what is working.
- Stack: React, Node.js, Express.js, MongoDB, REST APIs

**3. Business Workflow Automation Platform** (featured)

- Slug: `business-workflow-automation-platform`
- Context: Full Stack Developer at TEKXL
- Role: Full-stack developer
- Summary: Internal web platform that replaced spreadsheet- and email-driven processes for a business client with structured, trackable workflows.
- Problem: Requests and approvals ran through spreadsheets and email, with no status tracking, no audit trail, and manual month-end reporting.
- Solution and highlights:
  - Configurable request and approval flows with status tracking, assignment, deadlines, and an audit trail of every change.
  - Role-based dashboards for staff, managers, and administrators; notifications by email and in-app.
  - Reporting and export for operational metrics, replacing manual month-end reconciliation.
  - React front end with a Node.js REST API on PostgreSQL; deployed with CI/CD and supported in production after release.
- Stack: React, Node.js, PostgreSQL, REST APIs, CI/CD

**4. Customer Portal with Third-Party Integrations**

- Slug: `customer-portal-integrations`
- Context: Full Stack Software Engineer at Techvex
- Role: Full-stack engineer
- Summary: Customer-facing web portal giving a business client's customers self-service access to their accounts, orders, and documents.
- Problem: Customers had to contact staff for routine account, order, and document requests, and the client's systems weren't connected to a customer-facing channel.
- Solution and highlights:
  - Secure login and account management with role-based permissions for customers and internal staff.
  - Order and request tracking, document downloads, and a support request flow with status updates.
  - Integrations with payment, email, and the client's back-office system through a Node.js REST API layer with retries and error handling.
  - React front end with Next.js; MongoDB for portal data; CI/CD deployments and production support.
- Stack: Next.js, React, Node.js, MongoDB, REST APIs

On the home page, show the three featured projects as cards. The `/projects` page lists all four, and each card links to `/projects/[slug]` with the summary, problem, highlights, stack, and context.

## 9. Design direction

Match the LinkedIn banner I already use:

- Dark navy gradient background: `#0b1526` → `#0f2240` → `#123a5e` (115deg)
- Accent gradient: `#38bdf8` (sky) → `#6366f1` (indigo)
- Eyebrow / accent text: `#7dd3fc`; body on dark: `#cbd5e1`; chips: `#e0f2fe` on `rgba(255,255,255,0.04)` with `rgba(125,211,252,0.45)` border, pill radius
- Subtle 44px grid overlay at 4.5% white, soft radial glows
- Font: Inter (or system UI stack). Headline weight 700, tight letter spacing.
- Light mode must also look intentional, not an afterthought. Provide a theme toggle with `prefers-color-scheme` default.
- Premium, clean, modern tech feel. No stock illustrations, no clip art, no excessive motion. Subtle entrance animations only, respecting `prefers-reduced-motion`.

Hero copy: eyebrow "Product Engineer", heading "Full-Stack SaaS & B2B Business Applications", sub "From scoping and architecture to production, end to end.", chips: React, Next.js, Node.js, PostgreSQL, Supabase. Two CTAs: "Work with me" (scrolls to contact) and "View experience".

Profile photo: PLACEHOLDER. Use an initials avatar component ("US") until I supply a photo at `public/images/profile.jpg`.

## 10. Site structure

Single-page landing with anchored sections, plus a few routes:

- `/` — Hero, About, Services, Experience (timeline), Projects, Skills, Education, Contact
- `/experience` — full detail of every role (same content as section 4)
- `/projects` and `/projects/[slug]` — list and detail pages driven by `content/projects.ts`
- `/resume` — printable one-page resume rendered from the same content files, with a "Download PDF" button (print stylesheet is acceptable; a generated PDF is a bonus)
- Sticky header with section links and the theme toggle; footer with LinkedIn link and copyright

All copy lives in `content/*.ts` files, never hard-coded in components, so I can edit text without touching JSX.

## 11. Technical requirements

- Next.js, latest stable, App Router, TypeScript strict, Tailwind CSS. Use `pnpm`.
- Server components by default; client components only where interaction requires it.
- Static generation for every page (`output` can stay default; no runtime data fetching).
- `next/image` for all images, `next/font` for Inter.
- SEO: per-page `metadata`, Open Graph and Twitter cards, a generated OG image for the home page using the banner palette, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema with name, jobTitle, address locality, and `sameAs` LinkedIn URL.
- Accessibility: semantic landmarks, visible focus states, color contrast AA on both themes, skip link, keyboard-navigable nav.
- Performance: Lighthouse 95+ on all four categories for the home page on mobile. No third-party scripts.
- Contact form: client-side validation, posts to a Next.js route handler that currently logs and returns success, with a clearly marked spot to plug in an email provider later. Also show a direct `mailto:` link from `site.config.ts`.
- Responsive from 360px to 1920px. Test at 375, 768, 1024, 1440.
- ESLint and Prettier configured; `pnpm lint`, `pnpm typecheck`, and `pnpm build` must pass clean.
- Deployment target: Vercel. Include `vercel.json` only if needed, and a README with run, build, and content-editing instructions.

## 12. How to work, and how to resume

- Start by creating `PLAN.md` listing every file you intend to create and every section, then `PROGRESS.md` with a checklist. Update `PROGRESS.md` after each completed item. If this session is interrupted, the next session must be able to read `PROGRESS.md` and `CONTENT-TODO.md` and continue without asking me what's done.
- Build in this order: project setup and theme tokens → content files → layout, header, footer → hero → about → services → experience → skills → education → projects → contact → resume page → SEO and OG image → accessibility and performance pass → README.
- After each major section, run `pnpm build` and fix anything broken before moving on.
- Don't ask me to approve wording or layout choices; use your judgment within the rules above. Ask only if something blocks you, and keep building everything else while you wait.
- When finished, give me: the dev command, a list of placeholders left in `CONTENT-TODO.md`, the Lighthouse scores you measured, and anything you'd recommend changing.
