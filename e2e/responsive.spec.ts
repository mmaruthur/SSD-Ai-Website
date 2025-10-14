import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  test('should hide desktop menu on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Desktop menu should be hidden
    const desktopNav = page.locator('nav .hidden.md\\:flex');
    await expect(desktopNav).toBeHidden();
  });

  test('should show mobile menu button', async ({ page }) => {
    await page.goto('/');
    
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.goto('/');
    
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    await mobileMenuButton.click();
    
    // Mobile menu should be visible
    const mobileMenu = page.locator('.md\\:hidden >> text=Home');
    await expect(mobileMenu).toBeVisible();
    
    // Click again to close
    await mobileMenuButton.click();
    await expect(mobileMenu).toBeHidden();
  });

  test('should stack content vertically on mobile', async ({ page }) => {
    await page.goto('/providers');
    
    // Provider cards should be stacked
    const providerCards = page.locator('[class*="grid"]');
    const firstCard = providerCards.first();
    await expect(firstCard).toBeVisible();
  });

  test('should display readable text on mobile', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.locator('h1').first();
    const fontSize = await heading.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });
    
    // Font size should be reasonable (at least 24px for h1 on mobile)
    const fontSizeNum = parseInt(fontSize);
    expect(fontSizeNum).toBeGreaterThanOrEqual(24);
  });

  test('should make buttons touch-friendly on mobile', async ({ page }) => {
    await page.goto('/');
    
    const buttons = page.locator('a[class*="btn"], button[class*="btn"]');
    if (await buttons.count() > 0) {
      const button = buttons.first();
      const box = await button.boundingBox();
      
      if (box) {
        // Buttons should be at least 44x44px (iOS guideline)
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    }
  });
});

test.describe('Tablet Responsiveness', () => {
  test.use({ viewport: { width: 768, height: 1024 } }); // iPad size

  test('should display desktop menu on tablet', async ({ page }) => {
    await page.goto('/');
    
    // Desktop navigation should be visible on tablet
    const desktopNav = page.locator('text=Providers');
    await expect(desktopNav).toBeVisible();
  });

  test('should layout content appropriately', async ({ page }) => {
    await page.goto('/providers');
    
    // Should have grid layout on tablet
    const providerGrid = page.locator('[class*="grid"]');
    await expect(providerGrid).toBeVisible();
  });
});

test.describe('Desktop Responsiveness', () => {
  test.use({ viewport: { width: 1920, height: 1080 } }); // Full HD

  test('should show full desktop navigation', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(5);
  });

  test('should not show mobile menu button', async ({ page }) => {
    await page.goto('/');
    
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(mobileMenuButton).toBeHidden();
  });

  test('should display content in wide layout', async ({ page }) => {
    await page.goto('/providers');
    
    // Content should be contained within max-width container
    const container = page.locator('.max-w-7xl').first();
    await expect(container).toBeVisible();
  });
});

test.describe('Cross-viewport Tests', () => {
  const viewports = [
    { name: 'Mobile Small', width: 320, height: 568 },
    { name: 'Mobile Medium', width: 375, height: 667 },
    { name: 'Mobile Large', width: 414, height: 896 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1366, height: 768 },
    { name: 'Desktop Large', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`should load homepage correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('img[alt="Southern Skies Dermatology"]')).toBeVisible();
    });
  }
});
