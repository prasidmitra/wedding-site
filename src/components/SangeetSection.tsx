import { Reveal } from "@/components/Reveal";
import { ConchOutline } from "@/components/motifs";
import { events } from "@/data/events";
import { assetPath } from "@/lib/asset";

export function SangeetSection() {
  const e = events.find((x) => x.id === "sangeet")!;

  return (
    <section className="section event event--sangeet" id={e.id}>
      <div className="event__bg" aria-hidden>
        <ConchOutline style={{ position: "absolute", right: "-2rem", top: "-2rem", width: "14rem", opacity: 0.12 }} />
      </div>

      <div className="container event__grid">
        <div className="event__copy">
          <Reveal>
            <span className="kicker">{e.note}</span>
            <h2 className="display display--lg">{e.title}</h2>
            <p className="event__line">{e.line}</p>
            <p>
              The night before the wedding, two families finally meet the dance
              floor. Come in something you can move in — and bring a song
              request.
            </p>
            <div className="event__meta">
              <span className="kicker">
                {e.kicker}
                <br />
                {e.venue}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="event__figure">
          <img
            src={assetPath("/illustrations/placeholders/sangeet-placeholder.svg")}
            alt="Illustrated Tanuja and Prasid at the Sangeet"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
