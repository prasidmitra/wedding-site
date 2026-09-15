# Content

All editable copy lives in `src/data/`. Event copy is in `src/data/events.ts`, the wedding guide in `src/data/traditions.ts`, and site-level strings in `src/data/site.ts`.

## Still to fill in (before launch)

| Item                     | Where                        | Status                              |
| ------------------------ | ---------------------------- | ----------------------------------- |
| Exact event start times  | `src/data/events.ts`         | Placeholder "Morning/Evening"       |
| Guest contact (phone/WhatsApp) | `VenueSection.tsx` → "Questions" card | Placeholder                 |
| RSVP deadline            | `RSVPForm.tsx` success note  | Currently "1 December 2026"         |
| Real venue map/directions | `VenueSection.tsx`          | Placeholder text                    |
| Domain / metadata URL    | `src/app/layout.tsx`         | `https://tanujaandprasid.wedding` (update) |
| After-the-wedding copy   | `src/data/site.ts` → `mode`  | Toggle `before` → `after`           |

## Event copy (current)

- **Sangeet** — 11 December · Evening — *Music · Dance · Dinner*
- **Haldi** — 12 December · Morning — *A little yellow. A lot of chaos.*
- **Sundowner** — 12 December · Sunset — *The evening begins with the sun still up.*
- **Varmala** — 12 December · Sunset — *as the sun goes down…*
- **The Wedding** — 12 December · Evening — *A Bengali ceremony under the evening sky.*

## Traditions guide

Topor, Shubho Drishti, Saat Paak, Mala Badal, Sindoor Daan, Uludhwani — light conversational explanations in `src/data/traditions.ts`.

## After-the-wedding mode

Flip `mode` in `src/data/site.ts` to `"after"` to swap the hero tagline from
*"are getting married"* to *"got married"*, then point the gallery teaser at the
live `/gallery` feed. Event info stays accessible but secondary.
