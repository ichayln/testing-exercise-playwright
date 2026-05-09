import { test, expect } from '@playwright/test';

test ('Test Add-To-Cart', async({ page }) => {
 await page.goto('https://www.demoblaze.com/')

 //Choose product
 await page.getByRole('link', { name: 'Nokia lumia' }).click()

 //Verify detail
 await expect(page.getByRole('heading', { name: 'Nokia lumia' })).toBeVisible()

 //click add to cart
 await page.getByRole('link', { name: 'Add to cart' }).click()

 //Wait
  await page.waitForTimeout(2000);

 //Click cart
  await page.locator('#cartur').click();

  //Tunggu cart load
  await page.waitForSelector('#tbodyid');

  //Verify cart
  await expect(page.locator('#tbodyid')).toContainText('Nokia lumia');

//Screenshoot categories Monitor
await page.screenshot({ path: 'screenshoot/07-add-to-cart.png', fullPage: true });

});