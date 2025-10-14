# How to Use html.to.design - Visual Step-by-Step Guide

## What is html.to.design?

html.to.design is a Figma plugin that captures your live website and converts it into editable Figma designs. It's like taking a screenshot, but instead of getting an image, you get fully editable design elements.

## Before You Start

✅ **Your dev server is running at http://localhost:3000**
✅ You have a Figma account (free is fine)
✅ You have Figma desktop app OR use Figma in browser

---

## Step-by-Step Instructions

### Step 1: Open or Create a Figma File

1. Go to https://figma.com
2. Sign in to your account
3. Click "New design file" OR open an existing file
4. You should see a blank canvas

```
Your Figma URL will look like:
https://www.figma.com/design/ABC123xyz/Your-File-Name
```

---

### Step 2: Install html.to.design Plugin

**Method A: From Figma Resources**
1. In Figma, click on main menu (top left, Figma logo)
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for **"html.to.design"**
4. Look for the plugin by "html.to.design"
5. Click **"Install"** or **"Try it out"**

**Method B: Direct Link**
1. Go to: https://www.figma.com/community/plugin/1159123024924461424/html-to-design
2. Click **"Try it out"** or **"Install"**
3. It will ask which file to run in - select your file

---

### Step 3: Run the Plugin

1. **Right-click** anywhere on the Figma canvas
2. Select **Plugins** → **html.to.design**
3. A panel will appear on the right side

OR

