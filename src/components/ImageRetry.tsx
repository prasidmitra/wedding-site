"use client";

import { useEffect } from "react";

const MAX_RETRIES = 2;
const retries = new WeakMap<HTMLImageElement, number>();

/**
 * Retries images that fail to load (flaky mobile networks, truncated
 * responses) instead of leaving a broken tile until the user refreshes.
 *
 * The `error` event doesn't bubble, so we listen on the document root in the
 * capture phase and re-request with a cache-busting query param.
 */
export function ImageRetry() {
  useEffect(() => {
    const onError = (event: Event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;

      const attempt = retries.get(img) ?? 0;
      if (attempt >= MAX_RETRIES) return;
      retries.set(img, attempt + 1);

      const src = img.currentSrc || img.src;
      const url = new URL(src, window.location.href);
      url.searchParams.set("_r", `${Date.now()}-${attempt}`);

      window.setTimeout(() => {
        img.src = url.toString();
      }, 300 * (attempt + 1));
    };

    document.addEventListener("error", onError, true);
    return () => document.removeEventListener("error", onError, true);
  }, []);

  return null;
}
