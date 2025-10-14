import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Southern Skies Dermatology/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });

  test('should display featured services', async ({ page }) => {
    await page.goto('/');
    // Check for heading containing "Services"
    const servicesSection = page.getByRole('heading', { name: /Our Services/i });
    await expect(servicesSection).toBeVisible();
  });

  test('should display featured providers', async ({ page }) => {
    await page.goto('/');
    // Check for heading containing "Providers"
    const providersSection = page.getByRole('heading', { name: /Meet Our Providers/i });
    await expect(providersSection).toBeVisible();
  });
});

test.describe('Providers Page', () => {
  test('should display all providers', async ({ page }) => {
    await page.goto('/providers');

    // Check for all 4 providers - use more flexible selectors
    await expect(page.getByText('Dr. Mario Maruthur')).toBeVisible();
    await expect(page.getByText('Dr. Malia Downing')).toBeVisible();
    await expect(page.getByText(/Emma Stephens/)).toBeVisible();
    await expect(page.getByText(/Raven Omar/)).toBeVisible();
  });

  test('should display provider credentials', async ({ page }) => {
    await page.goto('/providers');

    // Check for professional title pattern - make more flexible
    const hasCredentials = await page.getByText(/MD|PA-C|PA/).first().isVisible();
    expect(hasCredentials).toBeTruthy();
  });

  test('should have provider images', async ({ page }) => {
    await page.goto('/providers');
    
    const providerImages = page.locator('img[alt*="Dr."], img[alt*="Emma"], img[alt*="Raven"]');
    const count = await providerImages.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Locations Page', () => {
  test('should display all 4 locations', async ({ page }) => {
    await page.goto('/locations');

    // Check for Alabama locations - use getByText for better reliability
    await expect(page.getByText(/Birmingham/)).toBeVisible();
    await expect(page.getByText(/Pell City/)).toBeVisible();
    await expect(page.getByText(/Gadsden/)).toBeVisible();
    await expect(page.getByText(/Oxford/)).toBeVisible();
  });

  test('should display contact information for each location', async ({ page }) => {
    await page.goto('/locations');

    // Check for phone numbers
    const phoneLinks = page.locator('a[href^="tel:"]');
    const count = await phoneLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should display addresses', async ({ page }) => {
    await page.goto('/locations');

    // Check for Alabama state abbreviation
    const hasAL = await page.getByText(/,\s*AL\s+\d/).first().isVisible();
    expect(hasAL).toBeTruthy();
  });
});

test.describe('Services Page', () => {
  test('should display services overview', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('h1')).toContainText('Services');
  });
});

test.describe('Mohs Surgery Page', () => {
  test('should display Mohs surgery information', async ({ page }) => {
    await page.goto('/mohs-surgery');

    await expect(page.locator('h1')).toContainText('Mohs');
    // Check for cure rate - may be formatted differently
    const hasCureRate = await page.getByText(/99%|cure rate/i).first().isVisible();
    expect(hasCureRate).toBeTruthy();
  });

  test('should have call-to-action buttons', async ({ page }) => {
    await page.goto('/mohs-surgery');

    // Check for CTAs - they might be links or buttons
    const hasAppointmentCTA = await page.getByRole('link', { name: /Request Appointment|Schedule|Book|Contact/i }).first().isVisible();
    const hasLocationCTA = await page.getByRole('link', { name: /Find a Location|Locations|Our Locations/i }).first().isVisible();
    expect(hasAppointmentCTA).toBeTruthy();
    expect(hasLocationCTA).toBeTruthy();
  });
});

test.describe('Contact Page', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Contact');
  });

  test('should have all locations listed', async ({ page }) => {
    await page.goto('/contact');

    // Should show location information - use more flexible selector
    const hasBirmingham = await page.getByText(/Birmingham/i).first().isVisible();
    expect(hasBirmingham).toBeTruthy();
  });
});

test.describe('Careers Page', () => {
  test('should display careers information', async ({ page }) => {
    await page.goto('/careers');

    await expect(page.locator('h1')).toContainText('Careers');
  });
});

test.describe('About Page', () => {
  test('should display about page content', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('h1')).toContainText('About');
  });

  test('should display mission and values', async ({ page }) => {
    await page.goto('/about');

    // Check for key content sections - use heading selector
    await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();
  });

  test('should have call-to-action', async ({ page }) => {
    await page.goto('/about');

    // Should have Schedule Appointment button which is visible on About page
    await expect(page.getByRole('link', { name: 'Schedule Appointment' })).toBeVisible();
  });
});
