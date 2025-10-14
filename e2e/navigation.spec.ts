import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with logo', async ({ page }) => {
    const logo = page.locator('img[alt="Southern Skies Dermatology"]');
    await expect(logo).toBeVisible();
  });

  test('should navigate to homepage when logo is clicked', async ({ page }) => {
    await page.goto('/providers');
    await page.click('img[alt="Southern Skies Dermatology"]');
    await expect(page).toHaveURL('/');
  });

  test('should have all main navigation links', async ({ page }) => {
    const navLinks = ['Home', 'Providers', 'Services', 'Locations', 'About', 'Bill Pay', 'Careers', 'Contact Us'];

    for (const linkText of navLinks) {
      // Check only in header to avoid footer/duplicate links
      const link = page.locator('header').getByRole('link', { name: linkText }).first();
      await expect(link).toBeVisible();
    }
  });

  test('should navigate to Providers page', async ({ page }) => {
    await page.click('text=Providers');
    await expect(page).toHaveURL('/providers');
    await expect(page.locator('h1')).toContainText('Providers');
  });

  test('should navigate to Services page', async ({ page }) => {
    await page.click('text=Services');
    await expect(page).toHaveURL('/services');
  });

  test('should navigate to Locations page', async ({ page }) => {
    await page.click('text=Locations');
    await expect(page).toHaveURL('/locations');
    await expect(page.locator('h1')).toContainText('Locations');
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.click('text=Contact Us');
    await expect(page).toHaveURL('/contact');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('should show mobile menu button on mobile', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
      await expect(mobileMenuButton).toBeVisible();
    }
  });

  test('should open mobile menu when hamburger is clicked', async ({ page, viewport }) => {
    if (viewport && viewport.width < 768) {
      const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
      await mobileMenuButton.click();
      
      // Check if mobile menu links are visible
      const mobileHomeLink = page.locator('.md\\:hidden >> text=Home');
      await expect(mobileHomeLink).toBeVisible();
    }
  });

  test('should have providers dropdown menu', async ({ page }) => {
    const providersLink = page.locator('header a[href="/providers"]').first();
    await providersLink.hover();

    // Wait for dropdown transition to complete
    await page.waitForTimeout(500);

    // Check for provider names in dropdown - use header context to avoid footer matches
    const drMario = page.locator('header >> text=Dr. Mario Maruthur');
    const drMalia = page.locator('header >> text=Dr. Malia Downing');

    await expect(drMario).toBeVisible();
    await expect(drMalia).toBeVisible();
  });

  test('should have services dropdown menu', async ({ page }) => {
    const servicesLink = page.locator('header a[href="/services"]').first();
    await servicesLink.hover();

    // Wait for dropdown transition to complete
    await page.waitForTimeout(500);

    // Check for service links in dropdown - use header context
    const mohsSurgery = page.locator('header >> text=Mohs Surgery');
    await expect(mohsSurgery).toBeVisible();
  });
});
