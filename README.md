# AAStar Documentation

Official documentation for AAStar SDK.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run docs:dev

# Build for production
pnpm run docs:build

# Preview production build
pnpm run docs:preview
```

## 📦 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

Then configure custom domain `docs.aastar.io` in Vercel dashboard.

### Build Output

- Build command: `pnpm run docs:build`
- Output directory: `.vitepress/dist/`

## 📝 Documentation Structure

```
.
├── .vitepress/          # VitePress config
│   ├── config.ts        # Site configuration
│   └── theme/           # Custom theme (if any)
├── guide/               # User guides
│   ├── getting-started.md
│   ├── installation.md
│   └── quick-start.md
├── api/                 # API reference
│   ├── roles/           # Role-based API docs
│   └── modules/         # Module API docs
├── examples/            # Complete examples
└── public/              # Static assets
    ├── aastar-logo.png
    └── *.svg
```

## 🔄 Sync from SDK Repo

Documentation is auto-extracted from the SDK repository:

```bash
# In SDK repo
cd ../aastar-sdk
bash scripts/extract-docs.sh

# Commit and push
cd ../aastar-docs
git add .
git commit -m "docs: sync from SDK"
git push
```

Vercel will automatically deploy on push to main branch.

## 🛠️ Development

- **Framework**: VitePress 1.x
- **Package Manager**: pnpm
- **Node Version**: 18+

## 📄 License

MIT © AAStar Community
