# Tanuja & Prasid — Wedding Website

A polished, mobile-first wedding website for **Tanuja & Prasid** — 11–12 December 2026, Vedic Village, Kolkata.

Visual direction: **modern Bengali editorial luxury** — warm ivory, sindoor red, deep burgundy, muted antique gold, turmeric, sunset peach; large editorial typography; fine-line Bengali motifs (alpana, paan, marigold, conch); and illustrated versions of the couple. English text throughout.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript
- [Framer Motion](https://motion.dev) for scroll-driven motion
- Plain CSS with design tokens (no Tailwind) — see `src/app/globals.css`
- Cormorant Garamond (display) + Inter (UI), self-hosted via `next/font`

> Tailwind was deliberately omitted. The design is built around CSS custom properties and a bespoke editorial look; hand-written tokens kept the dependency surface small and gave finer control over the alpana/typography treatment. See `docs/DESIGN_SYSTEM.md`.

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
```

```bash
npm run build      # emits a fully static site to ./out
npm run preview    # serve ./out locally to check the build
npm run typecheck  # tsc --noEmit
```

**This is a static site.** `npm run dev` is only a development convenience. The production artifact is the `out/` folder — plain HTML, CSS, JS, fonts and images — which needs **no Node server**. Deploy `out/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3, nginx…) as-is.

## Deploying to GitHub Pages

The site is live at **https://prasidmitra.github.io/wedding-site/** (repo: `prasidmitra/wedding-site`, public). It is served from the `gh-pages` branch, which holds the contents of `out/`.

```bash
npm run deploy      # builds with the /wedding-site base path and pushes out/ to gh-pages
```

Because this is a GitHub *project* page (served under `/wedding-site/`, not a custom domain), all asset URLs are prefixed with `/wedding-site` via `NEXT_PUBLIC_BASE_PATH` — handled automatically by `next.config.mjs` (for `_next/` assets and fonts) and `src/lib/asset.ts` (for raw `/public` images referenced with `assetPath()`). Local dev (`npm run dev`) is unaffected: the prefix is empty without that env var.

`git push` of the source lives on `main`; the built site lives on `gh-pages` (deploy script force-pushes it).

When RSVP persistence and the admin dashboard arrive later, they'll be wired to a small backend (serverless function or form service); the frontend stays static.

## Routes

| Route      | Purpose                                                              |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Homepage — hero → couple → weekend → events → sunset sequence → venue → guide → RSVP teaser → gallery teaser → footer |
| `/rsvp`    | Dedicated RSVP form (also reachable from the header, hero and a floating control) |
| `/gallery` | Shared wedding album — placeholder for now                            |
| `/admin`   | Private dashboard — placeholder, auth/backend to be added later        |

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, global header + floating RSVP
│   ├── page.tsx          # homepage composition
│   ├── globals.css       # design tokens + all styles
│   ├── rsvp/page.tsx
│   ├── gallery/page.tsx
│   └── admin/page.tsx
├── components/           # Hero, sections, RSVP form, motifs, petals…
├── data/                 # events.ts, traditions.ts, site.ts (single source of truth)
└── lib/utils.ts
public/
├── illustrations/placeholders/   # aspect-correct SVG placeholders
├── motifs/                       # paan-leaf, alpana-*, marigold, petal, conch
└── photos/venue/
```

## Current state

The public-facing experience is fully built and responsive. Everything is content-editable from `src/data/` and `src/app/globals.css`.

- **Illustrations are placeholders** — elegant aspect-correct SVGs standing in for the AI-generated couple artwork. The exact replacement assets are documented in [`docs/ASSET_GUIDE.md`](docs/ASSET_GUIDE.md).
- **RSVP form is a shell** — the full UX is implemented (conditional fields, validation, success state) but not yet connected to a backend.
- **Admin & gallery** are placeholders for later phases.

## Roadmap

1. ✅ Design system, hero, full event narrative, sunset scroll sequence, venue, guide, RSVP shell, footer.
2. 🔜 Swap placeholder artwork for final illustrations (`docs/ASSET_GUIDE.md`).
3. 🔜 RSVP persistence + private `/admin` dashboard.
4. 🔜 Guest photo upload / moderation / mosaic gallery.
5. 🔜 Polish pass — device matrix, reduced-motion audit, Core Web Vitals.

## Principles

Elegant first. Bengali second. Playful third. Never kitschy.

When in doubt, choose breathing room over decoration and subtle motion over flash.
