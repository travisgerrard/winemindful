# WineMindful Web

Static marketing site powered by Next.js (App Router, TypeScript) and deploy-ready for Vercel.

## Getting started

```bash
cd web
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploying on Vercel

1. Push this `web` folder to your repo.
2. In the Vercel dashboard choose **New Project** → import the repo.
3. Set the root directory to `web`.
4. Add an environment variable `NEXT_PUBLIC_SITE_URL=https://winemindful.com`.
5. Leave the default build command (`npm run build`) and output (`.vercel/output` auto).
6. Click deploy.

## Replacing placeholder imagery

Screenshots live in `public/images/`. Swap each SVG for real PNG/JPEG exports from Xcode (or rename and update the paths in `app/page.tsx`):

- `app-overview-placeholder.svg`
- `daily-log-placeholder.svg`
- `widget-placeholder.svg`

Keep similar aspect ratios (roughly iPhone portrait) for best results.

The site favicon reuses the iOS app icon (`public/favicon.png`). Replace that file with an updated export if your icon changes.

## Future enhancements

- Add analytics (e.g., Vercel Insights or Plausible).
- Embed press kit / FAQ sections.
- Wire a newsletter form (Buttondown, ConvertKit, etc.).
- Build a logged-in companion with Next.js layouts + middleware if you ever expand beyond marketing.
