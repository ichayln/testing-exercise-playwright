import { test, expect } from '@playwright/test';

test('Test Checkout', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  // Choose product
  await page.getByRole('link', { name: 'Nokia lumia' }).click();

  // Verify detail
  await expect(
    page.getByRole('heading', { name: 'Nokia lumia' })
  ).toBeVisible();

  // Wait for alert dialog
  const dialogPromise = page.waitForEvent('dialog');

  // Click add to cart
  await page.getByRole('link', { name: 'Add to cart' }).click();

  // Verify dialog
  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('Product added');
  await dialog.accept();

  // Click cart
  await page.locator('#cartur').click();

  // Wait cart load
  await page.waitForSelector('#tbodyid');

  // Verify cart
  await expect(page.locator('#tbodyid')).toContainText('Nokia lumia');

  // Click place order
  await page.getByRole('button', { name: 'Place Order' }).click();

  // Isi form
  await page.fill('#name', 'Budi');
  await page.fill('#country', 'Indonesia');
  await page.fill('#city', 'Jakarta');
  await page.fill('#card', '6789');
  await page.fill('#month', '07');
  await page.fill('#year', '2029');

  // Click purchase
  await page.getByRole('button', { name: 'Purchase' }).click();

  // Verify success message
  await expect(page.locator('.sweet-alert')).toContainText(
    'Thank you for your purchase'
  );

  // Screenshot success message
  await page.screenshot({
    path: 'screenshoot/08-checkout.png',
    fullPage: true,
  });
});