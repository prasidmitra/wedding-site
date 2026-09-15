# Prasid & Tanuja --- Wedding Website Build Brief for Claude Code

## 1. Goal

Build a polished, highly visual wedding website for **Prasid & Tanuja**.

The wedding is at **Vedic Village, Kolkata**, on **11--12 December
2026**.

This should **not** look like a generic Indian wedding template. The
visual direction is:

> **Modern Bengali editorial luxury --- Bengali heritage expressed
> through visual motifs, warm colors, illustration, photography, and
> motion, combined with the restraint of a luxury fashion/editorial
> website.**

The website should feel personal, cinematic, playful in places, and
premium.

The site should be designed mobile-first but look exceptional on
desktop.

------------------------------------------------------------------------

## 2. Wedding Schedule

### 11 December 2026 --- Evening

**Sangeet**

-   Evening celebration
-   Music, dance, dinner
-   Vedic Village, Kolkata
-   Visual mood: nighttime, energetic, elegant

### 12 December 2026 --- Morning

**Haldi**

-   Morning Haldi ceremony
-   Vedic Village, Kolkata
-   Visual mood: bright, warm, playful, marigold/turmeric-inspired

### 12 December 2026 --- Evening

**Sundowner → Varmala → Wedding**

The evening should be treated as one continuous visual journey rather
than three disconnected events.

Sequence:

1.  Sundowner
2.  Varmala
3.  Bengali wedding ceremony

The website should visually transition from sunset into evening as the
visitor scrolls.

------------------------------------------------------------------------

# 3. Core Visual Theme

## Modern Bengali Editorial Wedding

Avoid the typical visual language of generic Indian wedding websites:

-   No excessive shiny gold
-   No heavy palace graphics
-   No generic mandalas everywhere
-   No cursive wedding fonts
-   No bright red-and-gold overload
-   No excessive floral decoration
-   No cheesy heart animations
-   No clutter

Instead use:

-   Warm ivory
-   Sindoor-inspired red
-   Deep burgundy
-   Muted antique gold
-   Turmeric/marigold tones
-   Sunset peach
-   Fine-line Bengali-inspired decorative artwork
-   Large editorial typography
-   Large cinematic photography
-   Lots of negative space
-   Restrained motion
-   Illustrated versions of Prasid and Tanuja

Bengali identity should primarily come through **visual motifs**, not
Bengali-language text.

**All website text should be in English.**

------------------------------------------------------------------------

# 4. Color System

Use CSS variables/design tokens rather than hardcoding colors throughout
components.

Suggested starting palette:

``` css
--ivory: #F7F0E4;
--paper: #FAF6ED;
--burgundy: #4A1115;
--sindoor: #8F1D21;
--sunset-peach: #F2C09B;
--sunset-terracotta: #B95D49;
--turmeric: #E8B94F;
--haldi-cream: #FAF1DD;
--antique-gold: #C49A52;
--charcoal: #27211E;
```

These are starting points. Adjust subtly if needed to create a cohesive
premium palette.

Gold should be restrained and muted, never metallic-looking or flashy.

------------------------------------------------------------------------

# 5. Typography

Only English typography is required.

Use exactly two primary font families.

## Display Font --- Cormorant Garamond

Use for:

-   Prasid & Tanuja
-   Major event names
-   Hero statements
-   Section titles
-   Large editorial copy
-   Important romantic/emotional moments

Preferred weights:

-   Light
-   Regular
-   Medium where necessary

Avoid heavy bold typography.

Examples:

``` text
Prasid & Tanuja

Sangeet

Haldi

Sundowner

Varmala

The Wedding
```

Headings should often be dramatically oversized.

------------------------------------------------------------------------

## UI / Body Font --- Inter

Use for:

-   Navigation
-   Dates
-   Times
-   Venue
-   Buttons
-   RSVP
-   Body copy
-   Labels
-   Captions
-   Practical information

For small labels, use uppercase with increased letter spacing.

Example:

``` text
12 DECEMBER · SUNSET
VEDIC VILLAGE · KOLKATA
VIEW DETAILS
RSVP
```

Do not introduce cursive/script wedding fonts.

------------------------------------------------------------------------

# 6. Homepage / Hero

The opening screen should be extremely restrained.

Possible composition:

``` text
11 — 12 DECEMBER 2026
KOLKATA


Prasid & Tanuja


are getting married


VEDIC VILLAGE
```

`Prasid & Tanuja` should dominate the composition using Cormorant
Garamond.

Supporting information should use small Inter typography.

Use either:

1.  Warm ivory textured background with very faint alpana-inspired
    linework, or
2.  A cinematic Vedic Village/couple photograph with elegant text
    overlay.

The initial hero should **not contain cartoon characters**.

The illustrated couple should be revealed after the visitor begins
scrolling.

