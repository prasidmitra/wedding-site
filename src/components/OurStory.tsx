import { Fragment } from "react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { AlpanaDivider } from "@/components/motifs";
import { story } from "@/data/story";
import { usPhotos } from "@/data/usPhotos";

export function OurStory() {
  return (
    <section className="section story" id="story">
      {/* Desktop: scattered, angled photos in the left/right gutters. */}
      <div className="story__scatter" aria-hidden="true">
        {usPhotos.map((p) => (
          <img
            key={p.src}
            className={`story__scatter-img story__scatter-img--${p.side}`}
            src={p.src}
            alt=""
            loading="lazy"
            style={
              {
                "--top": `${p.top}rem`,
                "--gap": `${p.gap}rem`,
                "--rot": `${p.angle}deg`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="container">
        <Reveal>
          <div className="story__inner">
            <AlpanaDivider className="story__divider" />
            <span className="kicker">{story.kicker}</span>
            <h2 className="display display--md">{story.title}</h2>
            <div className="story__prose">
              {story.blocks.map((block, i) => {
                const photos = usPhotos.filter((p) => p.block === i);
                return (
                  <Fragment key={i}>
                    {block.type === "bullets" ? (
                      <ul className="story__list">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{block.text}</p>
                    )}
                    {photos.length > 0 && (
                      <div className="story__photo-row">
                        {photos.map((p) => (
                          <img
                            key={p.src}
                            className="story__photo"
                            src={p.src}
                            alt={p.alt}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
