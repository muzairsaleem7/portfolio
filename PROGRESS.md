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
- [x] Header (sticky, section links at lg+, theme toggle, mobile nav below lg)
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

- [x] Visual check in browser, dark + light
- [x] Responsive check at 375 / 768 / 1024 / 1440 (no horizontal overflow at 375; tablet nav fixed)
- [x] Accessibility pass (landmarks, focus, contrast, keyboard nav; Lighthouse a11y 100)
- [x] Lighthouse measured (see below)
- [x] `pnpm lint`, `pnpm typecheck`, `pnpm build` all clean
- [x] README.md
- [x] Commits pushed to origin/main

## Lighthouse scores (local `next start`, Lighthouse 13.6, headless Chrome, 2026-11-04)

Mobile, home page, 3 runs:

| Run | Perf | A11y | Best Practices | SEO | LCP  | TBT    | CLS |
| --- | ---- | ---- | -------------- | --- | ---- | ------ | --- |
| 1   | 95   | 100  | 100            | 100 | 1.0s | 260 ms | 0   |
| 2   | 93   | 100  | 100            | 100 | 1.0s | 300 ms | 0   |
| 3   | 92   | 100  | 100            | 100 | 1.0s | 350 ms | 0   |

Desktop, home page: Perf 100, A11y 100, Best Practices 100, SEO 100 (LCP 0.3s, TBT 0 ms).

Mobile performance varies 92–95 run to run; the remaining cost is Total Blocking Time from the
React/Next.js client runtime (~230 KB transferred), not page content. Re-measure on the Vercel
deployment with PageSpeed Insights; local Windows headless runs are noisier and slower than
Google's lab environment.

## Open items

See `CONTENT-TODO.md` (site URL, email/phone, profile photo, three real projects, email provider for the contact form).
