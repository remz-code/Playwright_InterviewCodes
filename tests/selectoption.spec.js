import {test,expect} from '@playwright/test'

test('Select options',async({page})=>
{

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown=page.locator('#dropdown');
    await dropdown.selectOption('1');
})