# Asset Guide

Final artwork is now in place for the **intro portraits, Sangeet, Haldi and Wedding** (transparent PNGs, wired into their components). What remains on **aspect-correct SVG placeholders** are the **Varmala** centrepiece and the **venue photos**. Final assets drop into the same paths with no code changes, the layout, responsive composition and animation are already built around the expected ratios.

> Note: final files are `.png`, not `.webp` (the table below was written before generation; treat the *paths* as authoritative and the extension as `.png`).

## Placeholder → final asset map

| Placeholder (in use)                                      | Final asset to generate                              | Ratio  | Background   | Used on            |
| --------------------------------------------------------- | ---------------------------------------------------- | ------ | ------------ | ------------------ |
| `illustrations/placeholders/intro-prasid.svg`             | `illustrations/character-reference/prasid-reference.webp` | 4:5 | transparent | Intro (left)  |
| `illustrations/placeholders/intro-tanuja.svg`             | `illustrations/character-reference/tanuja-reference.webp` | 4:5 | transparent | Intro (right) |
| `illustrations/placeholders/sangeet-placeholder.svg`      | `illustrations/sangeet/couple-sangeet.webp`          | 4:5    | transparent   | Sangeet            |
| `illustrations/placeholders/haldi-placeholder.svg`        | `illustrations/haldi/couple-haldi.webp`              | 4:5    | transparent   | Haldi              |
| `illustrations/placeholders/intro-*.svg` (reused, moved)  | `illustrations/varmala/couple-varmala-desktop.webp`  | 16:9   | scene         | Varmala (desktop)  |
| `illustrations/placeholders/intro-*.svg` (reused, moved)  | `illustrations/varmala/couple-varmala-mobile.webp`   | 4:5    | scene         | Varmala (mobile)   |
| `illustrations/placeholders/wedding-placeholder.svg`      | `illustrations/wedding/couple-wedding.webp`          | 4:5    | transparent   | Wedding            |
| `photos/venue/venue-placeholder.svg`                      | `photos/venue/venue-desktop.webp` (+ mobile variant) | 3:2    | full photo    | Venue              |
|                                                            | `photos/hero/hero-desktop.webp` / `hero-mobile.webp` | 16:9 / 4:5 | full photo | Hero (optional) |

## Recommended artwork folder

```
public/
├── illustrations/
│   ├── character-reference/   # prasid-reference, tanuja-reference, couple-style-reference
│   ├── sangeet/couple-sangeet.webp
│   ├── haldi/couple-haldi.webp
│   ├── varmala/couple-varmala-desktop.webp + couple-varmala-mobile.webp
│   ├── wedding/couple-wedding.webp
│   └── placeholders/          # current stand-ins
├── motifs/                    # paan-leaf, alpana-*, marigold, petal, conch (SVG)
└── photos/hero, couple, venue, events/
```

## Style reference (use verbatim in every prompt)

> Flat vector wedding illustration, matte finish, no gradients, no shading, no 3D, no photorealism, elegant clean linework, limited hex colour palette, premium Indian fashion editorial feeling.

**Always avoid:** Pixar, Disney, anime, chibi, 3D cartoon, children's-book character style, exaggerated eyes, caricature, plastic skin, generic stock-couple faces, gradients, drop shadows, photographic realism.

> ⚠️ Never write the word **"realistic"** in a prompt — it reliably triggers photorealistic output. Use **"flat, stylized, illustrated, not a photograph"** instead.

## Consistency workflow

1. Generate an approved **character reference** of the couple first (`couple-style-reference.webp`) using real photographs.
2. Reuse that reference for every event scene, never re-invent the couple per scene.
3. Keep characters on **transparent** backgrounds so the site can animate character, background, petals and type independently.

## Generation brief template

```
ARTWORK:              couple-haldi.webp
PURPOSE:              Foreground character illustration for the Haldi section.
USE ON:               Desktop + mobile.
SEPARATE MOBILE:      No.
ASPECT RATIO:         4:5.
BACKGROUND:           Transparent.
COMPOSITION:          Tanuja & Prasid seated/standing close together; full upper
                      bodies visible; 10–15% breathing room; nothing touching edges.
STYLE:                (use the style reference above)
COLOR DIRECTION:      Warm ivory, turmeric, marigold, compatible with site palette.
DO NOT INCLUDE:       Text, borders, background scenery, random motifs, watermarks.
EXPORT:               High-res transparent PNG/WebP source.
```

## When a scene needs mobile + desktop variants

Only the **Varmala/Sundowner** centrepiece (and any full-viewport scene) justifies two variants: the desktop composition is wide with the couple further apart; the mobile version is vertical with the couple closer together. Everything else shares one portrait asset.