Include a subtle scroll indicator.

Also include a prominent but elegant **RSVP** CTA on the hero so a guest can respond immediately without scrolling.

On mobile, RSVP should remain directly accessible from the top-level UI.

------------------------------------------------------------------------

# 7. Website Storytelling

The website should feel like the visitor is traveling through the
wedding weekend.

Recommended narrative:

``` text
Hero
↓
Introduction / Couple
↓
Wedding Weekend
↓
Sangeet
↓
Haldi
↓
Sundowner
↓
Varmala
↓
Wedding
↓
Venue / Travel
↓
RSVP
↓
Gallery / Wedding Feed
↓
Footer
```

Do not make every section look like a separate webpage.

Transitions should connect the entire experience.

------------------------------------------------------------------------

# 8. Illustrated Prasid & Tanuja

A major signature feature of the website will be **AI-generated
illustrated versions of Prasid and Tanuja**.

These illustrations will be generated separately using an
image-generation model and then added to the repository.

Claude Code should focus on:

-   positioning
-   responsive layout
-   animation
-   scroll interactions
-   compositing illustrations with backgrounds
-   foreground effects

Do not attempt to generate detailed couple artwork programmatically.

## Illustration Style

The desired look is:

> Editorial wedding illustration + subtle hand-painted
> gouache/watercolor + clean linework.

Avoid:

-   Pixar
-   Disney
-   chibi
-   anime
-   exaggerated cartoon proportions
-   childish avatars

The illustrations should clearly resemble the real couple while
remaining artistic.

------------------------------------------------------------------------

# 9. Couple Illustration Assets

Plan for these assets:

``` text
couple-sangeet.webp
couple-haldi.webp
couple-varmala.webp
couple-wedding.webp
```

Prefer transparent backgrounds whenever possible.

This allows the website to independently animate:

-   couple
-   background
-   flowers
-   petals
-   lights
-   decorative motifs

Before generating final event illustrations, create a consistent
**master character reference/style sheet** for Prasid and Tanuja so
their faces, proportions, hair, skin tones, and illustration style
remain consistent across scenes.

------------------------------------------------------------------------

# 10. Illustration Placement

## Introduction

After leaving the hero, illustrated Prasid and Tanuja can subtly enter
from opposite sides.

The animation should be understated.

Possible interaction:

-   Prasid enters slightly from left
-   Tanuja enters slightly from right
-   Both settle into the composition
-   Text appears between/around them

Do not make them bounce or behave like cartoon characters.

------------------------------------------------------------------------

## Sangeet

Use `couple-sangeet.webp`.

Visual environment:

-   Deep burgundy/night
-   Warm decorative lights
-   Small gold accents
-   Subtle movement
-   Elegant but energetic

Possible couple pose:

-   Dancing
-   One inviting the other onto the dance floor
-   Natural celebratory pose

------------------------------------------------------------------------

## Haldi

Use `couple-haldi.webp`.

Visual environment:

-   Warm cream
-   Turmeric
-   Marigolds
-   Morning light

This can be the most playful section.

Potential motion:

-   Slowly drifting marigold petals
-   Very subtle character movement
-   Decorative flowers entering during scroll

------------------------------------------------------------------------

# 11. Sundowner → Varmala → Wedding

This should be the **visual centerpiece of the website**.

Treat it as one long scroll-driven sequence.

Start with:

``` text
12 DECEMBER · SUNSET

Sundowner
```

Background begins warm and bright.

As the visitor scrolls:

``` text
ivory
→ peach
→ warm sunset orange
→ terracotta
→ sindoor red
→ deep burgundy
```

Then introduce:

``` text
Varmala
```

Use `couple-varmala.webp`.

Potential animation:

-   Prasid enters from left
-   Tanuja enters from right
-   Both are holding varmalas
-   They gradually move closer as the visitor scrolls
-   Varmalas may lift slightly
-   Foreground petals move independently
-   Background sunset slowly darkens

Avoid complicated character skeletal animation.

Use layered static artwork + CSS/Framer Motion transformations.

Then transition into:

``` text
The Wedding
```

The background becomes deep burgundy/evening.

Use `couple-wedding.webp`.

The transition from sunset into wedding should feel cinematic.

------------------------------------------------------------------------

# 12. Bengali-Inspired Visual Motifs

Create subtle decorative assets inspired by Bengali wedding aesthetics.

Potential motifs:

-   Paan/betel leaf
-   Alpana
-   Marigolds
-   Conch shell
-   Diya
-   Topor-inspired linework
-   Floral linework

These should **support the design rather than dominate it**.

The primary recurring motifs should probably be:

1.  Alpana linework
2.  Paan/betel leaf
3.  Marigold/petals

------------------------------------------------------------------------

# 13. SVG Strategy

Claude Code may create simple decorative SVGs programmatically.

