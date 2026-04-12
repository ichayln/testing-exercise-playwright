// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

 // Expects page to have a heading with the name of $360.
  await expect(page.getByRole('heading', { name: '$360' })).toBeVisible(); 

  // await page.getByRole('link', { name: 'addToCart(1)' }).click();
});

test('Add to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

// Expects page to have a heading with the name of cart.
  await page.locator('text=Add to cart').click();
});



