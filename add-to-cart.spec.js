import { test, expect } from '@playwright/test';

test('Test Add-To-Cart', async ({ page }) => {
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

  // Screenshot
  await page.screenshot({
    path: 'screenshoot/07-add-to-cart.png',
    fullPage: true,
  });
});