/**
 * The "Our Story" section copy.
 * Blocks render in order — prose paragraphs plus an optional bullet list.
 */
export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] };

export const story: {
  kicker: string;
  title: string;
  blocks: StoryBlock[];
} = {
  kicker: "Our Story",
  title: "How we got here",
  blocks: [
    {
      type: "paragraph",
      text: "Seattle and Bangalore. That’s roughly 13,000 km. If you were to ask either of us what we felt about long-distance relationships a couple years ago, we’d probably say, “No, thanks!” Yet it’s odd, and surprising, how you’ll willingly sign up to do the hardest of things for the right person.",
    },
    {
      type: "paragraph",
      text: "It all started with a random friend request one day, 2 years ago (he says she sent it first, but she disagrees; it was definitely him who sent it first), with both of us checking each other out slyly. Prasid spent nights watching Tanuja’s salsa dance videos, giddy like a 15-year-old. Sure enough, pretty soon he started posting a suspiciously high number of Guitar reels, hoping she notices them (thanks to Zuck just this one time). She did, but neither of us could still manage a simple “hello” until Prasid’s friend finally had to intervene and wingman him!",
    },
    {
      type: "paragraph",
      text: "When we finally got talking, we loved it so much we couldn’t stop! Days and nights, as we spent more time on calls, we realised how similar we were.",
    },
    {
      type: "bullets",
      items: [
        "I love singing, and he loves playing music!",
        "I love travelling, and she loves planning them :P",
      ],
    },
    {
      type: "paragraph",
      text: "So, 13 thousand km away, a few weeks in, one day on a late-night video call, we decided to finally meet (and jam together on a trip to Goa).",
    },
    {
      type: "paragraph",
      text: "They say a trip will tell you everything you need to know about a person. Turns out Tanuja was moonlighting as a luxury business owner on the side (or she well could have been)! Not only did she know every in and out of a wholesome vacay experience, she was so warm, so welcoming, that Prasid felt right at home and knew immediately she was the one for him. But once back in Bangalore, it was those little conversations sitting on that one random lawn with a tiny hill, those walks to try new flavours of ice cream, and those laughs at obscure comedians that brought us closer.",
    },
    {
      type: "paragraph",
      text: "Prasid sure left feeling very warm on his trip to Bangalore, but Tanuja can’t say the same when she visited Seattle. Turns out, -10 degrees, and seventeen layers of jackets is not her idea of warmth (just because he skis, Prasid thinks the cold is amazing). The cold was a personal attack to the Bangalorean in her, and she tried her best to adjust as he took her to LA and Universal Studios (something he’d saved to do with someone special). She warmed up quickly (mostly to him) and there were a lot more photos of him picking her up for every photo, a lot of them working from home across each other, and a lot of stolen kisses in between daily stand-ups :)",
    },
    {
      type: "paragraph",
      text: "So, when he finally proposed to her on top of the Space Needle (Seattle knew it, so it was sunny for a change), Tanuja’s jaw dropped, but it was an easy yes! He is the one with 17 ideas, 90% of them disconnected from reality, and she is the one who brings him back to planet Earth (except when she becomes a baby herself). Apparently, some people thought the proposal video was staged. That’s the internet for you: even a genuine surprise needs a disclaimer these days. Let’s just say, Tanuja’s broken glasses took one for the team: they’re proof that her jaw (and her glasses) really did drop!",
    },
    {
      type: "paragraph",
      text: "The long distance and the hard days don’t seem so hard to us anymore. And it wouldn’t have been possible without our favourite people, our friends and our family. We’re celebrating, and we want you all there! There’ll be some kickass music, a lot of celebration of our Bengali culture, a little shaking of our hips, and 17 more ideas from Prasid, and Tanuja trying to keep him humble, mostly.",
    },
  ],
};