Good candidates:

``` text
paan-leaf.svg
alpana-corner.svg
alpana-divider.svg
alpana-circle.svg
marigold.svg
petal.svg
conch-outline.svg
```

SVGs should:

-   use simple clean paths
-   inherit CSS colors where practical
-   scale cleanly
-   be lightweight
-   work against both light and dark backgrounds
-   be suitable for subtle animation

Do not overdecorate sections.

A faint oversized alpana can sometimes appear at only \~3--6% opacity.

------------------------------------------------------------------------

# 14. Event Section Design

## Sangeet

Palette:

-   Burgundy
-   Ivory
-   Antique gold

Typography:

``` text
11 DECEMBER · EVENING

Sangeet

MUSIC · DANCE · DINNER
VEDIC VILLAGE
```

Mood:

Elegant night celebration.

------------------------------------------------------------------------

## Haldi

Palette:

-   Haldi cream
-   Turmeric yellow
-   Warm ivory
-   Marigold orange accents

Typography example:

``` text
12 DECEMBER · MORNING

Haldi

A LITTLE YELLOW.
A LOT OF CHAOS.
```

Mood:

Bright, informal, playful.

------------------------------------------------------------------------

## Sundowner

Palette:

-   Ivory
-   Peach
-   Sunset orange
-   Terracotta

Large photography/illustration.

Use lots of breathing room.

------------------------------------------------------------------------

## Varmala

Make this one of the most visually memorable moments.

Minimal text.

Large couple illustration.

Potential text:

``` text
as the sun goes down...

Varmala
```

------------------------------------------------------------------------

## Wedding

Palette:

-   Sindoor
-   Deep burgundy
-   Ivory
-   Restrained antique gold

Typography:

``` text
12 DECEMBER · EVENING

The Wedding
```

This should feel more ceremonial and intimate than Sangeet.

------------------------------------------------------------------------

# 15. Venue Section

Create a dedicated section for:

**Vedic Village, Kolkata**

Use large landscape photography.

The venue section can deliberately introduce more natural greens to
contrast with the wedding palette.

Possible content:

-   Venue name
-   Map
-   Directions
-   Accommodation
-   Check-in information
-   Transport
-   Airport information
-   Guest contact information

Use floating ivory cards over large photography rather than a dense
information page.

------------------------------------------------------------------------

# 16. Wedding Guide

Optional but recommended.

Create a tasteful section explaining Bengali wedding traditions for
guests unfamiliar with them.

Possible cards:

-   Topor
-   Shubho Drishti
-   Saat Paak
-   Mala Badal / Varmala
-   Sindoor Daan
-   Uludhwani

All explanations should be in English.

Tone can be light and conversational rather than encyclopedic.

Example:

> **Uludhwani**
>
> That sound you suddenly hear from all the Bengali aunties? Don't
> panic. Things are going according to plan.

Keep this section visually simple and illustrated.

------------------------------------------------------------------------

# 17. RSVP

Build a proper custom RSVP experience.

Potential fields:

-   Guest name
-   Attending?
-   Number of guests
-   Sangeet attendance
-   Haldi attendance
-   Wedding attendance
-   Vegetarian / non-vegetarian
-   Accommodation required?
-   Arrival date/time
-   Flight/train information
-   Transport required?
-   Song request for Sangeet
-   Message for Prasid & Tanuja

The RSVP form should feel like part of the visual experience rather than
a generic form.

------------------------------------------------------------------------


# 17A. RSVP Must Always Be Easy to Reach

RSVP is one of the most important user actions on the website and must **never require scrolling through the full wedding story**.

Implement all of the following:

## Persistent RSVP access

Desktop:
- Keep a visible **RSVP** button in the main navigation at all times.
- The navigation may be transparent over the hero and become a solid/blurred surface after scrolling.
- RSVP should visually stand out from the other navigation items without looking like an advertisement.

Mobile:
- Keep an easy-to-reach RSVP action in the header/menu.
- Prefer a compact sticky/fixed RSVP button or clearly visible header action.
- Do not require opening multiple menu levels.

## Hero RSVP

The hero should include a clear RSVP call-to-action below the main wedding information.

Example:

```text
Prasid & Tanuja

11 — 12 DECEMBER 2026
VEDIC VILLAGE · KOLKATA

[ RSVP ]
```

This gives guests an immediate path to respond without exploring the rest of the site.

## Dedicated route

Use a dedicated route:

```text
/rsvp
```

Clicking RSVP should navigate directly to the RSVP experience.

Do not force guests to scroll to an RSVP section anchored at the bottom of the homepage.

A small homepage RSVP teaser may still exist near the bottom, but it is secondary.

## Optional floating RSVP control

Consider a tasteful fixed/floating RSVP control after the user leaves the hero.

Example behavior:

