import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function GalleryTeaser() {
  return (
    <section className="section gallery">
      <div className="container">
        <Reveal>
          <div className="gallery__teaser">
            <span className="kicker">The Feed</span>
            <h2 className="display">You took a good photo? Prove it.</h2>
            <p className="gallery__qr">
              A shared wedding album is coming soon, every guest&apos;s photos,
              in one place.
            </p>
            <Link href="/gallery" className="btn btn--ghost">
              See the gallery
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
