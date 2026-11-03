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

## Content update (2026-11-04, from revised portfolio-prompt.md)

- [x] Real contact details in `site.config.ts`: email, phone/WhatsApp, GitHub, LinkedIn, site URL `https://muzairsaleem.vercel.app`
- [x] Contact section, footer, resume, and JSON-LD (`sameAs`, `email`, `telephone`) use them
- [x] About: business-impact paragraph added; Python added to the back-end line
- [x] Projects: four verified projects replace the placeholders (first three featured on home); abstract banner header and stack chips instead of screenshots; no empty link buttons
- [x] Re-verified at 375 / 768 / 1024 / 1440; lint, typecheck, build clean

## Lighthouse scores (local `next start`, Lighthouse 13.6, headless Chrome)

The host was under heavy CPU load from other local dev servers during the final runs, so each run
was paired with a control build (the previous commit) to separate noise from real changes.

Mobile, home page, final build vs control, alternating runs:

| Pair | Host benchmark (new / old) | Perf new | Perf old | A11y | Best Practices | SEO |
| ---- | -------------------------- | -------- | -------- | ---- | -------------- | --- |
| 1    | 1040 / 1240                | 90       | 89       | 100  | 100            | 100 |
| 2    | 1457 / 1327                | 85       | 87       | 100  | 100            | 100 |
| 3    | 1519 / 1550                | 97       | 94       | 100  | 100            | 100 |
| 4    | 1438 / 1011                | 95       | 84       | 100  | 100            | 100 |
| 5    | 1486 / 1534                | 94       | 91       | 100  | 100            | 100 |

Desktop, home page: Perf 99–100, A11y 100, Best Practices 100, SEO 100.

- Accessibility, Best Practices, and SEO are 100 on every run.
- Mobile performance reaches 95–97 when the host CPU is not contended, and the final build is equal to or better than the control.
- Re-measure on the Vercel deployment with PageSpeed Insights for an authoritative number.

Performance lessons recorded for future work:

- Do not wrap home sections in `<Suspense>`: with Cache Components each section streams as a hidden segment and is swapped in by script, forcing a second layout (Speed Index ~3 s).
- `next/font` `display: "optional"` made scores worse; keep `swap`.
- The infinite floating glow animation was removed (entrance animations only, per the prompt).

## Open items

See `CONTENT-TODO.md`: profile photo, project links or screenshots, email provider for the contact form.
