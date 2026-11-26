import {test,expect} from '@playwright/test'

test('LoginHero Website',async({page})=>
{  
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveTitle('The Internet');

})