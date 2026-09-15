const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a `/public` asset path with the deploy base path (e.g. GitHub Pages
 * sub-path). Empty in local dev, so `npm run dev` is unaffected.
 */
export function assetPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