- Hidden or subtle while hero CTA is visible
- Appears once hero CTA scrolls out of view
- Fixed near top-right on desktop
- Compact bottom or header action on mobile
- Disappears while the user is already on `/rsvp`

Keep it elegant and unobtrusive.

## Navigation priority

Recommended top navigation:

```text
Our Wedding   Events   Venue   Guide                 RSVP
```

On mobile:

```text
Prasid & Tanuja                         RSVP   ☰
```

RSVP should remain directly visible even if the rest of the navigation collapses into a menu.

## RSVP UX principle

A guest who opens the wedding link **only to RSVP should be able to do so within one click from the first screen**.

Do not make RSVP dependent on:
- scrolling through event sections
- watching animations
- opening the wedding guide
- entering the gallery
- using a hidden hamburger menu

RSVP functionality and clarity take priority over decorative storytelling.


# 18. Private Admin Dashboard

Design the codebase so a private admin dashboard can be added.

Potential route:

``` text
/admin
```

Potential metrics:

``` text
Invited
Confirmed
Pending
Declined

Sangeet attendance
Haldi attendance
Wedding attendance

Vegetarian meals
Non-vegetarian meals

Rooms required
Airport pickups
Train pickups
```

Do not expose guest information publicly.

Authentication/backend implementation can be decided separately.

------------------------------------------------------------------------

# 19. Guest Photo Upload / Wedding Feed

Plan for a post-launch feature allowing guests to upload wedding photos.

Potential route:

``` text
/gallery
```

or

``` text
/live
```

Guests may scan QR codes at the venue.

Possible QR copy:

> You took a good photo? Prove it.

Guests can upload photos/videos.

Eventually approved content can appear in a responsive mosaic gallery.

Do not implement public unmoderated uploads without an
approval/moderation mechanism.

------------------------------------------------------------------------

# 20. After-the-Wedding Mode

Architect the homepage so its messaging can later change easily.

Before wedding:

``` text
We're getting married.
```

After wedding:

``` text
We got married.
It was chaos.
Here's the evidence.
```

Then emphasize the wedding gallery.

Keep event information accessible but secondary.

------------------------------------------------------------------------

# 21. Animation Principles

Motion is important, but it must remain elegant.

Use animation for:

-   scroll reveals
-   subtle parallax
-   couple illustration entrances
-   sunset progression
-   flower/petal movement
-   alpana line drawing
-   text transitions
-   section transitions

Avoid:

-   bouncing
-   excessive spring animation
-   confetti everywhere
-   constant motion
-   animation that interferes with reading
-   animation that makes the site feel like a children's website

Support:

``` css
@media (prefers-reduced-motion: reduce)
```

The experience must remain fully usable without motion.

------------------------------------------------------------------------

# 22. Suggested Technical Stack

Prefer a modern frontend stack.

Suggested:

``` text
Next.js
TypeScript
Tailwind CSS
Framer Motion / Motion
```

Alternative frameworks are acceptable if there is a strong reason.

Important priorities:

-   excellent mobile performance
-   responsive images
-   lazy loading
-   optimized fonts
-   semantic HTML
-   accessibility
-   SEO/social metadata
-   smooth but performant animation

Do not introduce unnecessary dependencies.

------------------------------------------------------------------------

# 23. Recommended Folder Structure

Use a structure similar to:

