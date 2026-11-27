import {test,expect} from '@playwright/test'

test('LoginHero Website',async({page})=>
{  
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveTitle('The Internet');

})