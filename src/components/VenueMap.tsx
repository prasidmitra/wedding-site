"use client";

import { useEffect, useRef, useState } from "react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s22.6066,88.5276!6i15";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=22.6066,88.5276";

/**
 * Lazy-loads the Google Maps embed only when it nears the viewport, so the
 * initial page load carries zero map payload. Until then a lightweight,
 * on-theme facade (a pin on a faint grid) stands in its place.
 */
export function VenueMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setLoaded(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loaded]);

  return (
    <div ref={ref}>
      {loaded ? (
        <iframe
          src={MAP_EMBED_SRC}
          title="Map to Vedic Village, Kolkata"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="venue__map-facade"
          onClick={() => setLoaded(true)}
          aria-label="Load interactive map of Vedic Village, Kolkata"
        >
          <svg
            className="venue__map-pin"
            viewBox="0 0 24 24"
            width="38"
            height="38"
            aria-hidden="true"
          >
            <path
              d="M12 2C7.6 2 4 5.6 4 10c0 5.4 8 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              fill="currentColor"
            />
          </svg>
          <span className="venue__map-facade-title">Vedic Village Spa Resort</span>
          <span className="venue__map-facade-hint">Tap to view the map</span>
        </button>
      )}
      <div className="venue__map-foot">
        <p>Vedic Village Spa Resort, Shikharpur, Rajarhat, Kolkata</p>
        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
          Get directions →
        </a>
      </div>
    </div>
  );
}
