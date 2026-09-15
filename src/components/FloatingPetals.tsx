"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Petal } from "@/components/motifs";

type PetalSpec = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
};

/** Deterministic, lightweight falling-petal layer. Disabled under reduced motion. */
export function FloatingPetals({
  color = "#E8B94F",
  count = 8,
}: {
  color?: string;
  count?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const petals: PetalSpec[] = Array.from({ length: count }).map((_, i) => {
    const k = i * 37.7;
    return {
      left: (k * 13) % 96,
      size: 16 + ((k * 7) % 22),
      duration: 10 + ((k * 1.7) % 8),
      delay: (k * 1.3) % 6,
      sway: 8 + ((k * 5) % 14),
    };
  });

  return (
    <div className="evening__petals" aria-hidden>
      {petals.map((p, i) => (
        <motion.span
          key={i}
          style={{ position: "absolute", left: `${p.left}%`, top: "-6%", color }}
          initial={{ y: 0 }}
          animate={{ y: "106vh", x: [0, p.sway, -p.sway, 0], rotate: [0, 160, 320] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Petal style={{ width: p.size }} />
        </motion.span>
      ))}
    </div>
  );
}
