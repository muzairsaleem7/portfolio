# CONTENT-TODO.md

Open content items. Everything else on the site is verified fact from `portfolio-prompt.md`.

## 1. Profile photo

- [ ] Drop a square photo at `public/images/profile.jpg` (recommended 800×800, JPEG). The avatar switches from the "US" initials badge to the photo automatically on the next build.

## 2. Projects

- [ ] Add project links or screenshots when available.

## 3. Contact form delivery — `src/app/api/contact/route.ts`

- [ ] The route handler validates and logs submissions, then returns success. Plug in an email provider at the marked `TODO(email provider)` block (Resend example included) and add the API key as an environment variable in Vercel.

## 4. Optional

- [ ] `links.other` in `site.config.ts` for an extra public link (Upwork, blog). Empty hides it.
- [ ] A real favicon if you prefer one over the generated "US" icon (`src/app/icon.tsx`).
