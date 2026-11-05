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

The form posts to `src/app/api/contact/route.ts`, which validates the payload and sends it through [Resend](https://resend.com) when an API key is configured. No SDK is installed; the route calls Resend's REST API directly.

| Variable             | Required | Purpose                                                                                                                                    |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`     | Yes      | Turns on delivery.                                                                                                                         |
| `CONTACT_TO_EMAIL`   | No       | Inbox that receives messages. Defaults to the email in `site.config.ts`.                                                                   |
| `CONTACT_FROM_EMAIL` | No       | Sender on a domain verified in Resend. Defaults to `onboarding@resend.dev`, which only delivers to the Resend account owner's own address. |

Without `RESEND_API_KEY`, or if Resend rejects a message, the form never claims success. It tells the visitor the form can't send and offers a link that opens their email app with the message already filled in, addressed to the site email.

## Site structure

- `/` — Hero, About, Services, Experience, Projects, Skills, Education, Contact
- `/experience` — full detail of every role
- `/projects` and `/projects/[slug]` — list and detail pages
- `/resume` — printable one-page resume with a "Download PDF" button (uses the browser print dialog)
- `/api/contact` — route handler for the contact form
- `sitemap.xml`, `robots.txt`, generated Open Graph and Twitter images, favicon, JSON-LD `Person` schema

## Theme and motion

- Dark/light theme with a toggle in the header. Default follows `prefers-color-scheme`; the choice is stored in `localStorage`.
- Tokens live in `src/app/globals.css` (`:root` for dark, `[data-theme="light"]` for light).
- Entrance animations use a small IntersectionObserver component (`src/components/ui/Reveal.tsx`). They are disabled for `prefers-reduced-motion` and never hide content when JavaScript is unavailable.

## Deploy (Vercel)

1. Push this repository to GitHub.
2. Import the repo in Vercel. Framework preset: Next.js. Package manager: pnpm. No `vercel.json` is needed.
3. The production URL is `https://muzairsaleem.vercel.app` (set in `site.config.ts`). It drives canonical URLs, the sitemap, robots, Open Graph URLs, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` only to override it, for example on a custom domain.
4. Add `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) under Project Settings, Environment Variables, so the contact form delivers messages. See [Contact form](#contact-form).

## Project layout

```
content/                 all site copy (TypeScript)
site.config.ts           identity, links, contact
src/app/                 routes, metadata, OG image, sitemap, robots
src/components/layout/   Header, Footer, ThemeToggle, MobileNav, SkipLink
src/components/sections/ home page sections
src/components/ui/       Button, Card, Chip, Container, Section, Reveal, Avatar
src/components/...       experience, projects, resume, forms, seo
src/lib/                 dates, theme, cn
public/images/           profile.jpg and project screenshots (you add these)
```
