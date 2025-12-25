# Local Development Only

This file is for local development. 
Vercel deployment uses pre-built static files in .vitepress/dist/

## Local Development

```bash
# Install dependencies (local only)
npm install

# Start dev server
npm run docs:dev

# Build static files
npm run docs:build

# Commit built files
git add .vitepress/dist/
git commit -m "docs: update"
git push
```

## Vercel Deployment

Vercel serves `.vitepress/dist/` as pure static files.
No build process on Vercel.
