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

Latest build (repeated chip, nav link, and button utilities moved to CSS component classes; home HTML 163 KB to 126 KB), mobile, home page, 10 consecutive runs on 2026-11-06, CPU benchmark index 1414–1613:

| Category       | Result                                               |
| -------------- | ---------------------------------------------------- |
| Performance    | 99, 97, 96, 95, 97, 96, 96, 97, 97, 96 (median 96.5) |
| Accessibility  | 100 on every run                                     |
| Best Practices | 100 on every run                                     |
| SEO            | 100 on every run                                     |

Desktop on the same build: 100 in all four categories.

TBT stayed at 200–260 ms on most runs; the smaller HTML did not move it measurably. It is React hydration plus the first cold layout, both framework-level. The batch passing every run reflects a quiet host as much as the change.

Earlier batch the same day, before the class change, 10 runs: 97, 97, 97, 96, 98, 85, 98, 97, 97, 97. The 85 was a host stall: CPU benchmark index 1292 and an unthrottled LCP of 1.36 s against 0.48 s on the next run.

Previous measurement (commit 25f2dba), 11 runs: 96, 95, 96, 95, 93, 96, 96, 98, 97, 97, 96 (median 96).

Typical metrics: FCP 1.0 s, LCP 1.0 s, TBT 170–260 ms, CLS 0, Speed Index 1.1–1.5 s.

Desktop, home page: Performance 100, Accessibility 100, Best Practices 100, SEO 100.

Measurement note: other local dev servers, and a busy LinkedIn tab in the debug Chrome window, can load this machine heavily. Close or blank other tabs before measuring. When the CPU benchmark index drops below about 1300, mobile performance falls to the mid 80s for every build, including older ones. Compare against a control build when numbers look off.

Performance lessons recorded for future work:

- Do not wrap home sections in `<Suspense>`: with Cache Components each section streams as a hidden segment and is swapped in by script, forcing a second layout.
- `next/font` `display: "optional"` made scores worse; keep `swap`.
- `experimental.inlineCss` made FCP slower (1.0 s to 1.2 s) because the HTML grows; keep the external stylesheet.
- The infinite floating glow animation was removed (entrance animations only, per the prompt).

## Contact form delivery (2026-11-06)

- [x] `/api/contact` sends through Resend's REST API when `RESEND_API_KEY` is set (`CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` optional). No new dependency.
- [x] Without a key, or when Resend fails, the route returns 503/502 with `fallback: "mailto"`. The form keeps the typed values and offers "Open it in your email app" with a prefilled email to the site address. It no longer reports success when nothing was delivered.
- [x] Honeypot is now also checked on the server.
- [x] Verified against `next start`: 503 fallback, 422 validation, 200 honeypot, 400 bad JSON; fallback message and mailto link checked in the browser.

## UI refresh: Lucide icons, GSAP motion, black and gray dark mode (2026-11-06)

Requested by the user: lucide-react icons, GSAP animations, an industry-standard UI that presents five years of experience, and black and gray shades in dark mode. Copy and facts are unchanged; no metrics were added.

- [x] Icons across the header, hero, section eyebrows, cards, timeline, projects, contact, footer, mobile menu, and subpages. Server-rendered, so no client JS cost.
- [x] Hero: availability badge with a pulsing dot, gradient accent on the headline, icon CTAs including Resume, labelled core stack, profile card with icon facts, "Currently" line, and social buttons.
- [x] Icon tiles on About, Services, Skills, and Education cards; experience timeline with icon nodes, a "Current" badge, and a line drawn on scroll; one icon per project in the banners.
- [x] GSAP motion (see README, Theme and motion). Loaded on first interaction so it stays out of the page-load window.
- [x] Dark mode switched from navy to neutral black and zinc grays; light mode unchanged apart from a darker heading gradient for contrast.
- [x] Verified at 375 and 1440 in both themes; no horizontal overflow; mobile menu, reveals, timeline draw, and active nav checked in the browser.
- [x] Fixed during the work: description-list markup (icons moved inside `dt`), light-theme gradient contrast, and a `/resume` prefetch from the hero link that added a long task during load.

Lighthouse after the refresh, mobile, home page, 10 runs, CPU benchmark index 1296–1548:

| Category       | Result                                             |
| -------------- | -------------------------------------------------- |
| Performance    | 94, 94, 92, 92, 94, 95, 95, 94, 95, 94 (median 94) |
| Accessibility  | 100 on every run                                   |
| Best Practices | 100 on every run                                   |
| SEO            | 100 on every run                                   |

Desktop: 100 in all four categories.

The refresh costs about 2 to 3 mobile points: the home page DOM grew from about 720 to about 1,180 elements (each icon is an inline SVG with child shapes), which adds layout and hydration time. Total Blocking Time is about 250–300 ms against about 200 ms before. Ways to win the points back, if the target matters more than the icon density: fewer decorative icons per card, or CSS-mask icons instead of inline SVG.

## Open items

See `CONTENT-TODO.md`: profile photo, project links or screenshots, `RESEND_API_KEY` in Vercel.
