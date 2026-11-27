import {test,expect} from '@playwright/test'

test('Multple window',async({page})=>
{
    const context = await browser.newContext({
        ignoreHTTPSErrors: true
    });
    await page.goto('https://the-internet.herokuapp.com/windows');
    const[newPage]=await Promise.all([
        page.context().waitForEvent('page'),
            page.getByText('Click Here').click()
        ]);
        const title=await newPage.title();
        console.log(title);
    await expect(newPage).toHaveTitle('New Window')
    await newPage.close();
})