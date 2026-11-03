# CONTENT-TODO.md

Placeholders that need real content. Everything else on the site is verified fact.

## 1. Contact details and links — `site.config.ts`

- [ ] `url` — deployed domain. Set `NEXT_PUBLIC_SITE_URL` in Vercel (or edit the fallback). Used for canonical URLs, sitemap, robots, Open Graph, and JSON-LD. Currently `https://example.com`.
- [ ] `contact.email` — public email. Empty hides the mailto links (hero/contact/resume).
- [ ] `contact.phone` — public phone, international format. Empty hides it.
- [ ] `links.other` — optional extra link (Upwork, blog). Empty hides it.
- [x] `links.github` — set to https://github.com/muzairsaleem7
- [x] `links.linkedin` — verified

## 2. Profile photo

- [ ] Drop a square photo at `public/images/profile.jpg` (recommended 800×800, JPEG). The avatar switches from the "US" initials badge to the photo automatically on the next build.

## 3. Projects — `content/projects.ts`

Three placeholder entries exist. Replace each with a real project (keep the `Project` type shape). Do not leave `[Placeholder]` text in `summary`; the site uses that prefix to show a "Placeholder" badge.

- [ ] Project placeholder 1 (`project-placeholder-1`)
- [ ] Project placeholder 2 (`project-placeholder-2`)
- [ ] Project placeholder 3 (`project-placeholder-3`)

Each entry needs: `title`, `summary`, `problem`, `solution`, `stack[]`, `role`, `links { live?, repo? }`, optional `image` (put files under `public/images/projects/`), `featured`.

## 4. Contact form delivery — `src/app/api/contact/route.ts`

- [ ] The route handler validates and logs submissions, then returns success. Plug in an email provider at the marked `TODO(email provider)` block (Resend example included) and add the API key as an environment variable in Vercel.

## 5. Optional

- [ ] A real `favicon.ico` / app icon if you prefer one over the generated "US" icon (`src/app/icon.tsx`).
- [ ] Project screenshots for the Open Graph images of project pages (currently project pages reuse the site-wide OG image).
