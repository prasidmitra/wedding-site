import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery, Tanuja & Prasid",
  description: "The shared wedding album, coming soon.",
};

export default function GalleryPage() {
  return (
    <main className="page">
      <div className="container page__inner">
        <header className="page__head">
          <Link href="/" className="page__back">
            ← Back to the wedding
          </Link>
          <span className="kicker">Gallery</span>
          <h1 className="display">The evidence, coming soon</h1>
          <p className="lead">
            After the wedding, this is where the chaos lives. Guests will be
            able to upload their photos from the weekend, every angle, every
            aunty, every dance floor moment, into one shared album.
          </p>
        </header>
      </div>
    </main>
  );
}
