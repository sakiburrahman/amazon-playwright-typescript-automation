import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uat-universal.orbitax.com/');
  await page.getByRole('link', { name: 'Free Product Tour' }).click();
  await page.goto('http://uat-universal.orbitax.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('.container').first().click();
  await page.locator('span').filter({ hasText: 'Find out more' }).click();
  await page.locator('#offcanvasExample').getByText('Solutions').click();
  await page.goto('http://uat-universal.orbitax.com/about');
  await page.getByRole('link', { name: 'Create Account' }).click();
  await page1.frameLocator('iframe[name="a-unctv1iwc8r8"]').getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td').first().click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td:nth-child(4)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').getByRole('button', { name: 'Next' }).click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td').first().click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(4) > td').first().click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(4) > td:nth-child(2)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(4) > td:nth-child(3)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page1.frameLocator('iframe[name="c-unctv1iwc8r8"]').getByRole('button', { name: 'Verify' }).click();
  await page1.getByPlaceholder('First Name').click();
  await page1.getByPlaceholder('First Name').fill('DFSD');
  await page1.getByPlaceholder('Last name').click();
  await page1.getByPlaceholder('Last name').fill('SDSF');
  await page1.getByPlaceholder('Username').click();
  await page1.getByPlaceholder('Username').fill('sdfsdf');
  await page1.getByPlaceholder('Email Address').click();
  await page1.getByPlaceholder('Email Address').fill('sdfsfsf@io.com');
  await page1.getByPlaceholder('Company').click();
  await page1.getByPlaceholder('Company').fill('345345');
  await page1.locator('#Password').click();
  await page1.locator('#Password').fill('3452342');
  await page1.getByText('Get started Register for a free Orbitax account I agree to the Orbitax Privacy P').click();
  await page1.locator('#Password').click();
  await page1.locator('#Password').fill('S@kib11111');
  await page1.getByPlaceholder('Confirm Password').click();
  await page1.getByPlaceholder('Confirm Password').fill('S@kib11111');
  await page1.getByLabel('I agree to the Orbitax Privacy Policy').check();
  await page1.getByRole('button', { name: 'Register' }).click();
});


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uat-universal.orbitax.com/');
  await page.locator('.navbar-brand').first().click();
  await page.goto('http://uat-universal.orbitax.com/');
  await page.getByText('Global Tax Technology Experts').click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Login' }).click()
  ]);
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Create Account' }).click()
  ]);
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('#offcanvasExample').getByText('Solutions').click();
  await page.getByRole('dialog').click();
  await page.locator('#offcanvasExample').getByText('Solutions').click();
  await page.getByRole('dialog').click();
  await page.locator('#offcanvasExample').getByText('Tax Hub').click();
  await page.goto('http://uat-universal.orbitax.com/about');
});








import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat-universal.orbitax.com/');
  await page.frameLocator('iframe').locator('video').click();
  await page.getByText('Global Tax Technology Experts').click();
  await page.locator('app-hero-section').getByText('INTERNATIONAL TAX PLATFORM').click();
  await page.getByRole('heading', { name: 'Overview' }).click();
  await page.getByRole('heading', { name: 'How it works' }).click();
  await page.getByRole('heading', { name: 'Features' }).click();
  await page.getByRole('heading', { name: 'Explore the Orbitax International Tax Platform' }).click();
  await page.getByRole('link', { name: ' +1 518 337 1860' }).click();
  await page.getByRole('link', { name: ' info@orbitax.com' }).click();
  await page.getByText('Copyright © 2022 OrbitaxAll Rights ReservedPrivacy Policy').click();
});