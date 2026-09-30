import { Reveal } from "@/components/Reveal";
import { VenueMap } from "@/components/VenueMap";
import { assetPath } from "@/lib/asset";

const cards = [
  {
    kicker: "Getting there",
    title: "Vedic Village",
    body: "A green pocket on the edge of Kolkata, about 30 minutes from the city centre. Find us on the map below.",
  },
  {
    kicker: "Arriving by air",
    title: "Airport & transport",
    body: "Netaji Subhas Chandra Bose Airport (CCU) is roughly 40 minutes away.",
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
              src={assetPath("/photos/venue/venue.webp")}
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

        <Reveal className="venue__map">
          <VenueMap />
        </Reveal>
      </div>
    </section>
  );
}
