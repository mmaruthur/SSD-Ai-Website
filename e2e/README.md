# E2E Testing with Playwright

This directory contains end-to-end tests for the Southern Skies Dermatology website using Playwright.

## Test Structure

```
e2e/
├── navigation.spec.ts    # Navigation, header, menu tests
├── pages.spec.ts         # Page content and functionality tests
├── responsive.spec.ts    # Mobile/tablet/desktop responsive tests
├── accessibility.spec.ts # A11y tests using axe-core
└── README.md             # This file
```

## Running Tests

### Run all tests (headless)
```bash
npm run test:e2e
```

### Run tests with UI (interactive mode)
```bash
npm run test:e2e:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:e2e:headed
```

### Run tests in debug mode
```bash
npm run test:e2e:debug
```

### Run tests on specific browser
```bash
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit
```

### Run mobile tests only
```bash
npm run test:e2e:mobile
```

### View last test report
```bash
npm run test:e2e:report
```

## Test Coverage

### Navigation Tests (`navigation.spec.ts`)
- ✓ Header logo display and navigation
- ✓ All main navigation links
- ✓ Page-to-page navigation
- ✓ Mobile menu toggle
- ✓ Provider dropdown menu
- ✓ Services dropdown menu
- ✓ "Plan Your Visit" dropdown menu

### Page Content Tests (`pages.spec.ts`)
- ✓ Homepage hero and featured sections
- ✓ Providers page with all 4 providers
- ✓ Locations page with all 4 Alabama locations
- ✓ Services overview page
- ✓ Mohs Surgery detailed page
- ✓ Contact page with form
- ✓ Careers page
- ✓ Before/After Mohs Surgery pages

### Responsive Tests (`responsive.spec.ts`)
- ✓ Mobile view (375px - iPhone SE)
- ✓ Tablet view (768px - iPad)
- ✓ Desktop view (1920px - Full HD)
- ✓ Mobile menu functionality
- ✓ Touch-friendly buttons
- ✓ Content stacking on mobile
- ✓ Cross-viewport compatibility

### Accessibility Tests (`accessibility.spec.ts`)
- ✓ Automated a11y scanning with axe-core
- ✓ Heading hierarchy
- ✓ Image alt text
- ✓ Link accessible names
- ✓ Keyboard navigation
- ✓ Form label associations
- ✓ Color contrast
- ✓ Language attributes
- ✓ Focus management

## Browser Support

Tests run on:
- ✅ Chromium (Chrome, Edge)
- ✅ Firefox
- ✅ WebKit (Safari)
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)
- ✅ Tablet (iPad Pro)

## Configuration

See `playwright.config.ts` in the root directory for:
- Test timeout settings
- Retry configuration
- Reporter options
- Browser and device configurations
- Base URL settings

## CI/CD Integration

Tests are configured to:
- Run in parallel for speed
- Retry failed tests 2x in CI
- Generate HTML reports
- Capture screenshots on failure
- Record videos on failure
- Generate JSON test results

## Writing New Tests

### Basic Test Structure
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });
});
```

### Accessibility Test
```typescript
import AxeBuilder from '@axe-core/playwright';

test('should have no a11y violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

### Mobile Test
```typescript
test.describe('Mobile Feature', () => {
  test.use({ viewport: { width: 375, height: 667 } });
  
  test('should work on mobile', async ({ page }) => {
    await page.goto('/');
    // Your test code
  });
});
```

## Best Practices

1. **Use data-testid for stable selectors**
   ```typescript
   <button data-testid="submit-button">Submit</button>
   await page.getByTestId('submit-button').click();
   ```

2. **Wait for network/animations**
   ```typescript
   await page.waitForLoadState('networkidle');
   await page.waitForSelector('.animated-element');
   ```

3. **Group related tests**
   ```typescript
   test.describe('Provider Pages', () => {
     test.beforeEach(async ({ page }) => {
       await page.goto('/providers');
     });
     // Tests here
   });
   ```

4. **Use meaningful test names**
   ❌ `test('test 1', async ({ page }) => { ... })`
   ✅ `test('should display all provider names and credentials', async ({ page }) => { ... })`

## Troubleshooting

### Tests failing locally?
1. Make sure dev server is running: `npm run dev`
2. Clear browser cache: `npx playwright --clear-cache`
3. Update browsers: `npx playwright install`

### CI/CD failures?
1. Check screenshots in test results
2. Review video recordings
3. Check trace files for detailed execution logs

### Slow tests?
1. Run specific test file: `npx playwright test navigation.spec.ts`
2. Run single test: `npx playwright test -g "should display logo"`
3. Use headed mode less frequently

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Axe Accessibility Testing](https://www.deque.com/axe/)
