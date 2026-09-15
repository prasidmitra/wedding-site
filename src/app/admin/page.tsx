import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin — Tanuja & Prasid",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="page">
      <div className="container page__inner">
        <header className="page__head">
          <Link href="/" className="page__back">
            ← Back to the wedding
          </Link>
          <span className="kicker">Private</span>
          <h1 className="display">Guest list, later</h1>
          <p className="lead">
            This area is reserved for the couple. Authentication and a private
            RSVP dashboard — confirmed, pending, declined, meals, rooms and
            pickups — will be added here before the wedding.
          </p>
        </header>

        <p className="form__note" style={{ color: "var(--text-faint)" }}>
          No guest information is exposed publicly. This page is a placeholder.
        </p>
      </div>
    </main>
  );
}
