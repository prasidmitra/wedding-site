import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { rsvpHref } from "@/data/site";

export function RsvpTeaser() {
  return (
    <section className="section rsvp" id="rsvp">
      <div className="container">
        <Reveal>
          <div className="rsvp-teaser">
            <span className="kicker">Kindly reply</span>
            <h2 className="display">Will you join us?</h2>
            <p className="lead" style={{ maxWidth: "34rem" }}>
              A quick yes or no — it takes ten seconds.
            </p>
            <Link href={rsvpHref} className="btn btn--ivory">
              RSVP
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
