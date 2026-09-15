import { Reveal } from "@/components/Reveal";
import { FloatingPetals } from "@/components/FloatingPetals";
import { events } from "@/data/events";
import { assetPath } from "@/lib/asset";

const EVENING_IDS = ["sundowner", "varmala", "wedding"] as const;

/**
 * Sundowner → Varmala → Wedding, laid out as three normal-flow sections inside
 * a single vertical gradient. As you scroll, the sky deepens from sunset peach
 * to burgundy while the copy scrolls with it, no pinned/stacked layers.
 *
 * The wedding block splits into two columns (text left, illustration right)
 * like the Sangeet/Haldi sections; the earlier two blocks stay centered.
 */
export function SunsetSequence() {
  const evening = EVENING_IDS.map((id) => events.find((e) => e.id === id)!);

  return (
    <section className="evening">
      {evening.map((e) => {
        if (e.id === "wedding") {
          return (
            <div key={e.id} id={e.id} className="evening__block evening__block--wedding">
              <div className="container evening__wedding-grid">
                <div className="evening__copy">
                  <Reveal>
                    <span className="kicker">{e.note}</span>
                    <h2 className="display display--xl">{e.title}</h2>
                    <p className="evening__line">{e.line}</p>
                    <div className="event__meta">
                      <span className="kicker">
                        {e.kicker}
                        <br />
                        {e.venue}
                      </span>
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={0.1} className="evening__scene evening__scene--wedding">
                  <img
                    src={assetPath("/illustrations/wedding/couple-wedding.webp")}
                    alt="Illustrated Tanuja and Prasid at the wedding"
                    width={552}
                    height={1088}
                    loading="lazy"
                  />
                </Reveal>
              </div>
            </div>
          );
        }

        return (
          <div key={e.id} id={e.id} className={`evening__block evening__block--${e.id}`}>
            <div className="container evening__copy">
              <Reveal>
                <span className="kicker">{e.note}</span>
                <h2 className="display display--xl">{e.title}</h2>
                <p className="evening__line">{e.line}</p>

                {e.id === "varmala" && (
                  <div className="evening__scene evening__scene--varmala">
                    <picture>
                      <source
                        media="(min-width: 720px)"
                        srcSet={assetPath("/illustrations/placeholders/varmala-desktop-placeholder.svg")}
                      />
                      <img
                        src={assetPath("/illustrations/placeholders/varmala-mobile-placeholder.svg")}
                        alt="Illustrated Tanuja and Prasid exchanging varmalas"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                )}

                <div className="event__meta">
                  <span className="kicker">
                    {e.kicker}
                    <br />
                    {e.venue}
                  </span>
                </div>
              </Reveal>
            </div>

            {e.id === "varmala" && <FloatingPetals color="#E8B94F" count={9} />}
          </div>
        );
      })}
    </section>
  );
}
