import {test,expect} from '@playwright/test'

test("Network interception",async({page})=>
{
    await page.route('**/api/employees',async route=>
    {
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([
                {
                    id:1,
                    name:'Remya',
                    department:'QA'
                }
            ])
        })

    })

    await page.goto('https://example.com')
    const response=await page.evaluate(async()=>
    {
        const result=await fetch('/api/employees');
        return await result.json();
    })

})