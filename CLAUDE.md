# CLAUDE.md

## Project

A polished, mobile-first wedding website for **Tanuja & Prasid** — 11–12 December 2026, Vedic Village, Kolkata.

Visual direction: **modern Bengali editorial luxury**. Warm ivory, sindoor red, deep burgundy, antique gold, turmeric, sunset peach; large editorial serif typography; fine-line Bengali motifs (alpana, paan, marigold, conch); illustrated (not photographed) versions of the couple. English text throughout.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- framer-motion for scroll reveals / motion
- Plain CSS with design tokens — **no Tailwind**. All styles live in `src/app/globals.css`.
- Static export: `output: "export"` → `./out` (plain HTML/CSS/JS/images, no Node server).

## Commands

```bash
npm run dev        # local dev at http://localhost:3000
npm run build      # static export to ./out
npm run preview    # serve ./out locally
npm run typecheck  # tsc --noEmit
npm run deploy     # build + force-push out/ to gh-pages (see below)
```

## Deploy model — read this first

- Served from the **`gh-pages` branch** (NOT GitHub Actions), custom domain **https://prasidandtanuja.xyz/** (`public/CNAME`).
- `npm run deploy` runs `./deploy.sh`: builds (empty basePath — site lives at domain root) then force-pushes `out/` to `gh-pages`.
- `git push` of source goes to **`main`**; the built site lives on **`gh-pages`**.
- **Do NOT run `npm run deploy` or `git push` unless the user explicitly asks.** Make edits, build/typecheck to verify, and stop there. The user wants to review locally before anything goes live. (This is a hard, user-set rule.)

## Source of truth

- **Content** — `src/data/` (`events.ts`, `traditions.ts`, `site.ts`). Edit copy there, not in components.
- **Design tokens + all CSS** — `src/app/globals.css`. Single place for colors, fonts, spacing, section styles.
- **Layout/meta/fonts** — `src/app/layout.tsx`.
- **Docs** — `docs/` (`DESIGN_SYSTEM.md`, `ASSET_GUIDE.md`, `CONTENT.md`) and this file.

## Typography (current)

Both families are serif (per user request):

- **Display** — Cormorant Garamond (weights 300/400/500 + italic), variable `--font-cormorant` → `--font-display`.
- **Body/UI** — EB Garamond (serif), variable `--font-ebgaramond` → `--font-body`. (Previously Inter — replaced to go fully serif.)

Loaded via `next/font`; fallback stack is `Georgia, "Times New Roman", serif`.

## Colors

```css
--ivory #F7F0E4 · --paper #FAF6ED · --burgundy #4A1115 · --burgundy-deep #30080C
--sindoor #8F1D21 · --peach #F2C09B · --terracotta #B95D49 · --turmeric #E8B94F
--haldi-cream #FAF1DD · --gold #C49A52 · --gold-soft #D9B87A · --charcoal #27211E · --ink #3A2E27
```

Semantic aliases (`--bg`, `--surface`, `--text`, `--text-soft`, `--line`, `--accent`) derive from the above.

## Section layout notes

- **Hero** — no background art (an alpana motif was added then removed; keep it clean).
- **Introduction** — two illustrated portraits in `.intro__figures`, right of the text on desktop; Prasid is rendered ~8% taller than Tanuja (height ratio in CSS).
- **Sangeet / Haldi** — `.event__grid` two-column (text left, image right ≥860px). `.event__figure img` uses `width: min(78vw, 26rem); height: min(72vh, 34rem); object-fit: contain`.
- **SunsetSequence** (`sundowner → varmala → wedding`) — sundowner and varmala are centered; **wedding** was restyled to a two-column grid like Sangeet (`.evening__wedding-grid`, text left, image right).

## Illustration status

**Final (transparent PNG, already wired):**

| Path | Used in |
| --- | --- |
| `illustrations/character-reference/tanuja.png` | Introduction (left) |
| `illustrations/character-reference/prasid.png` | Introduction (right) |
| `illustrations/sangeet/couple-sangeet.png` | Sangeet |
| `illustrations/haldi/couple-haldi.png` | Haldi |
| `illustrations/wedding/couple-wedding.png` | Wedding |

**Still placeholder SVG (generate later):** `varmala` (desktop 16:9 + mobile 4:5) and venue photos.

## Image-processing workflow (recurring task)

The user drops raw generated images (usually `public/<name>.png`) with a solid background and asks to "add" them. Process them like this:

1. **Remove the background** with Pillow (`python3 -m pip install --break-system-packages Pillow`):
   - Green screen → chroma key + despill.
   - Ivory/white → flood-fill from the border with threshold ~34–40.
2. **Crop** to the opaque bounding box.
3. Save to `public/illustrations/<event>/couple-<event>.png`.
4. **Wire** it into the component (replace the placeholder `assetPath("/illustrations/placeholders/...")`).
5. **Delete** the raw file.
6. Build to verify. **Do not deploy unless asked.**

Gotcha: the couple illustrations arrive **taller than 4:5** (e.g. haldi ≈1:2.33, wedding ≈1:1.97 — full-body, narrow). Do **not** force-crop to 4:5 (that cuts heads/feet). The layout already height-constrains via `object-fit: contain`, so leave the natural aspect.

## Illustration style (for generation prompts)

Flat vector, matte, **no gradients, no shading, no 3D, no photorealism**, limited hex palette. **Avoid the word "realistic"** — it triggers photorealistic output; write "flat, stylized, illustrated, not a photograph" instead. Attire per event is described in `ref_images/` and earlier prompts.

## Gotchas

- CSS specificity: `.event__copy p:not(.event__line):not(.kicker)` carries class-level specificity from its `:not()` clauses. Section overrides (e.g. Sangeet's light text on the dark burgundy ground) must include the same `:not()` clauses or the body text renders dark-on-dark. Fixed, but don't reintroduce the bug.
- `assetPath()` in `src/lib/asset.ts` prefixes `NEXT_PUBLIC_BASE_PATH`, which is unset in production (empty base path). Always reference assets through it.

## Principles

Elegant first. Bengali second. Playful third. Never kitschy. When in doubt, choose breathing room over decoration and subtle motion over flash.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
