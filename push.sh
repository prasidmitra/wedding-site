#!/usr/bin/env bash
#
# One-command ship: commit the source to `main`, push it, then build and
# deploy the static site to GitHub Pages (gh-pages).
#
# Usage:  ./push.sh "<commit message>"
#         npm run push -- "<commit message>"
#
set -euo pipefail

cd "$(dirname "$0")"

msg="${1:-}"

if [ -z "$msg" ]; then
  echo "Usage: ./push.sh \"<commit message>\"" >&2
  echo "  Commits all changes to main, pushes, then builds and deploys to gh-pages." >&2
  exit 1
fi

# Nothing to do if the working tree is already clean.
if git diff --quiet && git diff --cached --quiet \
   && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "Nothing to commit — working tree is clean." >&2
  exit 0
fi

echo "▸ Typechecking..."
npm run typecheck

echo "▸ Committing to main..."
git add -A
git commit -m "$msg"

echo "▸ Pushing main..."
git push origin main

echo "▸ Building and deploying to gh-pages..."
./deploy.sh

echo "✓ Shipped. Live at https://prasidandtanuja.xyz/"
