import { test, expect } from '@playwright/test';

test('Test SIGNUP', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Click signup button
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');

  // Successfully sign-up
  await page.getByRole('button', { name: 'Sign up' }).click();

  // Screenshot page sign-up - negative
  await page.screenshot({
    path: 'screenshoot/02-signup-Neg.png',
    fullPage: true,
  });
});