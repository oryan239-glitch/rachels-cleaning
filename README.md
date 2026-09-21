# Rachel's Cleaning and Home Watch Services

Premium Astro 4 static marketing site for **Rachel's Cleaning and Home Watch Services** (Fort Myers / San Carlos Park, FL).

## Stack

- GitHub + **Astro 4** + TypeScript
- Static output (`dist/`) → **Cloudflare Pages** (production) / **GitHub Pages** preview
- Typography: Fraunces + Plus Jakarta Sans
- Single source of truth: `src/data/site.ts`
- Real photos from the live site in `public/images/`

## Layout

Classic one-pager section flow:

1. Click-to-call bar + Header / nav
2. Hero
3. Why homeowners choose us (About)
4. Cleaning services
5. Stats + interior photo feature
6. FAQ
7. Testimonials
8. Contact + quote form
9. Footer

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

Production files land in `dist/`.

For GitHub Pages preview builds, use base `/rachels-cleaning`:

```bash
npx astro build --base /rachels-cleaning
```

## Edit business details

Update **`src/data/site.ts`** for:

- Business name / legal name
- Phone, email, address
- Nav labels, CTAs
- Services (with photo paths), FAQs, testimonials, stats, gallery
- Map embed URL
- Hero / OG image paths

Rebuild after changes (`npm run build`).

## Cloudflare Pages deploy

1. Connect this GitHub repo (`oryan239-glitch/rachels-cleaning`) in Cloudflare Pages.
2. Build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (repo root)
   - **Node version:** 18+ (20 recommended) — set env `NODE_VERSION=20` if needed
3. Save and deploy. Attach custom domain `rachelscleaning.net` when ready.

Every push to `main` triggers a new Pages deploy.

## Project structure

```
src/
  data/site.ts              # contact + content + image paths
  components/               # CallBar, Header, Hero, Services, FeatureStats, FAQ, etc.
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
public/images/              # real photos + wordmark
ASSETS.md                   # photo inventory
```

## Contact

- Phone: `(239) 345-0000`
- Email: `rachelscleaning123@gmail.com`
- Address: San Carlos Park, Fort Myers, FL 33967
