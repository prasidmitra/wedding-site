import type { SVGProps } from "react";

/**
 * Decorative Bengali-inspired motifs as inline SVG.
 * They inherit `currentColor` so they can be tinted via CSS and
 * layered at low opacity. All are decorative — keep aria-hidden.
 */

type P = SVGProps<SVGSVGElement>;

export function PaanLeaf(props: P) {
  return (
    <svg viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <path d="M19 3 C27 7 33 17 31 27 C29 36 24 43 19 44 C12 45 5 36 5 26 C5 14 11 5 19 3 Z" strokeLinejoin="round" />
      <path d="M19 4 C20 13 20 24 19 43" strokeWidth="1" />
      <path d="M19 15 C14 17 11 21 11 26 M19 22 C15 23 12 26 12 31" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

export function AlpanaCircle(props: P) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden {...props}>
      <circle cx="48" cy="48" r="45" />
      <circle cx="48" cy="48" r="33" strokeDasharray="1.5 6" />
      <circle cx="48" cy="48" r="19" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = 48 + Math.cos(a) * 45;
        const y = 48 + Math.sin(a) * 45;
        return <circle key={i} cx={x} cy={y} r="1.6" fill="currentColor" stroke="none" />;
      })}
      <circle cx="48" cy="48" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AlpanaCorner(props: P) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden {...props}>
      <path d="M0 100 A100 100 0 0 1 100 0" />
      <path d="M0 72 A72 72 0 0 1 72 0" opacity="0.7" />
      <path d="M0 44 A44 44 0 0 1 44 0" opacity="0.5" />
      <circle cx="0" cy="0" r="2.5" fill="currentColor" stroke="none" transform="translate(100 100)" />
      <circle cx="72" cy="0" r="2" fill="currentColor" stroke="none" />
      <circle cx="0" cy="72" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AlpanaDivider(props: P) {
  return (
    <svg viewBox="0 0 240 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden {...props}>
      <path d="M6 12 H100" />
      <path d="M140 12 H234" />
      <path d="M120 3 C125 8 125 16 120 21 C115 16 115 8 120 3 Z" />
      <circle cx="120" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="108" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="132" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Marigold(props: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden {...props}>
      <circle cx="24" cy="24" r="5" />
      <circle cx="24" cy="10" r="6.5" />
      <circle cx="24" cy="38" r="6.5" />
      <circle cx="10" cy="24" r="6.5" />
      <circle cx="38" cy="24" r="6.5" />
      <circle cx="14.5" cy="14.5" r="6" />
      <circle cx="33.5" cy="14.5" r="6" />
      <circle cx="14.5" cy="33.5" r="6" />
      <circle cx="33.5" cy="33.5" r="6" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Petal(props: P) {
  return (
    <svg viewBox="0 0 24 30" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden {...props}>
      <path d="M12 2 C17 8 17 18 12 28 C7 18 7 8 12 2 Z" strokeLinejoin="round" />
      <path d="M12 6 C14 11 14 19 12 26" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

export function ConchOutline(props: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden {...props}>
      <path d="M10 26 C10 14 20 7 29 8 C37 9 40 16 38 22 C36 29 31 33 26 33 C21 33 17 30 17 26 C17 23 19 21 22 21 C24 21 25 22 25 24" strokeLinejoin="round" />
      <path d="M14 30 C12 36 15 41 22 42 C29 43 36 40 39 34" opacity="0.7" />
      <path d="M29 8 C30 13 28 16 24 18" opacity="0.6" />
    </svg>
  );
}
