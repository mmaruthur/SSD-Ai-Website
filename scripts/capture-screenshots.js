/**
 * Automated Screenshot Capture for Figma Import
 * 
 * This script uses Playwright to capture high-quality screenshots
 * of all your pages for import into Figma.
 * 
 * Usage:
 * 1. Ensure dev server is running: npm run dev
 * 2. Run: node scripts/capture-screenshots.js
 * 3. Screenshots saved to: ./figma-screenshots/
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Pages to capture
const PAGES = [
  { name: 'homepage', url: '/', viewports: ['desktop', 'mobile'] },
  { name: 'providers', url: '/providers', viewports: ['desktop', 'mobile'] },
  { name: 'services', url: '/services', viewports: ['desktop', 'mobile'] },
  { name: 'locations', url: '/locations', viewports: ['desktop', 'mobile'] },
  { name: 'mohs-surgery', url: '/mohs-surgery', viewports: ['desktop'] },
  { name: 'contact', url: '/contact', viewports: ['desktop', 'mobile'] },
  { name: 'about', url: '/about', viewports: ['desktop', 'mobile'] },
];

// Viewport sizes
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 812 },
};

async function captureScreenshots() {
  console.log('🎨 Starting screenshot capture for Figma...\n');

  // Create output directory
  const outputDir = path.join(process.cwd(), 'figma-screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Launch browser
  const browser = await chromium.launch();
  
  try {
    for (const page of PAGES) {
      for (const viewportName of page.viewports) {
        const viewport = VIEWPORTS[viewportName];
        const context = await browser.newContext({ viewport });
        const browserPage = await context.newPage();

        const url = `http://localhost:3000${page.url}`;
        console.log(`📸 Capturing: ${page.name} (${viewportName})...`);

        try {
          await browserPage.goto(url, { waitUntil: 'networkidle' });
          
          // Wait for images to load
          await browserPage.waitForTimeout(2000);

          const filename = `${page.name}-${viewportName}.png`;
          const filepath = path.join(outputDir, filename);

          // Take full page screenshot
          await browserPage.screenshot({
            path: filepath,
            fullPage: true,
          });

          console.log(`   ✅ Saved: ${filename}`);
        } catch (error) {
          console.error(`   ❌ Error capturing ${page.name}: ${error.message}`);
        }

        await context.close();
      }
    }

    console.log('\n🎉 Screenshot capture complete!');
    console.log(`📁 Screenshots saved to: ${outputDir}`);
    console.log('\n📋 Next steps:');
    console.log('1. Open Figma');
    console.log('2. Create new file');
    console.log('3. Drag screenshots into Figma');
    console.log('4. Use as reference for rebuilding');
    console.log('5. Refer to DESIGN_TOKENS.md for exact values');
    
  } finally {
    await browser.close();
  }
}

// Run
captureScreenshots().catch(console.error);
