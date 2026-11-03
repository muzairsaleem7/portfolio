# PLAN.md — Uzair Saleem portfolio (Next.js)

Source of truth for scope: `portfolio-prompt.md`. Progress is tracked in `PROGRESS.md`; open content gaps in `CONTENT-TODO.md`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS 4, pnpm
- `next/font` Inter, `next/image`, static generation for every route
- ESLint (flat config, eslint-config-next) + Prettier (+ tailwind plugin)
- Smooth, subtle entrance animations (IntersectionObserver + CSS transitions), all gated by `prefers-reduced-motion`

## Files to create

### Root / config

- `package.json`, `pnpm-lock.yaml`, `.npmrc`
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`
- `eslint.config.mjs`, `.prettierrc`, `.prettierignore`, `.gitignore`
- `site.config.ts` — name, title, location, links (LinkedIn verified; email/phone/GitHub placeholders), site URL
- `README.md`, `PLAN.md`, `PROGRESS.md`, `CONTENT-TODO.md`

### Content (all copy lives here, never in JSX)

- `content/hero.ts` — eyebrow, heading, sub, chips, CTAs
- `content/about.ts` — about paragraphs + "What I work with" groups
- `content/services.ts` — five services + pitch + pricing line
- `content/experience.ts` — four roles, newest first
- `content/education.ts` — two entries
- `content/skills.ts` — four grouped skill lists (exact list from prompt)
- `content/projects.ts` — typed `Project[]` with three obvious placeholders
- `content/contact.ts` — contact heading, intro, availability line
- `content/nav.ts` — header/footer links
- `content/resume.ts` — summary line for the resume page

### App routes (`src/app`)

- `layout.tsx` — html/body, Inter, ThemeProvider script, Header, Footer, skip link, JSON-LD
- `page.tsx` — Hero, About, Services, Experience, Projects, Skills, Education, Contact
- `globals.css` — theme tokens (dark/light), grid overlay, glows, animations, print styles
- `experience/page.tsx` — full detail of every role
- `projects/page.tsx` — list
- `projects/[slug]/page.tsx` — detail (generateStaticParams)
- `resume/page.tsx` — printable one-page resume + "Download PDF" (print) button
- `api/contact/route.ts` — validates, logs, returns success; marked spot for email provider
- `opengraph-image.tsx` — generated OG image using banner palette
- `sitemap.ts`, `robots.ts`, `not-found.tsx`

### Components (`src/components`)

- `layout/Header.tsx` (server) + `layout/MobileNav.tsx` (client) + `layout/ThemeToggle.tsx` (client)
- `layout/Footer.tsx`, `layout/SkipLink.tsx`
- `ui/Container.tsx`, `ui/Section.tsx`, `ui/SectionHeading.tsx`, `ui/Chip.tsx`, `ui/Button.tsx`, `ui/Card.tsx`
- `ui/Reveal.tsx` (client; IntersectionObserver entrance animation, reduced-motion aware)
- `ui/Avatar.tsx` (initials "US" until `public/images/profile.jpg` exists)
- `sections/Hero.tsx`, `About.tsx`, `Services.tsx`, `Experience.tsx` (timeline), `Projects.tsx`, `Skills.tsx`, `Education.tsx`, `Contact.tsx`
- `forms/ContactForm.tsx` (client; validation; posts to `/api/contact`)
- `resume/Resume.tsx`, `resume/PrintButton.tsx` (client)
- `seo/JsonLd.tsx`

### Lib

- `src/lib/theme.ts` — theme init script (inline, pre-hydration), toggle helpers
- `src/lib/dates.ts` — format "Jul 2024 – Present", duration
- `src/lib/slug.ts`

### Public

- `public/images/.gitkeep` (profile.jpg goes here), `public/favicon.ico` / `src/app/icon.tsx`

## Build order (from prompt §12)

1. Project setup and theme tokens
2. Content files
3. Layout, header, footer
4. Hero
5. About
6. Services
7. Experience (timeline + /experience)
8. Skills
9. Education
10. Projects (placeholders; /projects, /projects/[slug])
11. Contact (form + route handler)
12. Resume page
13. SEO: metadata, OG image, sitemap, robots, JSON-LD
14. Accessibility and performance pass (Lighthouse on mobile, 375/768/1024/1440 checks)
15. README

`pnpm build` runs after each major section.
