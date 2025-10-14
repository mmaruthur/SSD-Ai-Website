# Figma ↔ VS Code Integration Guide

## Option 1: Figma for VS Code (Official Extension)

### Installation
1. Open VS Code
2. Go to Extensions (⌘+Shift+X on Mac)
3. Search for "Figma for VS Code"
4. Install the official extension by Figma

### Features
✅ View Figma designs directly in VS Code
✅ Inspect design specs (spacing, colors, fonts)
✅ Copy CSS/React code from designs
✅ Stay in your coding environment
✅ No need to switch between apps

### Setup
1. Install extension
2. Open Command Palette (⌘+Shift+P)
3. Type "Figma: Sign in"
4. Authenticate with your Figma account
5. Access designs from sidebar

### Usage
```
⌘+Shift+P → "Figma: Open File"
- Browse your Figma files
- View designs in VS Code panel
- Inspect elements
- Copy code snippets
```

---

## Option 2: Figma API + Custom Scripts

You can automate design token extraction from Figma to your codebase.

### Install Figma API Package
```bash
npm install --save-dev figma-api
```

### Create Figma Sync Script

File: `scripts/sync-figma-tokens.js`
```javascript
const Figma = require('figma-api');
const fs = require('fs');

// Your Figma Personal Access Token
const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

const api = new Figma.Api({ personalAccessToken: TOKEN });

async function syncDesignTokens() {
  try {
    // Get file from Figma
    const file = await api.getFile(FILE_KEY);
    
    // Extract styles
    const styles = await api.getFileStyles(FILE_KEY);
    
    // Convert to design tokens
    const tokens = {
      colors: extractColors(styles),
      typography: extractTypography(styles),
      spacing: extractSpacing(styles),
    };
    
    // Write to file
    fs.writeFileSync(
      './design-tokens.json',
      JSON.stringify(tokens, null, 2)
    );
    
    console.log('✅ Design tokens synced from Figma!');
  } catch (error) {
    console.error('Error syncing from Figma:', error);
  }
}

syncDesignTokens();
```

### Setup .env
```bash
FIGMA_TOKEN=your_figma_personal_access_token
FIGMA_FILE_KEY=your_figma_file_key
```

### Run Sync
```bash
node scripts/sync-figma-tokens.js
```

---

## Option 3: Style Dictionary + Figma Tokens

Convert Figma tokens to CSS variables automatically.

### Install
```bash
npm install --save-dev style-dictionary figma-tokens
```

### Workflow
1. Export design tokens from Figma (using Tokens Studio plugin)
2. Store in `design-tokens/` folder
3. Run Style Dictionary to generate CSS
4. Import into your app

### Example Config: `style-dictionary.config.js`
```javascript
module.exports = {
  source: ['design-tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'design-tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [{
        destination: 'design-tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
};
```

---

## Option 4: Figma Plugins for Code Export

### Recommended Plugins (Use in Figma, export to VS Code):

**1. Anima** (https://www.animaapp.com/)
- Export Figma → React components
- Generates production-ready code
- Supports responsive design

**2. Figma to Code** (https://www.figma.com/community/plugin/842128343887142055)
- Free plugin
- Export HTML/CSS/React
- One-click conversion

**3. Locofy** (https://www.locofy.ai/)
- AI-powered Figma to code
- Supports React, Next.js, Vue
- Preserves design tokens

**4. Builder.io** (https://www.builder.io/)
- Visual development platform
- Figma → working code
- CMS integration

---

## Option 5: GitHub + Figma Integration

### Figma GitHub Action
Automatically sync design changes to your repo.

```yaml
# .github/workflows/figma-sync.yml
name: Sync Figma Designs

on:
  schedule:
    - cron: '0 0 * * *' # Daily
  workflow_dispatch: # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Sync Figma Tokens
        uses: figma/figma-action@v1
        with:
          figma-token: ${{ secrets.FIGMA_TOKEN }}
          file-key: ${{ secrets.FIGMA_FILE_KEY }}
          
      - name: Commit changes
        run: |
          git config user.name "Figma Bot"
          git add design-tokens/
          git commit -m "Update design tokens from Figma"
          git push
```

---

## Recommended Workflow for Your Project

### Setup Steps:

1. **Install Figma VS Code Extension**
   ```
   Extensions → Search "Figma for VS Code" → Install
   ```

2. **Create Figma File with Your Current Design**
   - Use html.to.design plugin to import current site
   - Or manually recreate using DESIGN_TOKENS.md

3. **Connect VS Code to Figma**
   ```
   ⌘+Shift+P → "Figma: Sign in"
   ```

4. **View Designs in VS Code**
   - Open Figma panel in VS Code sidebar
   - Browse your files
   - Inspect and copy code

5. **Optional: Set up Auto-Sync**
   - Use Figma API scripts for automated token sync
   - Keep design system in sync with code

---

## Practical Example for Your Project

### Scenario: You update a color in Figma

**Manual Workflow:**
1. Change color in Figma (e.g., primary blue)
2. Open VS Code Figma extension
3. Inspect the new color value
4. Update `tailwind.config.ts`:
   ```typescript
   colors: {
     primary: '#NEW_COLOR', // Updated from Figma
   }
   ```

**Automated Workflow:**
1. Change color in Figma
2. Run: `npm run sync-figma`
3. Script automatically updates design tokens
4. Commit changes

---

## Bidirectional Workflow

### Figma → Code
- Design in Figma
- Export tokens/components
- Implement in Next.js

### Code → Figma
- Take screenshots of implemented features
- Import into Figma for documentation
- Update designs based on implementation learnings

---

## Tools Summary

| Tool | Purpose | Setup Time | Best For |
|------|---------|------------|----------|
| Figma VS Code Extension | View designs in VS Code | 5 min | Quick inspection |
| html.to.design | Import current site | 10 min | One-time import |
| Figma API Scripts | Auto-sync tokens | 30 min | Ongoing projects |
| Style Dictionary | Token management | 1 hour | Design systems |
| Anima/Locofy | Code generation | 15 min | Component export |

---

## Next Steps for Your Project

### Immediate (Today):
1. ✅ You have DESIGN_TOKENS.md created
2. Install Figma VS Code extension
3. Install html.to.design Figma plugin
4. Import current site to Figma

### Short Term (This Week):
1. Refine Figma designs
2. Create component library in Figma
3. Use VS Code extension to inspect as you code

### Long Term (Ongoing):
1. Set up Figma API sync script
2. Automate design token extraction
3. Keep Figma as source of truth for design

---

## Pro Tips

1. **Use Figma Dev Mode** (paid feature)
   - Get exact CSS values
   - See spacing and dimensions
   - Copy component code

2. **Name Layers Properly in Figma**
   - Use semantic names (e.g., "Button/Primary")
   - Helps with code generation
   - Makes inspection easier

3. **Use Figma Variables** (new feature)
   - Define colors, spacing as variables
   - Easier to export to code
   - Single source of truth

4. **Keep Design Tokens in Sync**
   - Commit design-tokens.json to git
   - Review changes in PRs
   - Document breaking changes

---

## Getting Started Command

```bash
# Install VS Code extension (do this in VS Code UI)
# Then from terminal:

# Create Figma sync script
mkdir -p scripts

# Install dependencies
npm install --save-dev figma-api dotenv

# Add to package.json scripts:
# "sync-figma": "node scripts/sync-figma-tokens.js"
```

Let me know which approach you'd like to implement!
