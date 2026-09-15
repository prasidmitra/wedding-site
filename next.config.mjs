/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Emit a fully static site to ./out, no Node server needed to host it.
  output: "export",
  reactStrictMode: true,
  basePath,
  // Stop `next dev`/`next build` from rewriting CLAUDE.md with its agent rules.
  agentRules: false,
  images: {
    unoptimized: true,
  },
};

// When deployed under a sub-path (GitHub Pages project site), prefix static
// assets (fonts, JS chunks) too. Empty in local dev.
if (basePath) {
  nextConfig.assetPrefix = basePath;
}

export default nextConfig;
