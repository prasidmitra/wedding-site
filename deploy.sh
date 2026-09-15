#!/usr/bin/env bash
#
# Build the static site and deploy it to GitHub Pages.
#
# The site is served from https://prasidmitra.github.io/wedding-site/ — a
# project page, so everything is prefixed with /wedding-site (set via
# NEXT_PUBLIC_BASE_PATH, applied by next.config.mjs + src/lib/asset.ts).
#
# Usage:  ./deploy.sh
#
set -euo pipefail

cd "$(dirname "$0")"

REPO="prasidmitra/wedding-site"
BRANCH="gh-pages"

echo "▸ Building (base path: /wedding-site)..."
NEXT_PUBLIC_BASE_PATH=/wedding-site npm run build

echo "▸ Staging ./out into a temp repo..."
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
cp -a out/. "$tmpdir"/
touch "$tmpdir/.nojekyll"   # let GitHub serve the underscore-prefixed _next/ dir

(
  cd "$tmpdir"
  git init -q
  git -c user.name="Prasid Mitra" \
      -c user.email="prasidmitra@users.noreply.github.com" \
      commit -q -m "Deploy to GitHub Pages"
)

echo "▸ Pushing to $BRANCH..."
git -C "$tmpdir" push -f "https://github.com/$REPO.git" "HEAD:$BRANCH"

echo "✓ Deployed. Live at https://prasidmitra.github.io/wedding-site/"
