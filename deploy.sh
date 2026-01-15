#!/bin/bash
# Deploy AAStar Documentation to Vercel
# This script builds the docs locally and deploys to Vercel

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}📚 AAStar Docs Deployment${NC}"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}⚠️  Not in docs directory. Please run from aastar-docs/${NC}"
    exit 1
fi

# Step 1: Build docs
echo -e "\n${YELLOW}🔨 Building documentation...${NC}"

npm install --silent
npm run docs:build

echo -e "${GREEN}✅ Build complete${NC}"

# Step 2: Deploy to Vercel
echo -e "\n${YELLOW}🚀 Deploying to Vercel from build directory...${NC}"

# Ensure vercel.json is in the build directory as required by Vercel CLI when deploying a subdirectory
cp vercel.json .vitepress/dist/

if [ "$1" == "--prod" ]; then
    echo "Deploying to PRODUCTION..."
    vercel .vitepress/dist --prod --yes
else
    echo "Deploying to PREVIEW..."
    echo "Use './deploy.sh --prod' for production deployment"
    vercel .vitepress/dist --yes
fi

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo -e "Visit: ${YELLOW}https://docs.aastar.io${NC}"
