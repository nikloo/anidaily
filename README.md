# AniDaily.net — Never Miss a Panel

Anime, Manga & TCG News powered by AI.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Select this repo → Deploy (zero config needed!)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding Real Ads (After AdSense Approval)

1. Open `src/components/AdSlot.js`
2. Replace placeholder with your AdSense `<ins>` tag
3. Add AdSense script to `src/app/layout.js` `<head>`

## Connecting AI Pipeline

1. Set up Make.com scenario (see Operations Manual)
2. Use WordPress REST API or create a Next.js API route
3. Articles publish to the CMS, pages auto-regenerate

## Structure

- `/src/app/page.js` — Homepage
- `/src/app/anime/page.js` — Anime category
- `/src/app/manga/page.js` — Manga category
- `/src/app/tcg/page.js` — TCG category (your blue ocean!)
- `/src/app/rankings/page.js` — Daily Power Rankings
- `/src/app/reviews/page.js` — Reviews
- `/src/app/[slug]/page.js` — Single article template
- `/src/components/AdSlot.js` — Ad placement component
