import { test, expect } from '@playwright/test'

test ('Test Browsing-Product', async({ page }) => {
 await page.goto ('https://www.demoblaze.com/')

//Screenshoot page awal
await page.screenshot({ path: 'screenshoot/01-homepage.png', fullPage: true });

//Verify browsing categories phones
 await page.getByRole('link', { name: 'Phones' }).click()
 await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible()

 //Screenshoot categories phones
await page.screenshot({ path: 'screenshoot/04-Brows-Phones.png', fullPage: true });

//Verify browsing categories laptops
 await page.getByRole('link', { name: 'Laptops' }).click()
 await expect(page.getByRole('link', { name: 'Sony vaio i5' })).toBeVisible()

//Screenshoot categories Laptop
await page.screenshot({ path: 'screenshoot/05-Brows-Laptop.png', fullPage: true });

//Verify browsing categories Monitors
 await page.getByRole('link', { name: 'Monitors' }).click()
 await expect(page.getByRole('link', { name: 'Apple monitor' })).toBeVisible()

 //Screenshoot categories Monitor
await page.screenshot({ path: 'screenshoot/06-Brows-Monitor.png', fullPage: true });

})