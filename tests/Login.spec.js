import {test,expect} from '@playwright/test'

test('Login the application',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.locator("//h2[text()=' Secure Area']")).toBeVisible();
    await page.context().storageState
    ({
        path:'Playwright/user.json'
    })

   
})