#!/bin/bash
# Deploy to GitHub Pages via Git Push
# verifiable via Actions tab: https://github.com/AAStarCommunity/docs/actions

echo "🚀 Triggering GitHub Pages deployment..."

if [ "$1" == "--prod" ]; then
    MSG="deploy: production update"
else
    MSG="deploy: content update"
fi

git add .
git commit -m "$MSG"
git push origin main

echo "✅ Push complete! Check GitHub Actions for build status."
