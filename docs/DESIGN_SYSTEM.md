# Design System

Single source of truth lives in `src/app/globals.css` (tokens) and `src/data/*` (content).

## Color tokens

```css
--ivory:      #F7F0E4;  /* primary ground */
--paper:      #FAF6ED;  /* raised surface */
--burgundy:   #4A1115;  /* deep evening / text on light */
--burgundy-deep: #30080C; /* Sangeet + footer night */
--sindoor:    #8F1D21;  /* accent, red */
--peach:      #F2C09B;  /* sunset start */
--terracotta: #B95D49;  /* sunset mid */
--turmeric:   #E8B94F;  /* haldi / marigold */
--haldi-cream:#FAF1DD;  /* haldi ground */
--gold:       #C49A52;  /* antique gold, muted, never metallic */
--gold-soft:  #D9B87A;
--charcoal:   #27211E;  /* text on light */
--ink:        #3A2E27;  /* warm body text */
```

Semantic aliases (`--bg`, `--surface`, `--text`, `--text-soft`, `--line`, `--accent`) are derived above so a section can restyle by re-declaring a handful of variables rather than touching every component.

## Typography

Two families, loaded via `next/font` and exposed as `--font-cormorant` / `--font-inter`.

| Role            | Family             | Notes                                        |
| --------------- | ------------------ | -------------------------------------------- |
| Display         | Cormorant Garamond | weights 300/400/500; italic for romance      |
| UI / body       | Inter              | small labels uppercase + `letter-spacing`    |

Fluid display scale via `clamp()`:

```css
--text-display-xl: clamp(3.25rem, 13vw, 10rem);  /* hero names        */
--text-display-lg: clamp(2.6rem,  8.5vw, 6.75rem); /* section titles  */
--text-display-md: clamp(2.1rem,  6vw,   4.5rem);
```

## Spacing & layout

- `--section-y` controls vertical rhythm (`clamp(5rem, 14vh, 9rem)`).
- `--gutter` side padding, `--maxw: 76rem` content width.
- `.container`, `.section`, `.section__head` are the only layout primitives.

## Motifs

Inline SVG in `src/components/motifs.tsx` (inherit `currentColor`), mirrored as standalone files in `public/motifs/`. Used at very low opacity (3–16%) so they support, never dominate. Recurring motifs: **alpana**, **paan leaf**, **marigold/petal**, with **conch** as a secondary accent.

## Motion

- Reveals: `Reveal` (fade + slight rise, `once`, respects reduced motion).
- Sunset sequence: `useScroll` + `useTransform` driving background color, text color, phase opacity, and couple x-position, layered static art moved with transforms, no skeletal animation.
- Petals: `FloatingPetals`, deterministic, `linear`, disabled under reduced motion.

Rules: transform/opacity only; no springs, no bounce; `@media (prefers-reduced-motion: reduce)` collapses everything to a static, fully usable layout.

## Section palette map

| Section   | Ground          | Text / accent            |
| --------- | --------------- | ------------------------ |
| Hero      | ivory + alpana  | charcoal / sindoor       |
| Intro     | paper           | charcoal                 |
| Weekend   | ivory           | charcoal / sindoor       |
| Sangeet   | burgundy-deep   | ivory / gold-soft        |
| Haldi     | haldi-cream     | charcoal / turmeric-dark |
| Sunset    | peach → burgundy (scroll) | charcoal → ivory |
| Venue     | paper           | charcoal (greens in photo) |
| Guide     | ivory           | charcoal / sindoor       |
| RSVP      | burgundy        | ivory / gold-soft        |
| Footer    | burgundy-deep   | ivory                    |
