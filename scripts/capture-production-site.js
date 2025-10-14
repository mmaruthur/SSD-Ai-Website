/**
 * Capture Screenshots of Live WordPress Site
 * 
 * This script captures the current production WordPress site
 * for comparison with the Next.js version.
 * 
 * Usage: node scripts/capture-production-site.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://southernskiesdermatology.com';

// Pages to capture from production site
const PAGES = [
  { name: 'homepage', url: '', viewports: ['desktop', 'mobile'] },
  { name: 'providers', url: '/our-doctors-staff', viewports: ['desktop', 'mobile'] },
  { name: 'services', url: '/services', viewports: ['desktop', 'mobile'] },
  { name: 'locations', url: '/locations', viewports: ['desktop', 'mobile'] },
  { name: 'mohs-surgery', url: '/mohs-surgery', viewports: ['desktop'] },
  { name: 'contact', url: '/contact-us', viewports: ['desktop', 'mobile'] },
  { name: 'about', url: '/about-us', viewports: ['desktop'] },
];

// Viewport sizes
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 812 },
};

async function captureScreenshots() {
  console.log('🎨 Capturing screenshots from live WordPress site...');
  console.log(`📍 URL: ${BASE_URL}\n`);

  // Create output directory
  const outputDir = path.join(process.cwd(), 'wordpress-screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  
  try {
    for (const page of PAGES) {
      for (const viewportName of page.viewports) {
        const viewport = VIEWPORTS[viewportName];
        const context = await browser.newContext({ viewport });
        const browserPage = await context.newPage();

        const url = `${BASE_URL}${page.url}`;
        console.log(`📸 Capturing: ${page.name} (${viewportName})...`);

        try {
          // Navigate with longer timeout for production site
          await browserPage.goto(url, { 
            waitUntil: 'networkidle',
            timeout: 60000 
          });
          
          // Wait for images and content to load
          await browserPage.waitForTimeout(3000);

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
    console.log('\n📊 Comparison:');
    console.log('   WordPress site: ./wordpress-screenshots/');
    console.log('   Next.js site:   ./figma-screenshots/');
    console.log('\n💡 Use these to compare and ensure migration accuracy!');
    
  } finally {
    await browser.close();
  }
}

// Run
captureScreenshots().catch(console.error);