``` text
wedding/
├── public/
│   ├── illustrations/
│   │   ├── couple-sangeet.webp
│   │   ├── couple-haldi.webp
│   │   ├── couple-varmala.webp
│   │   ├── couple-wedding.webp
│   │   └── character-reference.webp
│   │
│   ├── motifs/
│   │   ├── paan-leaf.svg
│   │   ├── alpana-corner.svg
│   │   ├── alpana-divider.svg
│   │   ├── alpana-circle.svg
│   │   ├── marigold.svg
│   │   ├── petal.svg
│   │   └── conch-outline.svg
│   │
│   ├── photos/
│   │   ├── couple/
│   │   ├── venue/
│   │   └── events/
│   │
│   ├── video/
│   │   └── hero/
│   │
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── rsvp/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   └── admin/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── hero/
│   │   │   ├── Hero.tsx
│   │   │   └── ScrollIndicator.tsx
│   │   │
│   │   ├── events/
│   │   │   ├── WeddingWeekend.tsx
│   │   │   ├── SangeetSection.tsx
│   │   │   ├── HaldiSection.tsx
│   │   │   ├── SundownerSection.tsx
│   │   │   ├── VarmalaSection.tsx
│   │   │   └── WeddingSection.tsx
│   │   │
│   │   ├── illustrations/
│   │   │   ├── CoupleIllustration.tsx
│   │   │   ├── FloatingPetals.tsx
│   │   │   └── AlpanaBackground.tsx
│   │   │
│   │   ├── venue/
│   │   │   └── VenueSection.tsx
│   │   │
│   │   ├── guide/
│   │   │   ├── WeddingGuide.tsx
│   │   │   └── TraditionCard.tsx
│   │   │
│   │   ├── rsvp/
│   │   │   └── RSVPForm.tsx
│   │   │
│   │   └── gallery/
│   │       ├── GalleryGrid.tsx
│   │       └── PhotoUpload.tsx
│   │
│   ├── data/
│   │   ├── events.ts
│   │   ├── traditions.ts
│   │   └── site.ts
│   │
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   └── animations.css
│   │
│   └── types/
│       └── index.ts
│
├── docs/
│   ├── DESIGN_SYSTEM.md
│   ├── ASSET_GUIDE.md
│   └── CONTENT.md
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

Do not create unnecessary abstractions simply to match this exact tree.
Adjust it if the implementation benefits from a simpler structure.

------------------------------------------------------------------------

# 24. Data Should Be Separated From Components

Wedding information should not be scattered through JSX.

Keep event information in a central data file such as:

``` ts
export const events = [
  {
    id: "sangeet",
    title: "Sangeet",
    date: "11 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata"
  },
  {
    id: "haldi",
    title: "Haldi",
    date: "12 December 2026",
    time: "Morning",
    venue: "Vedic Village, Kolkata"
  },
  {
    id: "sundowner",
    title: "Sundowner",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata"
  },
  {
    id: "varmala",
    title: "Varmala",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata"
  },
  {
    id: "wedding",
    title: "The Wedding",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata"
  }
];
```

Exact times can be filled in later.

------------------------------------------------------------------------

# 25. Asset Creation Workflow

Do not block development because final images are unavailable.

Use placeholders with the **same expected aspect ratios**.

Recommended workflow:

### Phase 1 --- Build design system

Implement:

-   typography
-   colors
-   spacing
-   responsive layout
-   basic motifs
-   page structure

### Phase 2 --- Build static sections

Implement all major sections without complex motion.

### Phase 3 --- Generate/import couple illustrations

Replace placeholder assets with final AI artwork.

### Phase 4 --- Motion

Implement:

-   scroll reveals
-   illustration movement
-   sunset transition
-   petals
-   parallax
-   alpana animations

### Phase 5 --- RSVP/backend

Add RSVP persistence and private admin functionality.

### Phase 6 --- Gallery

Add guest photo upload/gallery when needed.

### Phase 7 --- Polish

Test:

-   iPhone
-   Android
-   desktop
-   tablet
-   reduced motion
-   slow network
-   image loading
-   accessibility
-   Core Web Vitals

------------------------------------------------------------------------

# 26. Asset Rules

Important:

-   Do not generate raster images for decorations that can be SVG.
-   Use SVG for simple motifs.
-   Use WebP/AVIF for large illustrations and photography where
    supported.
-   Keep transparent illustrations optimized.
-   Do not use enormous uncompressed PNGs.
-   Use Next/Image or equivalent optimization.
-   Do not animate huge raster backgrounds unnecessarily.
-   Lazy-load below-the-fold media.

------------------------------------------------------------------------

# 27. Responsive Design

The website will likely be opened primarily from phones via
WhatsApp/invitation links.

Mobile is therefore first-class.

On mobile:

-   Typography should remain dramatic but not overflow.
-   Couple illustrations should remain large enough to appreciate.
-   Scroll-driven animations should be simpler than desktop if
    necessary.
-   RSVP must be extremely easy to complete.
-   Navigation should remain minimal.
-   Event information must be immediately understandable.

Do not create a desktop experience that merely collapses awkwardly onto
mobile.

------------------------------------------------------------------------

# 28. Accessibility

Implement:

-   semantic headings
-   sufficient contrast
-   alt text
-   keyboard navigation
-   visible focus states
-   reduced-motion support
-   form labels
-   accessible validation
-   logical reading order

Decorative SVGs should generally be hidden from screen readers.

------------------------------------------------------------------------

# 29. Performance

The website should feel fast even though it is visual.

Targets:

-   minimize JS
-   optimize images
-   preload only essential hero assets
-   lazy-load event illustrations
-   avoid unnecessary client components
-   avoid layout shifts
-   keep animation GPU-friendly
-   prefer transforms and opacity
-   avoid expensive continuous scroll handlers

Use IntersectionObserver or animation-library primitives rather than
manually polling scroll position where possible.

------------------------------------------------------------------------

# 30. Design Rule for Claude

Whenever there is a choice between **adding another decorative element**
and **leaving breathing room**, choose breathing room.

Whenever there is a choice between **flashy animation** and **subtle
motion**, choose subtle motion.

Whenever there is a choice between **generic Indian wedding imagery**
and **specific Bengali-inspired details**, choose the Bengali detail.

Whenever there is a choice between **traditional wedding-template
aesthetics** and **modern editorial design**, choose modern editorial
design.

The site should feel:

> **Elegant first. Bengali second. Playful third. Never kitschy.**

------------------------------------------------------------------------

# 31. Initial Implementation Priority

For the first implementation, focus only on producing an exceptional
public-facing visual experience.

Priority order:

1.  Global design system
2.  Hero
3.  Event narrative
4.  Sangeet
5.  Haldi
6.  Sundowner/Varmala/Wedding scroll sequence
7.  Venue
8.  RSVP shell
9.  Wedding guide
10. Footer
11. Advanced animation
12. Backend/admin/gallery

Do not let admin/backend work delay the visual prototype.

------------------------------------------------------------------------

# 32. First Claude Code Task

Start by:

1.  Initialize the project.
2.  Set up Cormorant Garamond and Inter.
3.  Implement the design tokens.
4.  Create the folder structure.
5.  Build the homepage skeleton with placeholder imagery.
6.  Create simple SVG motif placeholders.
7.  Implement responsive sections for all wedding events.
8.  Keep animations minimal initially.
9.  Run the site and inspect mobile + desktop layouts.
10. Only after the static design feels premium, begin the more complex
    scroll animation work.

Before adding a new library, confirm that the functionality cannot be
handled cleanly by the existing stack.

The objective is not to maximize technical complexity.

The objective is to make **Prasid & Tanuja's wedding website feel
memorable, personal, beautiful, and unmistakably theirs.**

# 33. Mobile-First Artwork Strategy

Most guests are expected to open the website on a **phone**, often from a WhatsApp link.

The desktop site can be more cinematic and spacious, but mobile must be treated as the primary experience for usability and artwork composition.

Do not design the artwork system as desktop-first and then merely shrink it for mobile.

The correct approach is:

> **Reuse the same core artwork whenever possible, but recompose the section differently for mobile. Create separate mobile artwork only when the composition genuinely requires it.**

---

## 33.1 Character Art vs Scene Art

There are two different types of visual assets.

### A. Character Artwork

Examples:

```text
couple-sangeet.webp
couple-haldi.webp
couple-wedding.webp
```

These should ideally show Prasid and Tanuja with a **transparent background**.

They should contain enough visual breathing room around the bodies so the site can reposition them responsively.

The same character asset can usually be reused on:

- desktop
- tablet
- mobile

Claude Code should change:

- scale
- crop
- relative position
- overlap
- entrance direction
- surrounding decoration

rather than requesting a completely separate illustration for every screen size.

---

### B. Cinematic Scene Artwork

A large scene that depends heavily on landscape composition may need dedicated desktop and mobile versions.

The primary example is:

```text
Varmala / Sundowner
```

A very wide desktop composition may look bad on a tall phone screen.

For major cinematic scenes, separate variants are acceptable and recommended.

Example:

```text
couple-varmala-desktop.webp
couple-varmala-mobile.webp
```

The desktop version may:

- place Prasid and Tanuja farther apart
- include wider sunset scenery
- expose more venue atmosphere
- leave horizontal space for typography

The mobile version should:

- be vertically composed
- place the couple closer together
- minimize unnecessary horizontal environment
- preserve facial/detail visibility
- leave safe vertical areas for text

---

# 34. Artwork Variant Rules

Do **not** automatically generate two versions of every image.

Use the following default rules.

## One shared asset is normally enough for:

```text
Sangeet couple
Haldi couple
Wedding couple
Individual character portraits
Small decorative artwork
Transparent foreground illustrations
```

## Create mobile + desktop variants when:

- The composition is a major visual centerpiece.
- The artwork contains important background scenery.
- A landscape crop would destroy the subject on mobile.
- Typography must occupy different negative-space regions.
- Important subjects would become too small on a phone.
- The scene is intended to fill most or all of the viewport.

Likely candidate:

```text
Varmala / Sundowner
```

Potentially:

```text
Hero photography
Large venue artwork
Any final full-screen wedding scene
```

Only create extra variants when they produce a real design benefit.

---

# 35. Preferred Artwork Aspect Ratios

When generating reusable character illustrations, prefer relatively flexible portrait-oriented compositions.

Good starting ratios:

```text
4:5
3:4
```

These work well on mobile and can still be positioned inside larger desktop layouts.

For desktop cinematic backgrounds:

```text
16:9
3:2
```

For mobile cinematic scenes:

```text
4:5
3:4
9:16
```

Do not create a 16:9 image and assume it can always be cropped safely into 9:16.

---

# 36. Responsive Artwork Composition

Claude Code should **recompose**, not merely resize.

Example desktop Varmala composition:

```text
PRASID                          TANUJA

          Varmala

      wide sunset environment
