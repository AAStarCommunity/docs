#!/bin/bash
# 🚀 Auto-Deploy to Cloudflare Pages via GitHub
# Usage: ./deploy.sh [message]

echo -e "\033[0;32m🚀 Triggering Cloudflare Pages deployment...\033[0m"

# Default commit message
MSG="deploy: content update"
if [ -n "$1" ]; then
    MSG="$1"
fi

# 1. Add changes
git add .

# 2. Commit
git commit -m "$MSG"

# 3. Push to main (Triggers Cloudflare Build)
git push origin main

echo -e "\n\033[0;32m✅ Uploaded to GitHub!\033[0m"
echo "☁️  Cloudflare Pages should be building now..."
echo "🔗 Dashboard: https://dash.cloudflare.com/"
