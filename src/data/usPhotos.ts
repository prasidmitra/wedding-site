import { assetPath } from "@/lib/asset";

/**
 * Couple photos scattered around the "Our Story" section.
 * Ordered chronologically (by capture date) so they follow the story.
 *
 * `block` is the index into `story.blocks` that the photo sits beside
 * (used for the small inline placement on mobile). `side` drives both the
 * mobile float side and the desktop gutter side; `angle`/`top`/`gap` only
 * affect the desktop scatter.
 */
export type UsPhoto = {
  src: string;
  alt: string;
  block: number;
  side: "left" | "right";
  /** Desktop scatter rotation, degrees. */
  angle: number;
  /** Desktop scatter vertical offset from the top of the section, in rem. */
  top: number;
  /** Desktop scatter gap from the text column, in rem. */
  gap: number;
};

export const usPhotos: UsPhoto[] = [
  {
    src: assetPath("/photos/us/us-01.webp"),
    alt: "Tanuja and Prasid, the early days",
    block: 1,
    side: "left",
    angle: -7,
    top: 8,
    gap: 4.8,
  },
  {
    src: assetPath("/photos/us/us-02.webp"),
    alt: "Tanuja and Prasid",
    block: 2,
    side: "right",
    angle: 5,
    top: 10,
    gap: 4.2,
  },
  {
    src: assetPath("/photos/us/us-03.webp"),
    alt: "Tanuja and Prasid on a trip",
    block: 4,
    side: "left",
    angle: -4,
    top: 33,
    gap: 5,
  },
  {
    src: assetPath("/photos/us/us-04.webp"),
    alt: "Tanuja and Prasid",
    block: 5,
    side: "right",
    angle: 6,
    top: 34,
    gap: 4.4,
  },
  {
    src: assetPath("/photos/us/us-05.webp"),
    alt: "Tanuja and Prasid",
    block: 5,
    side: "left",
    angle: -6,
    top: 57,
    gap: 4.6,
  },
  {
    src: assetPath("/photos/us/us-06.webp"),
    alt: "Tanuja and Prasid in Seattle",
    block: 6,
    side: "right",
    angle: 4,
    top: 56,
    gap: 4.2,
  },
  {
    src: assetPath("/photos/us/us-07.webp"),
    alt: "Tanuja and Prasid, the proposal",
    block: 7,
    side: "left",
    angle: -5,
    top: 77,
    gap: 5,
  },
  {
    src: assetPath("/photos/us/us-08.webp"),
    alt: "Tanuja and Prasid",
    block: 8,
    side: "right",
    angle: 6,
    top: 78,
    gap: 4.4,
  },
];
