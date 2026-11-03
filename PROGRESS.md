# PROGRESS.md

Resume rule: read this file and `CONTENT-TODO.md`, continue at the first unchecked item. Run `pnpm build` after each section.

## Setup

- [x] pnpm available (installed globally via npm)
- [x] PLAN.md written
- [x] Next.js 16.4 + TS strict + Tailwind 4 scaffold in `C:\linkedin`
- [x] ESLint + Prettier configured; `pnpm lint`, `pnpm typecheck`, `pnpm build` scripts
- [x] Theme tokens in `globals.css` (dark + light), grid overlay, glows, reduced-motion rules
- [x] `site.config.ts`
- [x] Git repo initialised, remote `origin` = https://github.com/muzairsaleem7/portfolio.git, commits authored as muzairsaleem7

## Content

- [x] `content/hero.ts`
- [x] `content/about.ts`
- [x] `content/services.ts`
- [x] `content/experience.ts`
- [x] `content/education.ts`
- [x] `content/skills.ts`
- [x] `content/projects.ts` (3 placeholders)
- [x] `content/contact.ts`, `content/nav.ts`, `content/resume.ts`

## Layout

- [x] Root layout, Inter font, skip link, JSON-LD
- [x] Header (sticky, section links, theme toggle, mobile nav)
- [x] Footer (LinkedIn + GitHub + Resume + copyright)
- [x] Build passes

## Sections (home)

- [x] Hero
- [x] About
- [x] Services
- [x] Experience timeline
- [x] Skills
- [x] Education
- [x] Projects (placeholder cards)
- [x] Contact (form + mailto + route handler)
- [x] Build passes

## Routes

- [x] `/experience`
- [x] `/projects`, `/projects/[slug]`
- [x] `/resume` (+ print stylesheet, Download PDF button)
- [x] `/api/contact`
- [x] Build passes

## SEO

- [x] Per-page metadata, OG/Twitter
- [x] `opengraph-image.tsx` + `twitter-image.tsx` for home
- [x] `sitemap.ts`, `robots.ts`
- [x] JSON-LD Person

## Quality

- [ ] Visual check in browser, dark + light
- [ ] Responsive check at 375 / 768 / 1024 / 1440
- [ ] Accessibility pass (landmarks, focus, contrast, keyboard nav)
- [ ] Lighthouse mobile home page: Perf / A11y / Best Practices / SEO (record scores below)
- [x] `pnpm lint`, `pnpm typecheck`, `pnpm build` all clean (first full build)
- [ ] README.md
- [ ] Final commit pushed

## Lighthouse scores (mobile, home)

- Not measured yet.
