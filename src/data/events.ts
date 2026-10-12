export type Event = {
  id: string;
  title: string;
  /** Uppercase date · time label for schedule rows and footers. */
  kicker: string;
  /** Short editorial note rendered above the event title. */
  note: string;
  date: string;
  time: string;
  venue: string;
  /** Longer descriptive line, the event's "more writing". */
  line: string;
};

export const events: Event[] = [
  {
    id: "sangeet",
    title: "Sangeet",
    kicker: "11 December · Evening",
    note: "An evening to let loose",
    date: "11 December 2026",
    time: "6 pm",
    venue: "Vedic Village, Kolkata",
    line: "Music, dance, dinner. And absolutely no sitting this one out.",
  },
  {
    id: "haldi",
    title: "Gaye Holud",
    kicker: "12 December · Morning",
    note: "A bright beginning",
    date: "12 December 2026",
    time: "9 am",
    venue: "Vedic Village, Kolkata",
    line: "A little yellow. Bring your shades (of color).",
  },
  {
    id: "varmala",
    title: "Varmala",
    kicker: "12 December · Sunset",
    note: "As the sun goes down…",
    date: "12 December 2026",
    time: "5 pm",
    venue: "Vedic Village, Kolkata",
    line: "A golden sky. Two garlands. A promise, long in the making.",
  },
  {
    id: "wedding",
    title: "The Wedding",
    kicker: "12 December · Evening",
    note: "And so, our next chapter",
    date: "12 December 2026",
    time: "6:30 pm",
    venue: "Vedic Village, Kolkata",
    line: "Surrounded by love, sealed with a promise. Join us for our Bengali wedding ceremony in your finest.",
  },
];

export const weekend = {
  kicker: "THE WEDDING WEEKEND",
  title: "Three moments, two days",
  description:
    "From the Sangeet to the Varmala, one continuous journey through a December weekend in Kolkata.",
};
