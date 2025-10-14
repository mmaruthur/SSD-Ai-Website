# Figma Integration - Quick Start Guide

## Step 1: Export Your Current Design to Figma (EASIEST METHOD)

### Using html.to.design Plugin (Recommended)

1. **Install the Figma Plugin**
   - Open Figma (https://figma.com)
   - Go to Plugins → Browse all plugins
   - Search for "html.to.design"
   - Install the plugin

2. **Capture Your Website**
   - Make sure your dev server is running: `npm run dev`
   - Open Figma
   - Create a new file or open existing one
   - Right-click → Plugins → html.to.design
   - Enter URL: `http://localhost:3000`
   - Click "Import"
   - Wait for the magic! ✨

3. **What Gets Imported**
   - ✅ All colors
   - ✅ Typography styles
   - ✅ Layout and spacing
   - ✅ Images (as links)
   - ✅ Component structure

## Step 2: Install Figma VS Code Extension

1. **Open VS Code**
   - Press `⌘+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows)
   - Search for "Figma for VS Code"
   - Click Install

2. **Sign In to Figma**
   - Press `⌘+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
   - Type "Figma: Sign in"
   - Follow authentication steps

3. **Open Your Figma Files in VS Code**
   - Look for Figma icon in VS Code sidebar
   - Browse your Figma files
   - Click to view designs
   - Inspect elements directly

## Step 3: Set Up Automated Sync (Optional but Cool!)

### Install Dependencies
```bash
npm install --save-dev figma-api dotenv
```

### Get Your Figma Credentials

1. **Personal Access Token**
   - Go to: https://www.figma.com/settings
   - Scroll to "Personal access tokens"
   - Click "Generate new token"
   - Name it: "SSD Website Sync"
   - Copy the token

2. **File Key**
   - Open your Figma file
   - Look at URL: `https://www.figma.com/file/ABC123def456/Your-File`
   - Copy the part: `ABC123def456` (that's your file key)

3. **Create .env File**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add:
   ```
   FIGMA_TOKEN=your_token_from_step_1
   FIGMA_FILE_KEY=your_file_key_from_step_2
   ```

### Run Your First Sync
```bash
npm run sync-figma
```

This will:
- ✅ Fetch design tokens from Figma
- ✅ Generate `design-tokens.json`
- ✅ Generate CSS variables in `src/styles/design-tokens.css`
- ✅ Generate TypeScript types in `src/types/design-tokens.ts`

## Step 4: Use Figma in Your Workflow

### Scenario 1: Inspect Design While Coding

1. Open Figma panel in VS Code (left sidebar)
2. Browse to your design file
3. Click on element you want to inspect
4. See specs (colors, spacing, fonts)
5. Copy values directly to your code

### Scenario 2: Update Colors from Figma

1. Change color in Figma
2. Run: `npm run sync-figma`
3. Check `design-tokens.json` for new values
4. Update `tailwind.config.ts` if needed

### Scenario 3: Export Component from Figma

1. Select component in Figma
2. Use plugin like "Anima" or "Figma to Code"
3. Export as React/Next.js code
4. Paste into your project
5. Refine as needed

## Common Workflows

### Designer → Developer
```
Designer makes changes in Figma
    ↓
Designer notifies you (or you check daily)
    ↓
Run: npm run sync-figma
    ↓
Review changes in design-tokens.json
    ↓
Update Tailwind config or components
    ↓
Test changes: npm run dev
```

### Developer → Designer
```
Build feature in code
    ↓
Take screenshots
    ↓
Share with designer
    ↓
Designer updates Figma
    ↓
Sync back to code
```

## Pro Tips

1. **Name Figma Layers Well**
   - Use semantic names like "Button/Primary"
   - Makes code export cleaner
   - Easier to find elements

2. **Use Figma Variables** (New Feature)
   - Define colors as variables
   - Define spacing as variables
   - Easier to export to code

3. **Component Variants in Figma**
   - Create button variants (Primary, Secondary, etc.)
   - Export variants as React props
   - Matches your component API

4. **Keep Design Tokens in Git**
   - Commit `design-tokens.json`
   - Track changes in PRs
   - Team stays in sync

5. **Document Breaking Changes**
   - If Figma changes colors drastically
   - Document in commit message
   - Update migration guide

## Troubleshooting

### Plugin Not Working?
- Make sure localhost:3000 is running
- Try http://127.0.0.1:3000 instead
- Check browser console for errors

### Can't Find Figma Extension in VS Code?
- Update VS Code to latest version
- Search exactly: "Figma for VS Code"
- Look for official extension (by Figma)

### Sync Script Failing?
```bash
# Check .env file exists
ls -la .env

# Check token is set
echo $FIGMA_TOKEN

# Install dependencies
npm install --save-dev figma-api dotenv
```

### Design Tokens Not Updating?
- Clear cache: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check design-tokens.json was updated
- Verify import in your components

## Advanced: Continuous Sync with GitHub Actions

Want automatic syncs? Add this to `.github/workflows/figma-sync.yml`:

```yaml
name: Sync Figma Design Tokens

on:
  schedule:
    - cron: '0 9 * * *' # Daily at 9 AM
  workflow_dispatch: # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Sync from Figma
        env:
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
          FIGMA_FILE_KEY: ${{ secrets.FIGMA_FILE_KEY }}
        run: npm run sync-figma
        
      - name: Create PR if changed
        uses: peter-evans/create-pull-request@v5
        with:
          title: 'Update design tokens from Figma'
          commit-message: 'chore: sync design tokens from Figma'
          branch: figma-sync
```

## Resources

- Figma API: https://www.figma.com/developers/api
- html.to.design: https://www.figma.com/community/plugin/1159123024924461424
- Figma VS Code: https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension
- Anima Plugin: https://www.animaapp.com/
- Style Dictionary: https://amzn.github.io/style-dictionary/

## Need Help?

Your design tokens are documented in:
- `DESIGN_TOKENS.md` - Complete specs
- `FIGMA_VSCODE_INTEGRATION.md` - Detailed integration guide
- This file - Quick start

Happy designing! 🎨
