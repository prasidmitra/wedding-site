export type Tradition = {
  id: string;
  name: string;
  /** A light, conversational explanation for guests unfamiliar with Bengali weddings. */
  description: string;
  /** Small visual tag (a motif name) rendered beside the card. */
  motif: string;
};

export const traditions: Tradition[] = [
  {
    id: "topor",
    name: "Topor",
    motif: "conch",
    description:
      "The groom arrives wearing a topor, a shola-pith crown so light it's held on by willpower and string. It means things are officially underway.",
  },
  {
    id: "shubho-drishti",
    name: "Shubho Drishti",
    motif: "paan",
    description:
      "The first look. The couple's eyes meet for the first time, over a veil of betel leaves, while everyone else holds their breath.",
  },
  {
    id: "saat-paak",
    name: "Saat Paak",
    motif: "alpana",
    description:
      "The bride circles the groom seven times, her face covered by a paan leaf, as the aunties sing. Seven rounds for seven lifetimes.",
  },
  {
    id: "mala-badal",
    name: "Mala Badal",
    motif: "marigold",
    description:
      "The exchange of flower garlands. Officially a ritual. Unofficially, a friendly contest to see who gets theirs over the other's head first.",
  },
  {
    id: "sindoor-daan",
    name: "Sindoor Daan",
    motif: "petal",
    description:
      "The groom parts the bride's hair and applies sindoor, vermilion. It's the single most photographed second of the entire evening.",
  },
  {
    id: "uludhwani",
    name: "Uludhwani",
    motif: "conch",
    description:
      "That sound you suddenly hear from all the Bengali aunties? Don't panic. Things are going exactly according to plan.",
  },
];
