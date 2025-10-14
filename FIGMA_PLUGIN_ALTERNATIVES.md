# Figma Plugins for Importing HTML/Websites

If you can't find "html.to.design", here are alternative plugins that do the same thing:

## Option 1: Use Figma Import Tool (Built-in Feature)

Figma actually has a built-in way to import designs!

### Method: Copy/Paste from Browser
1. Open your website: http://localhost:3000
2. Take a screenshot (⌘+Shift+4 on Mac, or use browser tool)
3. Paste directly into Figma (⌘+V)
4. Figma will ask if you want to "Paste as Image" or "Import"
5. Choose your preference

## Option 2: "Import from HTML" Plugin

**Search for these exact names in Figma:**

1. **"Figma to HTML"** (works both ways)
2. **"Anima"** ⭐ RECOMMENDED
3. **"Builder.io"**
4. **"Locofy.ai"**
5. **"TeleportHQ"**

---

## 🌟 RECOMMENDED: Use Anima Plugin

Anima is the most popular and reliable option.

### Install Anima:

1. **In Figma:**
   - Click main menu (top left)
   - Plugins → Browse plugins in Community
   - Search: **"Anima"**
   - Install the plugin

2. **Or Direct Link:**
   - https://www.figma.com/community/plugin/857346721138427857/Anima

### How to Use Anima:

1. Run the plugin: Plugins → Anima
2. Click "From URL" tab
3. Enter: `http://localhost:3000`
4. Click "Import"
5. Wait for it to load

**Note:** Anima has a free tier that lets you import pages.

---

## Option 3: Manual Method (Most Reliable)

If plugins aren't working, use this proven method:

### Step 1: Take High-Quality Screenshots

**Mac:**
```bash
# Full page screenshots
# Option A: Use built-in
⌘+Shift+5 → Select "Capture Entire Screen"

# Option B: Use browser extension
# Install "GoFullPage" Chrome extension
```

**Or use command line:**
```bash
# Install screenshot tool
npm install -g capture-website-cli

# Capture homepage
capture-website http://localhost:3000 --output homepage.png --width 1440 --full-page

# Capture providers page
capture-website http://localhost:3000/providers --output providers.png --width 1440 --full-page

# Capture services page  
capture-website http://localhost:3000/services --output services.png --width 1440 --full-page
```

### Step 2: Import Screenshots to Figma

1. Drag PNG files into Figma
2. Use screenshots as reference
3. Rebuild using design tokens from DESIGN_TOKENS.md

### Step 3: Extract Values

Use your browser's DevTools:
1. Open http://localhost:3000
2. Right-click any element → Inspect
3. See exact colors, fonts, spacing
4. Copy values to Figma

---

## Option 4: Use Browser Extension (Easier!)

### "Figma for Chrome" Extension

1. Install: https://chrome.google.com/webstore (search "Figma")
2. Open your site: http://localhost:3000
3. Click Figma extension icon
4. Select "Capture page"
5. Choose what to capture
6. Opens directly in Figma!

---

## Option 5: Deploy Temporarily & Use Online Tools

Some plugins only work with public URLs (not localhost).

### Quick Deploy to Vercel:

```bash
# One command deploy
npx vercel --yes

# You'll get a URL like: https://your-site.vercel.app
# Use this URL in Figma plugins
```

Then use any of these plugins with the public URL:
- Anima
- Builder.io  
- Locofy

---

## What I Recommend For Your Situation

### BEST APPROACH: Screenshot + Manual Rebuild

**Why?**
- Most reliable
- You have complete design tokens in DESIGN_TOKENS.md
- You maintain full control
- Results in cleaner Figma file

**How long?** 2-3 hours to rebuild main pages

### Steps:

1. **Take screenshots of all pages**
   ```bash
   # I can help you create a script for this
   ```

2. **Create Figma file structure**
   ```
   📁 SSD Website
   ├── 🎨 Design System
   │   ├── Colors
   │   ├── Typography
   │   └── Components
   ├── 📱 Pages - Desktop
   │   ├── Homepage
   │   ├── Providers
   │   ├── Services
   │   └── Locations
   └── 📱 Pages - Mobile
       └── (same pages)
   ```

3. **Set up design tokens first**
   - Create color styles from DESIGN_TOKENS.md
   - Create text styles
   - Create component library (buttons, cards)

4. **Rebuild pages using screenshots as reference**
   - Much faster than starting from scratch
   - You know exact values from DESIGN_TOKENS.md
   - Cleaner result than auto-import

---

## Let Me Help You Choose

### Answer these questions:

**Question 1:** Do you want to make design changes in Figma, or just document current design?

- **Make changes** → Screenshot + rebuild (2-3 hrs, but clean)
- **Just document** → Screenshot only (10 mins)

**Question 2:** How soon do you need this in Figma?

- **Right now** → Screenshots (fastest)
- **This week** → Try Anima plugin
- **No rush** → Manual rebuild (best quality)

**Question 3:** Will you be actively designing in Figma?

- **Yes, designing new features** → Rebuild properly with components
- **No, just reference** → Screenshots are fine

---

## My Recommendation for YOU

Based on your project, I recommend:

### 🎯 Approach: Screenshot + Design System

**Phase 1: Quick Documentation (Today - 15 mins)**
```bash
# Take screenshots
# I'll create a script for you
```

**Phase 2: Design System (This Week - 1 hour)**
- Create color styles in Figma
- Create text styles
- Create button components
- Use DESIGN_TOKENS.md as guide

**Phase 3: Rebuild Key Pages (When Needed)**
- Only rebuild pages you need to change
- Use screenshots + design system
- Much faster with system in place

---

## Immediate Action: Let's Take Screenshots

Let me create a script that captures all your pages automatically:

```bash
# I'll create this for you next if you want
```

Would you like me to:
1. ✅ Create a screenshot capture script?
2. ✅ Show you how to use Anima plugin (alternative)?
3. ✅ Guide you through manual Figma setup?

Let me know which path you want to take!
