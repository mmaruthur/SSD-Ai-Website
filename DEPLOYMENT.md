# Southern Skies Dermatology - Netlify Deployment Guide

This folder contains the complete Next.js website ready for deployment to Netlify.

## Quick Deploy to Netlify

### Option 1: GitHub + Netlify (Recommended for Production)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., `ssd-nextjs`)
   - Don't initialize with README (we already have files)

2. **Push this code to GitHub**
   ```bash
   cd /Users/alvarogonzalez/Desktop/ssd-website-deploy
   git init
   git add .
   git commit -m "Initial commit - Southern Skies Dermatology Next.js website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ssd-nextjs.git
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Netlify will auto-detect Next.js settings
   - Click "Deploy site"

4. **Add Environment Variables** (if using Sanity CMS)
   - In Netlify dashboard: Site settings → Environment variables
   - Add these variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your_sanity_project_id
     - `NEXT_PUBLIC_SANITY_DATASET` = production
     - `SANITY_API_TOKEN` = your_sanity_token (if needed)

### Option 2: Netlify CLI (Quick Testing)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd /Users/alvarogonzalez/Desktop/ssd-website-deploy
   netlify init
   netlify deploy --prod
   ```

## Build Settings

The project includes a `netlify.toml` file with these settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 20

## What's Included

- ✅ All source code (`src/` directory)
- ✅ All pages (Home, About, Services, Providers, Locations, Contact, etc.)
- ✅ Sanity CMS integration
- ✅ Responsive design with Tailwind CSS
- ✅ Google Maps integration
- ✅ Form handling
- ✅ SEO optimization
- ✅ Playwright tests (378 tests)
- ✅ Professional design matching Figma mockups

## Excluded from Deployment Package

The following are excluded to reduce size and avoid build conflicts:
- `node_modules/` (Netlify will install fresh)
- `.next/` (will be built on Netlify)
- `.git/` (create fresh repo)
- `test-results/` and `playwright-report/`
- `.env.local` (add secrets in Netlify UI)

## After Deployment

1. **Custom Domain**: In Netlify dashboard → Domain settings → Add custom domain
2. **HTTPS**: Automatically enabled by Netlify
3. **Continuous Deployment**: Every push to `main` branch automatically deploys
4. **Preview Deployments**: Pull requests create preview URLs

## Support

For issues or questions:
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs

---

**Project**: Southern Skies Dermatology
**Framework**: Next.js 15.5.4
**Built with**: React 19, TypeScript, Tailwind CSS, Sanity CMS
