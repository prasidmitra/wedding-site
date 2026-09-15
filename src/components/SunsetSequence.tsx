import { Reveal } from "@/components/Reveal";
import { FloatingPetals } from "@/components/FloatingPetals";
import { events } from "@/data/events";
import { assetPath } from "@/lib/asset";

const EVENING_IDS = ["sundowner", "varmala", "wedding"] as const;

/**
 * Sundowner → Varmala → Wedding, laid out as three normal-flow sections inside
 * a single vertical gradient. As you scroll, the sky deepens from sunset peach
 * to burgundy while the copy scrolls with it, no pinned/stacked layers.
 */
export function SunsetSequence() {
  const evening = EVENING_IDS.map((id) => events.find((e) => e.id === id)!);

  return (
    <section className="evening">
      {evening.map((e) => (
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

              {e.id === "wedding" && (
                <div className="evening__scene evening__scene--wedding">
                  <img
                    src={assetPath("/illustrations/placeholders/wedding-placeholder.svg")}
                    alt="Illustrated Tanuja and Prasid at the wedding"
                    loading="lazy"
                  />
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
      ))}
    </section>
  );
}
