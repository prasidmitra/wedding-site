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
    time: "Evening",
    venue: "Vedic Village, Kolkata",
    line: "Music, dance, dinner. And absolutely no sitting this one out.",
  },
  {
    id: "haldi",
    title: "Haldi",
    kicker: "12 December · Morning",
    note: "A bright beginning",
    date: "12 December 2026",
    time: "Morning",
    venue: "Vedic Village, Kolkata",
    line: "A little yellow. A lot of chaos. Come for the ceremony, stay for the colour.",
  },
  {
    id: "sundowner",
    title: "Sundowner",
    kicker: "12 December · Sunset",
    note: "From golden hour to forever",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata",
    line: "A golden sky. Our favourite people. A little pause before forever.",
  },
  {
    id: "varmala",
    title: "Varmala",
    kicker: "12 December · Sunset",
    note: "As the sun goes down…",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata",
    line: "Two garlands. One beautiful beginning.",
  },
  {
    id: "wedding",
    title: "The Wedding",
    kicker: "12 December · Evening",
    note: "And so, our next chapter",
    date: "12 December 2026",
    time: "Evening",
    venue: "Vedic Village, Kolkata",
    line: "Surrounded by love, held by tradition. Join us for our Bengali wedding ceremony.",
  },
];

export const weekend = {
  kicker: "THE WEDDING WEEKEND",
  title: "Three moments, two days",
  description:
    "From the Sangeet to the Varmala, one continuous journey through a December weekend in Kolkata.",
};
