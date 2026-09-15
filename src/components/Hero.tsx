import Link from "next/link";
import { AlpanaCircle } from "@/components/motifs";
import { rsvpHref, site } from "@/data/site";

/**
 * Hero is a server component — the entrance is a pure CSS animation, so the
 * content is visible without JavaScript and respects prefers-reduced-motion.
 */
function Fade({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div className="hero-fade" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__alpana" aria-hidden>
        <AlpanaCircle />
      </div>

      <div className="hero__content">
        <Fade>
          <div className="hero__dates">
            <span>{site.dates.shortLabel}</span>
            <span>{site.venue.city.toUpperCase()}</span>
          </div>
        </Fade>

        <Fade delay={0.12}>
          <h1 className="display display--xl hero__names">
            {site.couple.firstNameA}
            <span className="hero__amp">&amp;</span>
            {site.couple.firstNameB}
          </h1>
        </Fade>

        <Fade delay={0.24}>
          <p className="hero__sub">
            {site.mode === "before" ? site.tagline : "got married"}
          </p>
        </Fade>

        <Fade delay={0.32}>
          <div className="hero__rule" aria-hidden />
        </Fade>

        <Fade delay={0.38}>
          <p className="hero__venue">{site.venue.full.toUpperCase()}</p>
        </Fade>

        <Fade delay={0.48}>
          <div className="hero__cta">
            <Link href={rsvpHref} className="btn btn--solid">
              RSVP
            </Link>
          </div>
        </Fade>
      </div>

      <div className="scroll-indicator" aria-hidden>
        <span>Scroll</span>
        <span className="scroll-indicator__line" />
      </div>
    </section>
  );
}