```

Possible mobile composition:

```text
12 DECEMBER · SUNSET

Varmala

      TANUJA
       + 
      PRASID

[vertical sunset environment]
```

The same storytelling moment should feel intentionally designed in both formats.

---

# 37. Mobile Animation Strategy

Mobile animation should be simpler than desktop animation.

Desktop may include:

- longer parallax sequences
- characters entering from opposite sides
- wider lateral movement
- layered scenery
- extended scroll-controlled sunset progression

Mobile should prefer:

- short fades
- modest vertical movement
- subtle scale changes
- limited lateral movement
- fewer simultaneous animated layers
- shorter pinned-scroll sequences

Do not make users scroll excessively simply to finish an animation.

Mobile performance and readability are more important than animation complexity.

---

# 38. Mobile Varmala Interaction

The Varmala section is still the centerpiece on mobile, but it should be adapted.

Suggested behavior:

1. Sunset title appears.
2. Background gradually becomes warmer.
3. Prasid illustration appears.
4. Tanuja illustration appears.
5. They settle into a shared composition.
6. `Varmala` becomes prominent.
7. A subtle petal layer moves across the foreground.
8. Continued scrolling darkens the background into the wedding palette.
9. `The Wedding` appears.

Avoid complicated skeletal animation.

Do not attempt realistic animated body movement.

Use static transparent artwork with:

- transform
- opacity
- scale
- layer positioning

This will generally look more polished.

---

# 39. Recommended Artwork Folder Structure

Update the artwork structure to make responsive variants explicit.

```text
public/
├── illustrations/
│   ├── character-reference/
│   │   ├── prasid-reference.webp
│   │   ├── tanuja-reference.webp
│   │   └── couple-style-reference.webp
│   │
│   ├── sangeet/
│   │   └── couple-sangeet.webp
│   │
│   ├── haldi/
│   │   └── couple-haldi.webp
│   │
│   ├── varmala/
│   │   ├── couple-varmala-desktop.webp
│   │   └── couple-varmala-mobile.webp
│   │
│   ├── wedding/
│   │   └── couple-wedding.webp
│   │
│   └── placeholders/
│       ├── sangeet-placeholder.webp
│       ├── haldi-placeholder.webp
│       ├── varmala-desktop-placeholder.webp
│       ├── varmala-mobile-placeholder.webp
│       └── wedding-placeholder.webp
│
├── motifs/
│   ├── paan-leaf.svg
│   ├── alpana-corner.svg
│   ├── alpana-divider.svg
│   ├── alpana-circle.svg
│   ├── marigold.svg
│   ├── petal.svg
│   └── conch-outline.svg
│
└── photos/
    ├── hero/
    │   ├── hero-desktop.webp
    │   └── hero-mobile.webp
    ├── couple/
    ├── venue/
    └── events/
