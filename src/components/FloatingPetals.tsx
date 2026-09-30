"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Blossom, Petal } from "@/components/motifs";

type PetalSpec = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  shape: "petal" | "blossom";
  color: string;
};

/**
 * Deterministic, lightweight falling-petal layer: mostly the elongated `Petal`,
 * with an occasional four-petal `Blossom`, tinted from `colors` (assigned
 * pseudo-randomly but deterministically so SSR and hydration agree). Disabled
 * under reduced motion.
 */
export function FloatingPetals({
  colors = ["#E8B94F"],
  count = 8,
}: {
  colors?: string[];
  count?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const petals: PetalSpec[] = Array.from({ length: count }).map((_, i) => {
    const k = i * 37.7;
    const shape = Math.floor(k) % 4 === 0 ? "blossom" : "petal";
    return {
      left: (k * 13) % 96,
      size: shape === "blossom" ? 20 + ((k * 7) % 16) : 16 + ((k * 7) % 22),
      duration: 10 + ((k * 1.7) % 8),
      delay: (k * 1.3) % 6,
      sway: 8 + ((k * 5) % 14),
      shape,
      color: colors[Math.floor(k) % colors.length],
    };
  });

  return (
    <div className="evening__petals" aria-hidden>
      {petals.map((p, i) => (
        <motion.span
          key={i}
          style={{ position: "absolute", left: `${p.left}%`, top: "-6%", color: p.color }}
          initial={{ y: 0 }}
          animate={{ y: "106vh", x: [0, p.sway, -p.sway, 0], rotate: [0, 160, 320] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.shape === "blossom" ? (
            <Blossom style={{ width: p.size }} />
          ) : (
            <Petal style={{ width: p.size }} />
          )}
        </motion.span>
      ))}
    </div>
  );
}
