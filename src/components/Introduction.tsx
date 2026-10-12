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
          <span className="kicker">The couple</span>
          <h2 className="display display--lg">
            One love story.
            <br />
            A very Bengali
            <br />
            weekend.
          </h2>
          <p className="lead">
            For one December weekend, we&apos;ll bring the music, the food,
            the family, and a little bit of beautiful chaos to Kolkata. We&apos;re
            getting married, and it wouldn&apos;t feel like us without all of it.
          </p>
          <p className="intro__sig">{site.couple.joined}</p>
        </div>

        <div className="intro__figures" aria-label="Illustrated Tanuja and Prasid">
          <motion.img
            src={assetPath("/illustrations/character-reference/tanuja.webp")}
            alt="Illustrated Tanuja"
            className="intro__figure"
            width={464}
            height={1088}
            fetchPriority="high"
            {...figure(true)}
          />
          <motion.img
            src={assetPath("/illustrations/character-reference/prasid.webp")}
            alt="Illustrated Prasid"
            className="intro__figure intro__figure--right"
            width={391}
            height={1088}
            fetchPriority="high"
            {...figure(false)}
          />
        </div>
      </div>
    </section>
  );
}
