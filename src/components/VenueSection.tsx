import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";

const cards = [
  {
    kicker: "Getting there",
    title: "Vedic Village",
    body: "A green pocket on the edge of Kolkata, about 30 minutes from the city centre. We'll share a pinned map and driving directions closer to the date.",
  },
  {
    kicker: "Staying over",
    title: "Accommodation",
    body: "Rooms are available on site for out-of-town guests. Mention it in your RSVP and we'll set one aside for you.",
  },
  {
    kicker: "Arriving by air",
    title: "Airport & transport",
    body: "Netaji Subhas Chandra Bose Airport (CCU) is roughly 40 minutes away. We can arrange a pickup — just note your flight in the RSVP.",
  },
  {
    kicker: "Questions",
    title: "Guest contact",
    body: "A family contact for the weekend will be listed here before the wedding. Until then, reach us directly through your invitation.",
  },
];

export function VenueSection() {
  return (
    <section className="section venue" id="venue">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="kicker">The Venue</span>
            <h2 className="display display--md">Vedic Village</h2>
            <p className="lead">
              Kolkata, with a little more sky. Everything happens in one place,
              so you can stay for the whole weekend.
            </p>
          </div>
        </Reveal>

        <div className="venue__grid">
          <Reveal className="venue__media">
            <img
              src={assetPath("/photos/venue/venue-placeholder.svg")}
              alt="Illustration of Vedic Village, Kolkata"
              loading="lazy"
            />
          </Reveal>

          <div className="venue__cards">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="venue__card">
                  <span className="kicker">{c.kicker}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
