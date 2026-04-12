import { test, expect } from '@playwright/test';

test ('Test Checkout', async({ page }) => {
 await page.goto('https://www.demoblaze.com/')

//Choose product
 await page.getByRole('link', { name: 'Nokia lumia' }).click()

//Verify detail
 await expect(page.getByRole('heading', { name: 'Nokia lumia' })).toBeVisible()

//Click add to cart
 await page.getByRole('link', { name: 'Add to cart' }).click()

//Jeda
  await page.waitForTimeout(2000);

//Click cart
  await page.locator('#cartur').click();

//Tunggu cart load
  await page.waitForSelector('#tbodyid');

//Verify cart
  const cartText = await page.locator('#tbodyid').textContent();
  expect(cartText).toContain('Nokia lumia');

//Click place oder
  await page.getByRole('button', { name: 'Place Order' }).click()

//Isi form 
  await page.fill('#name', 'Budi')
  await page.fill('#country', 'Indonesia')
  await page.fill('#city', 'Jakarta')
  await page.fill('#card', '6789')
  await page.fill('#month', '07')
  await page.fill('#year', '2029')

//Click purchase
  await page.getByRole('button', { name: 'Purchase' }).click()

//Verify success message
  await expect(page.locator('.sweet-alert')).toContainText('Thank you for your purchase')

//Screenshoot success message
await page.screenshot({ path: 'screenshoot/08-checkout.png', fullPage: true });

});