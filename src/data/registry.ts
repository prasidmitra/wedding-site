/* ============================================================
   Gift registry content
   ------------------------------------------------------------
   ✏️ EDIT ME — replace the placeholder payment links and the
   delivery address below with real details before sharing.
   ============================================================ */

export type PaymentMethod = {
  label: string;
  href: string;
  /** Small handle/identifier shown next to the method (e.g. "@handle"). */
  hint?: string;
  /** Query param that can carry the sender's note (e.g. "tn" for UPI). */
  noteParam?: string;
};

export type PaymentChannel = {
  id: "usd" | "inr";
  label: string;
  methods: PaymentMethod[];
};

export type RegistryGift =
  | {
      id: string;
      kind: "buy";
      kicker: string;
      title: string;
      blurb: string;
      buy: { label: string; href: string };
    }
  | {
      id: string;
      kind: "fund";
      kicker: string;
      title: string;
      blurb: string;
    };

export const registryIntro = {
  kicker: "Gift Registry",
  title: "Only if you'd like",
  lead: "Your presence on the day is the gift we want most. But if you'd like to send us off with something more, here are a few things that would make the first chapter of our marriage a little sweeter.",
};

// ✏️ EDIT ME — full shipping address for physical gifts.
export const deliveryAddress =
  "Tanuja & Prasid, 123 Example Lane, Kolkata, West Bengal 700000, India";

export const registryNote = {
  kicker: "With love",
  text: "Cards, cash, and in-person gifts are every bit as welcome as anything on this page. The only thing that isn't optional is you — so if a gift feels like too much, just bring your dancing shoes.",
};

export const registryComing = "More options coming very soon.";

export const registryComingSoon = {
  kicker: "Gift Registry",
  title: "Coming very soon",
  lead: "We're putting the finishing touches on our list of gifts. Check back soon — it'll be worth the wait.",
};

// ✏️ EDIT ME — your real Zelle / Venmo / UPI details (shared by every fund gift).
export const usdChannel: PaymentChannel = {
  id: "usd",
  label: "Send USD",
  methods: [
    { label: "Zelle", href: "mailto:your-zelle@example.com", hint: "your-zelle@example.com" },
    { label: "Venmo", href: "https://venmo.com/your-handle", hint: "@your-handle" },
  ],
};

export const inrChannel: PaymentChannel = {
  id: "inr",
  label: "Send INR",
  methods: [
    {
      label: "UPI",
      href: "upi://pay?pa=yourvpa%40bank&pn=Tanuja%20%26%20Prasid&cu=INR",
      hint: "yourvpa@bank",
      noteParam: "tn",
    },
  ],
};

export const gifts: RegistryGift[] = [
  {
    id: "nintendo-switch-2",
    kind: "buy",
    kicker: "Something to unwrap",
    title: "Nintendo Switch 2",
    blurb:
      "For rainy Kolkata afternoons, long flights, and settling — once and for all — who is better at Mario Kart.",
    buy: {
      label: "Buy it for us",
      href: "https://www.nintendo.com/us/store/products/nintendo-switch-2-mario-kart-world-bundle-128067/?slug=nintendo-switch-2-mario-kart-world-bundle-128067",
    },
  },
  {
    id: "honeymoon-fund",
    kind: "fund",
    kicker: "An adventure for two",
    title: "The Honeymoon Fund",
    blurb:
      "After the pheras and the goodbyes, a slow trip somewhere warm. Help us get there — and stay a few extra days.",
  },
  {
    id: "general-cash",
    kind: "fund",
    kicker: "Or simply, a little something",
    title: "A gift for whatever comes next",
    blurb:
      "A new home, a rainy-day fund, or a very good bottle of champagne. Whatever it goes toward, it'll be received with gratitude.",
  },
];
