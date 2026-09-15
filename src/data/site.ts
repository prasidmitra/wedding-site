export const site = {
  couple: {
    firstNameA: "Tanuja",
    firstNameB: "Prasid",
    joined: "Tanuja & Prasid",
  },
  tagline: "are getting married",
  afterTagline: "We got married. It was chaos. Here's the evidence.",
  dates: {
    start: "11 December 2026",
    end: "12 December 2026",
    short: "11–12 December 2026",
    shortLabel: "11–12 DECEMBER 2026",
  },
  venue: {
    name: "Vedic Village",
    city: "Kolkata",
    full: "Vedic Village, Kolkata",
  },
  // Toggle to switch the homepage into "after the wedding" mode.
  mode: "before" as "before" | "after",
};

export const nav = [
  { label: "Our Wedding", href: "/#couple" },
  { label: "Events", href: "/#events" },
  { label: "Venue", href: "/#venue" },
  { label: "Guide", href: "/#guide" },
];

export const rsvpHref = "/rsvp";
