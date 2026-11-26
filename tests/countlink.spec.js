import {test,expect} from '@playwright/test'

test('Count the links',async({page})=>
{
    await page.goto('https://elementalselenium.com/');
    const count=await  page.locator('a').count();
    console.log(count);
})