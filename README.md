# Rachel's Cleaning Services

Polished Astro 4 static marketing site for **Rachel's Cleaning Services** (Fort Myers / San Carlos Park, FL).

Cleaning-only branding throughout the site.

## Stack

- Astro 4 + TypeScript
- Static output (`dist/`)
- Poppins via Google Fonts
- Single source of truth: `src/data/site.ts`

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

## Edit business details

Update **`src/data/site.ts`** for:

- Business name / legal name
- Phone, email, address
- Nav labels, CTAs
- Services, FAQs, testimonials
- Map embed URL

Rebuild after changes (`npm run build`).

## Cloudflare Pages deploy

1. Connect this GitHub repo in Cloudflare Pages.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18+ (20 recommended)
3. Save and deploy. Custom domain optional.

## Project structure

```
src/
  data/site.ts          # contact + content
  components/           # Header, Hero, Services, FAQ, etc.
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
public/images/          # hero, avatar, icons, wordmark
```

## Contact (from live reference)

- Phone: `(239) 345-0000`
- Email: `RACHELSCLEANING123@gmail.com`
- Address: San Carlos Park, Fort Myers, FL 33967
