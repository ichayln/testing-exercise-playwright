import { test, expect } from '@playwright/test';

//function random username
function generateUserName(){
    return 'user_' + Date.now()
}

//function random username
function generatePassword(){
    return 'pass_' + Date.now()
}

test ('Test SIGNUP', async({ page }) => {
 await page.goto('https://www.demoblaze.com/')

 //Generate random username
 const username = generateUserName()

 //Generate random password
 const password = generatePassword()

//Click signup button
 await page.getByRole('link', { name: 'Sign up' }).click()
 await page.getByRole('textbox', { name: 'Username:' }).fill(username)
 await page.getByRole('textbox', { name: 'Password:' }).fill(password)

//Successfully sign-up
 await page.getByRole('button', { name: 'Sign up' }).click()

//Screenshoot page sign-up
await page.screenshot({ path: 'screenshoot/01-signup.png', fullPage: true });

});