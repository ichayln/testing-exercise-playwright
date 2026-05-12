import { test, expect } from '@playwright/test';

test('Test LOGIN', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Click login button
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Expected successfully login with valid data
  await page.getByRole('link', { name: 'Welcome admin' }).isVisible();

  // Screenshot successfully login
  await page.screenshot({
    path: 'screenshoot/03-login.png',
    fullPage: true,
  });
});