```

Do not create every file immediately. This is the expected organization as assets become available.

---

# 40. How Claude Should Help With Artwork Generation Later

The project brief should act as the source of truth.

When Prasid later asks questions such as:

```text
What artwork do I need next?
```

or:

```text
How should I generate the Haldi illustration?
```

or:

```text
Give me a prompt for the mobile Varmala artwork.
```

Claude should use this document and the current project state to answer.

Claude should NOT give generic image-generation advice.

It should inspect:

- which section is being built
- intended screen sizes
- available artwork
- current layout
- required negative space
- foreground/background layering
- color palette
- final rendering dimensions
- transparent-background requirement
- whether one shared asset or separate variants are needed

Then provide a concrete generation brief.

---

# 41. Artwork Generation Brief Format

When asked how to create an artwork, Claude should return guidance in roughly this structure:

```text
ARTWORK:
couple-haldi.webp

PURPOSE:
Foreground character illustration for the Haldi section.

USE ON:
Desktop + mobile.

SEPARATE MOBILE VERSION:
No.

RECOMMENDED ASPECT RATIO:
4:5.

BACKGROUND:
Transparent.

COMPOSITION:
Prasid and Tanuja seated/standing close together.
Keep full upper bodies visible.
Leave approximately 10–15% breathing room around them.
Avoid objects touching image edges.

WARDROBE:
[Ask Prasid for clothing details/photos if not already supplied.]

STYLE:
Editorial Indian wedding illustration.
Subtle gouache/watercolor texture.
Clean elegant linework.
Realistic facial resemblance.
Not Pixar, anime, chibi, or caricature.

COLOR DIRECTION:
Warm ivory, turmeric, marigold.
Must remain compatible with site palette.

DO NOT INCLUDE:
Text
Borders
Background scenery
Random decorative motifs
Watermarks

