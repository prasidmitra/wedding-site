import { Reveal } from "@/components/Reveal";
import { AlpanaDivider } from "@/components/motifs";
import { story } from "@/data/story";

export function OurStory() {
  return (
    <section className="section story" id="story">
      <div className="container">
        <Reveal>
          <div className="story__inner">
            <AlpanaDivider className="story__divider" />
            <span className="kicker">{story.kicker}</span>
            <h2 className="display display--md">{story.title}</h2>
            <div className="story__prose">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
