# CONTENT-TODO.md

Open content items. Everything else on the site is verified fact from `portfolio-prompt.md`.

## 1. Profile photo

- [ ] Drop a square photo at `public/images/profile.jpg` (recommended 800×800, JPEG). The avatar switches from the "US" initials badge to the photo automatically on the next build.

## 2. Projects

- [ ] Add project links or screenshots when available.

## 3. Contact form delivery (optional): `CONTACT_ENDPOINT`

- [ ] The form works today by opening the visitor's email app with the message filled in. To receive messages without that step, create a free Formspree form for muzairsaleem7@gmail.com and add its URL as the repository variable `CONTACT_ENDPOINT` (Settings, Secrets and variables, Actions, Variables). See the README's Contact form section.

## 4. Optional

- [ ] `links.other` in `site.config.ts` for an extra public link (Upwork, blog). Empty hides it.
- [ ] A real favicon if you prefer one over the generated "US" icon (`src/app/icon.tsx`).
