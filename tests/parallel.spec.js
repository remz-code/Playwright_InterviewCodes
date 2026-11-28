import {test,expect} from '@playwright/test'

test('Sauce title validation',async({page})=>
{

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);

})
test('Herkuapp title validation',async({page})=>
{

    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveTitle(/The Internet/);

})