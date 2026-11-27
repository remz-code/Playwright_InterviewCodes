import {test,expect} from '@playwright/test'

test('WebTables',async({page})=>
{

    await page.goto("https://the-internet.herokuapp.com/tables");
    const row=page.locator("#table1 tbody tr").filter({hasText:'Smith',exact: true });
    const count=await row.count();
    console.log(count);

        await expect(row).toBeVisible();


   //await row.getByRole('button',{ name:'Edit' }).click();
   


})