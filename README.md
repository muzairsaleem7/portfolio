# Uzair Saleem — portfolio

Personal portfolio for Uzair Saleem, Product Engineer and Full-Stack Software Engineer (Lahore, Pakistan).
Built with Next.js 16 (App Router), React 19, TypeScript (strict), and Tailwind CSS 4. Every page is statically generated.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build and check

```bash
pnpm lint       # ESLint (next/core-web-vitals + typescript)
pnpm typecheck  # tsc --noEmit
pnpm build      # production build (static)
pnpm start      # serve the production build
pnpm format     # Prettier (with Tailwind class sorting)
```

## Editing content

All copy lives in plain TypeScript files. You should never need to touch JSX to change text.

| What                                    | File                    |
| --------------------------------------- | ----------------------- |
| Name, title, location, links, contact   | `site.config.ts`        |
| Hero copy, chips, CTAs, quick facts     | `content/hero.ts`       |
| About paragraphs, stack, principles     | `content/about.ts`      |
| Services, pitch, process steps, pricing | `content/services.ts`   |
| Experience (roles, dates, highlights)   | `content/experience.ts` |
| Education                               | `content/education.ts`  |
| Skills (grouped)                        | `content/skills.ts`     |
| Projects (list + detail pages)          | `content/projects.ts`   |
| Contact section + form strings          | `content/contact.ts`    |
| Header / footer labels                  | `content/nav.ts`        |
| Resume summary + headings               | `content/resume.ts`     |

Open content items are tracked in `CONTENT-TODO.md`.

### Profile photo

Put a square image at `public/images/profile.jpg`. The avatar switches from the initials badge to the photo on the next build.

### Projects

Add or edit entries in `content/projects.ts`. Each project gets a card on the home page (if `featured`), a card on `/projects`, and a detail page at `/projects/<slug>`. Put screenshots under `public/images/projects/` and reference them in `image`.

### Contact form

The site is static (GitHub Pages), so there is no server route. `src/components/forms/ContactForm.tsx` validates in the browser, then:

- **With `NEXT_PUBLIC_CONTACT_ENDPOINT` set** (for example a [Formspree](https://formspree.io) form URL), it POSTs the message as JSON and shows a success message. If that fails, it offers the visitor's email app instead.
- **Without it**, "Send message" opens the visitor's email app with the message already written and addressed to the site email.

On GitHub, set the endpoint as a repository variable named `CONTACT_ENDPOINT` (Settings, Secrets and variables, Actions, Variables). The deploy workflow passes it to the build.

## Site structure

- `/` — Hero, About, Services, Experience, Projects, Skills, Education, Contact
- `/experience` — full detail of every role
- `/projects` and `/projects/[slug]` — list and detail pages
- `/resume` — printable one-page resume with a "Download PDF" button (uses the browser print dialog)
- `/api/contact` — route handler for the contact form
- `sitemap.xml`, `robots.txt`, generated Open Graph and Twitter images, favicon, JSON-LD `Person` schema

## Theme and motion

- Dark/light theme with a toggle in the header. Default follows `prefers-color-scheme`; the choice is stored in `localStorage`.
- Tokens live in `src/app/globals.css` (`:root` for dark, `[data-theme="light"]` for light). Dark mode uses neutral black and zinc grays; light mode keeps the navy banner palette. Sky and indigo are the accents in both.
- Icons come from `lucide-react` and render on the server, so they add no client JavaScript. Lucide v1 has no brand logos; GitHub, LinkedIn, and WhatsApp marks live in `src/components/ui/BrandIcons.tsx`.
- Motion is driven by GSAP from one client component, `src/components/ui/MotionController.tsx`, mounted in the root layout. Sections wrap content in `Reveal`, a server component that only adds `data-reveal`.
  - The hero animates with CSS only, so first paint never waits on JavaScript.
  - Anything on screen at load is revealed by an IntersectionObserver with a CSS transition.
  - GSAP and ScrollTrigger load on the visitor's first scroll, touch, pointer move, or key press. They then drive batched scroll reveals, the experience timeline line, a slow parallax on the background glows, the reading progress bar under the header, the active nav link, and a magnetic pull on primary buttons.
  - A cursor spotlight on hoverable cards is a CSS gradient positioned by one pointer listener.
  - `prefers-reduced-motion` shows everything immediately with no motion. Without JavaScript nothing is hidden. If GSAP fails to load, everything is revealed after 3 seconds.

## Deploy (GitHub Pages)

The site is a static export (`output: "export"` in `next.config.ts`), built and published by `.github/workflows/deploy.yml` on every push to `main`.

1. In the repository, open Settings, Pages, and set Source to **GitHub Actions**. On a free plan the repository must be public for Pages.
2. Push to `main`, or run the workflow by hand from the Actions tab.
3. The site is served at `https://muzairsaleem7.github.io/portfolio/`. That URL is set in `site.config.ts` and drives canonical URLs, the sitemap, robots, Open Graph, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` only to override it, for example on a custom domain.

How the sub-path works: the workflow reads the Pages base path (`/portfolio`) from `actions/configure-pages` and passes it to the build as `PAGES_BASE_PATH`. `next/link` adds it to links automatically; plain asset URLs (icon sprite, images) go through `assetPath()` in `site.config.ts`. Locally the base path is empty, so `pnpm dev` serves from `/`.

`pnpm build` runs three steps: build the icon sprite, `next build` into `out/`, then `scripts/flatten-segment-prefetch.mjs`, which copies Next.js's nested prefetch files to the flat names the client requests (a static host has no rewrites).

To preview the exported site locally, serve `out/` under `/portfolio` with a static server after building with `PAGES_BASE_PATH=/portfolio`.

## Project layout

```
content/                 all site copy (TypeScript)
site.config.ts           identity, links, contact
src/app/                 routes, metadata, OG image, sitemap, robots
src/components/layout/   Header, Footer, ThemeToggle, MobileNav, SkipLink
src/components/sections/ home page sections
src/components/ui/       Button, Card, Chip, Container, Section, Reveal, Avatar, IconTile, BrandIcons, MotionController
src/components/...       experience, projects, resume, forms, seo
src/lib/                 dates, theme, cn
public/images/           profile.jpg and project screenshots (you add these)
```
