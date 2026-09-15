import type { Metadata } from "next";
import Link from "next/link";
import { RSVPForm } from "@/components/RSVPForm";

export const metadata: Metadata = {
  title: "RSVP — Tanuja & Prasid",
  description:
    "Let us know if you can join us for our wedding weekend at Vedic Village, Kolkata.",
};

export default function RsvpPage() {
  return (
    <main className="rsvp page">
      <div className="container page__inner">
        <header className="page__head">
          <Link href="/" className="page__back">
            ← Back to the wedding
          </Link>
          <span className="kicker">RSVP</span>
          <h1 className="display">Join us in Kolkata</h1>
          <p className="lead">
            The important part. A quick yes or no — it takes ten seconds.
          </p>
        </header>

        <RSVPForm />
      </div>
    </main>
  );
}
