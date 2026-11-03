# Build my portfolio website (Next.js)

You are building a personal portfolio website for me, Uzair Saleem, a Product Engineer and Full-Stack Software Engineer based in Lahore, Pakistan. Work in the current folder. Build it fully, not as a scaffold. Everything below is verified fact unless marked PLACEHOLDER. Do not invent projects, clients, metrics, testimonials, or logos. Where I've marked something as a placeholder, build the component with clearly marked sample content and list it in `CONTENT-TODO.md` so I can fill it in later.

## 1. Who I am (verified facts)

- **Name:** Uzair Saleem
- **Title:** Product Engineer | Full-Stack Software Engineer
- **Positioning line:** B2B SaaS & Business Application Development, 5+ years
- **Location:** Lahore, Punjab, Pakistan. Works remotely.
- **LinkedIn:** https://www.linkedin.com/in/muzairsaleem7/
- **Availability:** Open to full-time and contract product engineering roles with international teams, and to freelance engagements with businesses that need a SaaS product or internal tool built.
- **Email / phone / GitHub / other links:** PLACEHOLDER. Build the contact section with `mailto:` and link slots wired to a single `site.config.ts` so I can fill them in one place.

## 2. Positioning and tone

The site must read like an experienced engineer who owns products end to end, and must appeal to two audiences at once:

1. International companies hiring experienced software engineers.
2. Founders, business owners, and organizations looking for a reliable product engineering partner.

Communicate: end-to-end product engineering, strong full-stack capability, B2B software and SaaS development, business workflow understanding, application architecture, backend engineering, API development and integrations, database engineering, cloud deployment, production ownership, technical problem solving, and direct collaboration with clients and stakeholders.

Writing rules: concise, confident, business-oriented English. First person. No emojis. No keyword stuffing. No unsupported seniority claims, fake achievements, or invented numbers. Short sentences. Technical depth without overwhelming non-technical decision makers.

## 3. About (use this copy, lightly adapt for the web)

I'm a product engineer who builds B2B SaaS and business applications end to end: scoping the problem with the people who will use the software, designing the data model and architecture, shipping the front end and back end, and keeping it running in production.

Over the past five years I've worked on client-facing web applications at software houses in Lahore and, since 2024, directly with founders and business owners as an independent engineer. The common thread is turning a real business workflow into dependable software, without a hand-off between the person who understands the problem and the person who writes the code.

What I work with:

- Front end: React, Next.js
- Back end: Node.js, REST API development, third-party integrations
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

## 8. Projects: PLACEHOLDER

I haven't supplied project details yet. Build a `Projects` section driven by a typed array in `content/projects.ts` with fields: `title`, `summary`, `problem`, `solution`, `stack[]`, `role`, `links { live?, repo? }`, `image?`, `featured`. Seed it with exactly three entries whose titles are "Project placeholder 1/2/3" and whose text is obviously placeholder. Add them to `CONTENT-TODO.md`. Do not invent real-sounding project names.

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
- Build in this order: project setup and theme tokens → content files → layout, header, footer → hero → about → services → experience → skills → education → projects (placeholder) → contact → resume page → SEO and OG image → accessibility and performance pass → README.
- After each major section, run `pnpm build` and fix anything broken before moving on.
- Don't ask me to approve wording or layout choices; use your judgment within the rules above. Ask only if something blocks you, and keep building everything else while you wait.
- When finished, give me: the dev command, a list of placeholders left in `CONTENT-TODO.md`, the Lighthouse scores you measured, and anything you'd recommend changing.