EXPORT:
High-resolution transparent PNG/WebP source.
```

Then Claude may provide a ready-to-use prompt for the chosen image-generation tool.

---

# 42. Artwork Prompt Rules

When writing image-generation prompts, Claude must preserve visual consistency across all illustrations.

Always reference the same core style:

> **Refined editorial wedding illustration, subtle hand-painted gouache/watercolor texture, elegant clean linework, realistic recognizable faces, sophisticated proportions, premium Indian fashion editorial feeling.**

Always explicitly avoid:

```text
Pixar
Disney
anime
chibi
3D cartoon
children's-book character style
exaggerated eyes
caricature
plastic skin
generic stock-couple faces
```

If reference photos of Prasid and Tanuja are available, instruct the image model to preserve:

- facial structure
- skin tone
- hairstyle
- body proportions
- distinguishing features

Do not invent outfit details if the actual outfits matter and have not yet been chosen.

Ask Prasid for the outfit/reference photos when necessary.

---

# 43. Character Consistency Workflow

Before generating all event artwork, create a reusable reference set.

Recommended sequence:

### Step 1 — Couple Reference

Use clear photographs of Prasid and Tanuja.

Create an approved illustration/reference that establishes:

- facial appearance
- skin tone
- hair
- proportions
- line style
- rendering style

### Step 2 — Style Reference

Save the approved result as:

```text
public/illustrations/character-reference/couple-style-reference.webp
```

### Step 3 — Event Artwork

Use that approved reference while generating:

```text
Sangeet
Haldi
Varmala
Wedding
```

Do not independently invent the couple again for every scene.

Consistency is more important than artistic novelty.

---

# 44. Transparent Asset Guidelines

For character foreground illustrations:

- Prefer transparent backgrounds.
- Avoid baked-in shadows unless intentional.
- Avoid including text inside the image.
- Avoid including alpana/marigolds directly in every character image.
- Keep decorative elements as separate layers whenever possible.

This allows Claude Code to independently animate and position:

```text
character
background
petals
marigolds
alpana
lighting
typography
```

It also makes responsive recomposition significantly easier.

---

# 45. Layered Scene Strategy

Where possible, build cinematic scenes from layers.

Example Varmala:

```text
Layer 1: sunset gradient / background image
Layer 2: distant Vedic Village-inspired environment
Layer 3: Prasid + Tanuja illustration
Layer 4: foreground foliage / flowers
Layer 5: animated petals
Layer 6: typography
```

This is preferable to generating one flattened image containing everything.

Benefits:

- easier mobile adaptation
- better animation
- easier color changes
- easier cropping
- smaller regeneration scope
- more control over typography

---

# 46. Artwork Generation Checklist

Before asking Prasid to generate any new artwork, Claude should decide:

- What exact section is this for?
- Is it foreground character art or a full scene?
- Does it need transparency?
- Can the same asset work on mobile and desktop?
- If not, why not?
- What aspect ratio is needed?
- Where will typography sit?
- What empty space must be preserved?
- What clothes should Prasid and Tanuja wear?
- What existing reference artwork must be reused?
- What colors should dominate?
- What should explicitly NOT appear?
- What output format/resolution is useful?

If outfit or appearance information is missing and materially affects the image, ask Prasid for reference photos/details before finalizing the generation prompt.

---

# 47. Mobile Artwork Quality Rules

On a phone, guests should still clearly see:

- faces
- outfits
- important gestures
- Varmala
- major decorative details

Do not scale a detailed desktop illustration down until the characters become tiny.

When necessary:

- crop tighter
- reduce scenery
- bring Prasid and Tanuja closer
- remove secondary decorative elements
- increase subject scale

Art direction should preserve the emotional focus on the couple.

---

# 48. Loading and Performance for Artwork

Because mobile is primary, artwork must remain performant.

Use:

- responsive image sources
- WebP/AVIF where appropriate
- lazy loading below the fold
- smaller mobile image variants where useful
- correct intrinsic dimensions
- optimized transparent assets

Do not send a very large desktop image to mobile if a significantly smaller mobile version is available.

For responsive raster assets, use `next/image` or equivalent with appropriate `sizes`.

Preload only assets necessary for the first screen.

---

# 49. Claude's Responsibility When Artwork Is Missing

Do not block implementation because artwork has not yet been generated.

If an image is missing:

1. Create/use a correctly sized placeholder.
2. Build the actual responsive layout.
3. Document the exact artwork requirement.
4. Continue implementing the website.
5. Tell Prasid what artwork should be generated next when asked.

The layout should establish the required artwork composition, rather than artwork dictating an accidental layout.

---

# 50. Mobile-First Design Rule

The final priority is:

> **Beautiful desktop experience, exceptional mobile experience.**

Most guests will encounter this site from their phones.

Therefore:

- RSVP must be one tap away.
- Event information must be immediately understandable.
- Artwork must remain visually meaningful on small screens.
- Motion must not slow down navigation.
- Typography must remain elegant and readable.
- Desktop can add cinematic richness, but mobile cannot feel like a reduced or compromised version of the website.
