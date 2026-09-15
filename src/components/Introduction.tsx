"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { assetPath } from "@/lib/asset";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Introduction() {
  const reduce = useReducedMotion();

  const figure = (fromLeft: boolean) => ({
    initial: reduce ? false : { opacity: 0, x: fromLeft ? -48 : 48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 1.1, ease: EASE, delay: 0.1 },
  });

  return (
    <section className="section intro" id="couple">
      <div className="container intro__grid">
        <div className="intro__copy">
          <span className="kicker">The Couple</span>
          <h2 className="display display--lg">
            Two people,
            <br />
            one wedding
          </h2>
          <p className="lead">
            For one December weekend, everything we love about Kolkata — the
            music, the food, the chaos, the aunties — gathers in a single place.
            We&apos;d love you there.
          </p>
          <p className="intro__sig">— {site.couple.joined}</p>
        </div>

        <div className="intro__figures" aria-label="Illustrated Tanuja and Prasid">
          <motion.img
            src={assetPath("/illustrations/placeholders/intro-tanuja.svg")}
            alt="Illustrated Tanuja"
            className="intro__figure"
            loading="lazy"
            {...figure(true)}
          />
          <motion.img
            src={assetPath("/illustrations/placeholders/intro-prasid.svg")}
            alt="Illustrated Prasid"
            className="intro__figure intro__figure--right"
            loading="lazy"
            {...figure(false)}
          />
        </div>
      </div>
    </section>
  );
}
