import { Reveal } from "@/components/Reveal";
import { events, weekend } from "@/data/events";

export function WeekendOverview() {
  const highlights = events.filter((e) => ["sangeet", "haldi", "wedding"].includes(e.id));

  return (
    <section className="section weekend" id="events">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="kicker">{weekend.kicker}</span>
            <h2 className="display display--md">{weekend.title}</h2>
            <p className="lead">{weekend.description}</p>
          </div>
        </Reveal>

        <div className="weekend__list">
          {highlights.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <a className="weekend__item" href={`#${e.id}`}>
                <span className="kicker">{e.kicker}</span>
                <h3 className="display">{e.title}</h3>
                <p>{e.line}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
