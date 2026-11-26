import {test,expect} from '@playwright/test'
import{loginData} from '../test-data/user.js'
for(const data of loginData)
{
test(`Signin is required - ${data.username}`,async({page})=>
{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page.getByText('Products')).toBeVisible();

})
}
