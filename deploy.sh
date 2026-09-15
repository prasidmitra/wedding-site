#!/usr/bin/env bash
#
# Build the static site and deploy it to GitHub Pages.
#
# The site is served from https://prasidandtanuja.xyz/ (custom domain), so it
# is built WITHOUT a base path. The custom domain lives in public/CNAME, which
# Next.js copies into out/ during export so the gh-pages branch always carries
# it (GitHub uses that file to keep the domain bound across force-pushes).
#
# Usage:  ./deploy.sh
#
set -euo pipefail

cd "$(dirname "$0")"

REPO="prasidmitra/wedding-site"
BRANCH="gh-pages"
DOMAIN="prasidandtanuja.xyz"

echo "▸ Building (custom domain: $DOMAIN)..."
npm run build

echo "▸ Staging ./out into a temp repo..."
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
cp -a out/. "$tmpdir"/
touch "$tmpdir/.nojekyll"   # let GitHub serve the underscore-prefixed _next/ dir

# Ensure the CNAME survives (belt-and-braces on top of public/CNAME).
printf '%s\n' "$DOMAIN" > "$tmpdir/CNAME"

(
  cd "$tmpdir"
  git init -q
  git -c user.name="Prasid Mitra" \
      -c user.email="prasidmitra@users.noreply.github.com" \
      commit -q -m "Deploy to GitHub Pages"
)

echo "▸ Pushing to $BRANCH..."
git -C "$tmpdir" push -f "https://github.com/$REPO.git" "HEAD:$BRANCH"

echo "✓ Deployed. Live at https://$DOMAIN/"
