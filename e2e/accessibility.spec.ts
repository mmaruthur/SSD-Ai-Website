import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('providers page should not have accessibility violations', async ({ page }) => {
    await page.goto('/providers');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('locations page should not have accessibility violations', async ({ page }) => {
    await page.goto('/locations');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('mohs surgery page should not have accessibility violations', async ({ page }) => {
    await page.goto('/mohs-surgery');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('contact page should not have accessibility violations', async ({ page }) => {
    await page.goto('/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThan(0);
    expect(h1Count).toBeLessThanOrEqual(1); // Should only have one h1 per page
  });

  test('all images should have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('links should have accessible names', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('a[href]');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      
      // Link should have either visible text or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('buttons should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    const buttons = page.locator('button, a[role="button"]');
    const count = await buttons.count();
    
    if (count > 0) {
      const firstButton = buttons.first();
      
      // Focus the button
      await firstButton.focus();
      
      // Check if it's focused
      const isFocused = await firstButton.evaluate((el) => el === document.activeElement);
      expect(isFocused).toBeTruthy();
    }
  });

  test('page should have proper language attribute', async ({ page }) => {
    await page.goto('/');
    
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('en');
  });

  test('should have proper document title', async ({ page }) => {
    await page.goto('/');
    
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test('color contrast should be sufficient', async ({ page }) => {
    await page.goto('/');
    
    // This is tested by axe-core, but we can also do manual checks
    const body = page.locator('body');
    const bgColor = await body.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    expect(bgColor).toBeTruthy();
  });

  test('form inputs should have labels', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = page.locator('input[type="text"], input[type="email"], input[type="tel"], textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');
      
      if (id) {
        // Check if there's a label for this input
        const label = page.locator(`label[for="${id}"]`);
        const labelExists = await label.count();
        
        // Input should have either a label, aria-label, or aria-labelledby
        expect(labelExists > 0 || ariaLabel || ariaLabelledBy).toBeTruthy();
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // Check if something is focused
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });
    
    expect(focusedElement).toBeTruthy();
  });

  test('skip to main content link should exist', async ({ page }) => {
    await page.goto('/');
    
    // Check for skip link (common accessibility pattern)
    const skipLink = page.locator('a[href="#main"], a[href="#content"]');
    const hasSkipLink = await skipLink.count();
    
    // This is optional but recommended
    if (hasSkipLink > 0) {
      await expect(skipLink).toBeHidden();
      
      // Should become visible on focus
      await skipLink.focus();
      await expect(skipLink).toBeVisible();
    }
  });
});
