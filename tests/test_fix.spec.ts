const { test, expect } = require('@playwright/test');
const { browserFixture } = require('./fixtures');

test.use({ browserName: 'chromium' });

test('My test', async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// Use the fixture in the test
test('My test with fixture', async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// Use the fixture again in another test
test('My other test with fixture', async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
