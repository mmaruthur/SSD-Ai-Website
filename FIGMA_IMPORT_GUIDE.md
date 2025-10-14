# Figma Import Guide - 5 Minute Setup

## What You'll Do
Import 13 screenshot files into Figma to have a complete visual reference of your Next.js site.

---

## Step-by-Step Instructions

### Step 1: Open Your Screenshots Folder (10 seconds)

The screenshots are ready in:
```
/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/figma-screenshots/
```

**Quick access**: Open Finder and navigate to this folder, or run:
```bash
open figma-screenshots/
```

You should see 13 PNG files:
- about-desktop.png (1.0 MB)
- about-mobile.png (775 KB)
- contact-desktop.png (368 KB)
- contact-mobile.png (244 KB)
- homepage-desktop.png (1.5 MB)
- homepage-mobile.png (870 KB)
- locations-desktop.png (2.4 MB)
- locations-mobile.png (714 KB)
- mohs-surgery-desktop.png (770 KB)
- providers-desktop.png (923 KB)
- providers-mobile.png (712 KB)
- services-desktop.png (1.5 MB)
- services-mobile.png (1.0 MB)

---

### Step 2: Open Figma (30 seconds)

1. Go to **https://figma.com** in your browser
2. **Log in** to your Figma account (or create free account if needed)
3. You'll see your Figma dashboard

---

### Step 3: Create New Design File (10 seconds)

1. Click the **"New design file"** button (blue button in top right)
2. A blank canvas opens
3. **Name your file**: Click "Untitled" at top and type:
   ```
   Southern Skies Dermatology - Next.js
   ```

---

### Step 4: Create Pages for Organization (1 minute)

In the left sidebar, you'll see "Page 1". Let's organize by creating pages:

1. Click the **"+"** next to "Pages" in left sidebar
2. Create these pages (click + for each):
   - Homepage
   - Providers
   - Services
   - Locations
   - Mohs Surgery
   - Contact
   - About

Your left sidebar should now show 7 pages.

---

### Step 5: Import Screenshots (2 minutes)

For each page:

#### Homepage Page:
1. Click **"Homepage"** in left sidebar
2. **Drag and drop** these files from Finder:
   - `homepage-desktop.png`
   - `homepage-mobile.png`
3. Position them side by side on canvas

#### Providers Page:
1. Click **"Providers"** in left sidebar
2. Drag and drop:
   - `providers-desktop.png`
   - `providers-mobile.png`

#### Services Page:
1. Click **"Services"** in left sidebar
2. Drag and drop:
   - `services-desktop.png`
   - `services-mobile.png`

#### Locations Page:
1. Click **"Locations"** in left sidebar
2. Drag and drop:
   - `locations-desktop.png`
   - `locations-mobile.png`

#### Mohs Surgery Page:
1. Click **"Mohs Surgery"** in left sidebar
2. Drag and drop:
   - `mohs-surgery-desktop.png`
   (Only desktop view for this page)

#### Contact Page:
1. Click **"Contact"** in left sidebar
2. Drag and drop:
   - `contact-desktop.png`
   - `contact-mobile.png`

#### About Page:
1. Click **"About"** in left sidebar
2. Drag and drop:
   - `about-desktop.png`
   - `about-mobile.png`

---

### Step 6: Add Labels (1 minute - Optional)

For each page, add text labels above screenshots:

1. Press **T** (text tool)
2. Click above screenshot
3. Type "Desktop (1440x900)" above desktop screenshot
4. Type "Mobile (375x812)" above mobile screenshot
5. Style text: Make it **bold** and **24px** size

---

### Step 7: Create Design System Page (30 seconds)

1. Create one more page called **"Design System"**
2. Open the file in your project:
   ```
   /Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/DESIGN_TOKENS.md
   ```
3. Copy the color values and create color swatches:

**Primary Color**: #1e3a8a (Dark Blue)
**Secondary Color**: #fbbf24 (Yellow/Gold)

Create rectangles (press R) and fill with these colors.

---

## You're Done! 🎉

You now have:
- ✅ Complete visual reference of all 7 pages
- ✅ Desktop and mobile views
- ✅ Organized by page
- ✅ Ready to use for design modifications

---

## What To Do Next

### Option A: Just Use as Reference
- Keep these screenshots as visual reference
- Refer back when making code changes
- Share with team/stakeholders

### Option B: Rebuild in Figma (Advanced)
If you want to create editable Figma components:

1. Create new frames (press F)
2. Use screenshots as background/reference
3. Build components on top using Figma tools
4. Reference `DESIGN_TOKENS.md` for exact colors, fonts, spacing

---

## Quick Reference

**Screenshot Folder**:
```bash
open figma-screenshots/
```

**Design Tokens**:
```bash
open DESIGN_TOKENS.md
```

**View Site Live**:
```bash
npm run dev
# Visit: http://localhost:3000
```

**Re-capture Screenshots** (if you make changes):
```bash
npm run capture-figma
```

---

## Tips

1. **Zoom to fit**: Press `Shift + 1` to fit all content in view
2. **Zoom to selection**: Press `Shift + 2` to zoom to selected screenshot
3. **Pan**: Hold `Space` and drag to move around canvas
4. **Select image**: Click once on screenshot to select
5. **Move image**: Select and drag, or use arrow keys

---

## Need Help?

- Figma keyboard shortcuts: Press `Ctrl + Shift + ?` in Figma
- Figma tutorials: https://help.figma.com/
- Your design tokens: Open `DESIGN_TOKENS.md` in your project

---

## File Sizes Reference

Total size: ~13 MB
Largest: locations-desktop.png (2.4 MB)
Smallest: contact-mobile.png (244 KB)

All files are optimized PNG format, full-page screenshots.