1. Press **⌘+/** (Mac) or **Ctrl+/** (Windows) to open quick actions
2. Type **"html.to.design"**
3. Press Enter

---

### Step 4: Configure the Import

You'll see the plugin panel with these options:

#### Option 1: Import from URL (What You Want)
```
┌─────────────────────────────────────┐
│ html.to.design                      │
├─────────────────────────────────────┤
│                                     │
│ URL:                                │
│ [http://localhost:3000          ]  │ ← Enter your URL here
│                                     │
│ Width: [Desktop ▼] 1440px          │
│                                     │
│ □ Import full page                 │ ← Check this!
│ ☑ Import images                    │
│ ☑ Import colors as styles          │
│ ☑ Import text styles               │
│                                     │
│ [       Import to Figma       ]    │ ← Click this button
└─────────────────────────────────────┘
```

**What to enter:**
- **URL**: `http://localhost:3000`
- **Width**: Choose "Desktop" (1440px)
- **Options**:
  - ✅ Import full page (if you want entire homepage)
  - ✅ Import images
  - ✅ Import colors as styles
  - ✅ Import text styles

---

### Step 5: Click "Import to Figma"

1. Click the blue **"Import to Figma"** button
2. Wait for the magic to happen! ⏳

**You'll see:**
```
Importing... [████████░░] 80%
- Capturing page structure
- Processing styles  
- Importing images
- Creating components
```

This can take **1-3 minutes** depending on page complexity.

---

### Step 6: What You Get

After import completes, you'll see your website recreated in Figma!

**What's Imported:**
✅ All layout and structure
✅ All text (fully editable)
✅ All colors (as Figma color styles)
✅ All typography (as text styles)
✅ Images (as linked or embedded)
✅ Buttons and cards (as Figma frames)
✅ Spacing and padding (preserved)

**What's NOT Imported:**
❌ Hover states
❌ Animations
❌ JavaScript interactions
❌ Dropdown menus (shown in closed state)

---

### Step 7: Organize Your Import

The plugin will create layers in Figma. Here's how to organize:

1. **Rename the Frame**
   - Click the top frame
   - Rename to "Homepage - Desktop"

2. **Group Related Elements**
   - Select multiple elements
   - Press ⌘+G (Mac) or Ctrl+G (Windows) to group
   - Rename groups: "Header", "Hero", "Services", etc.

3. **Extract Color Styles**
   - If colors imported as styles, they're in:
   - Right panel → Design → Color styles

4. **Extract Text Styles**
   - Text styles are in:
   - Right panel → Design → Text styles

---

## Troubleshooting

### Problem 1: "Cannot connect to localhost"

**Solution A: Use ngrok (Expose localhost to internet)**
```bash
# Install ngrok
brew install ngrok

# Expose your local server
ngrok http 3000

# Use the HTTPS URL provided (e.g., https://abc123.ngrok.io)
```

**Solution B: Use 127.0.0.1 instead**
- Try: `http://127.0.0.1:3000` instead of `http://localhost:3000`

**Solution C: Deploy to Vercel temporarily**
```bash
# One-time deploy
npx vercel --yes

# Use the provided URL in html.to.design
```

---

### Problem 2: "Page not loading correctly"

**Causes:**
- Dev server not running
- Port not 3000
- Browser security blocking localhost

**Solutions:**
1. Check server is running: `npm run dev`
2. Check correct port: look at terminal output
3. Try in Chrome (best compatibility)
4. Disable browser extensions temporarily

---

### Problem 3: "Images not importing"

**Solution:**
- Images from external URLs (like your WordPress CDN) should work
- If local images fail, ensure they're in `/public` folder
- Try unchecking "Import images" and add them manually later

---

### Problem 4: "Some elements look wrong"

**This is normal!** The plugin does its best but isn't perfect.

**What to do:**
1. Import as starting point
2. Manually adjust spacing
3. Fix any layout issues
4. Refine typography
5. Add missing hover states manually

---

## Pro Tips

### Tip 1: Import Multiple Pages

Import each page separately:
```
Frame 1: Homepage (http://localhost:3000)
Frame 2: Providers (http://localhost:3000/providers)
Frame 3: Services (http://localhost:3000/services)
Frame 4: Locations (http://localhost:3000/locations)
```

### Tip 2: Import at Different Sizes

Create frames for each breakpoint:
```
Desktop:  http://localhost:3000 (1440px)
Tablet:   http://localhost:3000 (768px)
Mobile:   http://localhost:3000 (375px)
```

### Tip 3: Use Figma Dev Mode

Once imported:
1. Click "Dev Mode" (top right toggle)
2. Inspect any element
3. See exact CSS values
4. Copy code snippets

### Tip 4: Create Components from Import

After import:
1. Select repeating elements (buttons, cards)
2. Press ⌘+Option+K (Mac) or Ctrl+Alt+K (Windows)
3. Convert to Figma components
4. Create variants for hover/active states

### Tip 5: Update Your Import

If you change your website:
1. Make changes to code
2. Re-run html.to.design
3. Import to new frame
4. Compare old vs new
5. Update your designs

---

## Alternative: Manual Screenshot Method

If html.to.design doesn't work for you:

### Step 1: Take Screenshots
```bash
# Open your site
open http://localhost:3000

# Take full-page screenshot
# Mac: ⌘+Shift+4, then press Space, click window
# Or use browser extensions like "Full Page Screen Capture"
```

### Step 2: Import to Figma
1. Drag screenshots into Figma
2. Use as reference
3. Rebuild using DESIGN_TOKENS.md as guide
4. This is more work but gives more control

---

## What to Do After Import

### Immediate (First Hour):
1. ✅ Review imported design
2. ✅ Fix any obvious layout issues  
3. ✅ Extract color styles
4. ✅ Extract text styles
5. ✅ Organize into pages/frames

### Short Term (This Week):
1. Create component library
2. Add hover states
3. Add mobile versions
4. Document design system
5. Share with team

### Ongoing:
1. Keep Figma as source of truth
2. Make design changes in Figma first
3. Sync tokens using `npm run sync-figma`
4. Keep code and design in sync

---

## Need Help?

### Resources:
- Plugin docs: https://html.to.design/docs
- Video tutorial: https://www.youtube.com/watch?v=example
- Figma help: https://help.figma.com

### Common Issues:
- localhost access → Use ngrok or deploy temporarily
- Images not loading → Check image URLs
- Styling off → Normal, refine manually
- Slow import → Reduce page complexity

---

## Quick Reference Card

```
╔══════════════════════════════════════╗
║     html.to.design Quick Steps      ║
╠══════════════════════════════════════╣
║ 1. Ensure dev server runs           ║
║    npm run dev                       ║
║                                      ║
║ 2. Open Figma                        ║
║    figma.com → New file              ║
║                                      ║
║ 3. Install plugin                    ║
║    Plugins → html.to.design          ║
║                                      ║
║ 4. Run plugin                        ║
║    Right-click → Plugins             ║
║                                      ║
║ 5. Enter URL                         ║
║    http://localhost:3000             ║
║                                      ║
║ 6. Configure options                 ║
║    ✓ Full page                       ║
║    ✓ Images                          ║
║    ✓ Colors as styles                ║
║                                      ║
║ 7. Click Import                      ║
║    Wait 1-3 minutes                  ║
║                                      ║
║ 8. Refine & organize                 ║
║    Group, rename, componentize       ║
╚══════════════════════════════════════╝
```

---

## Success Checklist

After completing html.to.design import:

- [ ] Homepage imported successfully
- [ ] Colors extracted as styles
- [ ] Text styles extracted
- [ ] Layout looks correct (90%+ accurate)
- [ ] Images are visible
- [ ] Layers are organized
- [ ] Components identified
- [ ] Ready to make design changes

---

**Your Next Step:** Open Figma and try importing your homepage!

URL to use: `http://localhost:3000`
