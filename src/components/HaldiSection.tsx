import { Reveal } from "@/components/Reveal";
import { Marigold } from "@/components/motifs";
import { events } from "@/data/events";
import { assetPath } from "@/lib/asset";

export function HaldiSection() {
  const e = events.find((x) => x.id === "haldi")!;

  return (
    <section className="section event event--haldi event--flip" id={e.id}>
      <div className="event__bg" aria-hidden>
        <Marigold style={{ position: "absolute", left: "-2rem", bottom: "-2rem", width: "15rem", opacity: 0.16 }} />
      </div>

      <div className="container event__grid">
        <div className="event__copy">
          <Reveal>
            <span className="kicker">{e.note}</span>
            <h2 className="display display--lg">{e.title}</h2>
            <p className="event__line">{e.line}</p>
            <p>
              Turmeric, marigolds, and a cheerful refusal to stay clean. This is
              the one where everyone ends up a little yellow, wear something
              you won&apos;t miss.
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
            src={assetPath("/illustrations/haldi/couple-haldi.png")}
            alt="Illustrated Tanuja and Prasid at the Haldi"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
