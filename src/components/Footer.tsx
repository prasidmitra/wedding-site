import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__names">
          {site.couple.firstNameA}
          <span className="footer__amp"> &amp; </span>
          {site.couple.firstNameB}
        </p>
        <p className="footer__meta">
          {site.dates.shortLabel} · {site.venue.full.toUpperCase()}
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/rsvp" className="kicker" style={{ color: "rgba(247,240,228,0.7)" }}>
            RSVP
          </Link>
          <Link href="/gallery" className="kicker" style={{ color: "rgba(247,240,228,0.7)" }}>
            Gallery
          </Link>
        </div>
        <p className="footer__foot">
          With love, from Kolkata — 11–12 December 2026
        </p>
      </div>
    </footer>
  );
}
