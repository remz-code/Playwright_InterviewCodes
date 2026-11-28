import{test,expect} from '@playwright/test'

test('Valid Login',{tag:['@smoke','@login']},async({page})=>
{
     await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

    await expect(page).toHaveURL(/inventory/);
});

test('Invalid login',{tag:['@regression','@login']},async({page})=>
{
     await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username')
        .fill('invalid_user');

    await page.getByPlaceholder('Password')
        .fill('wrong_password');

    await page.getByRole('button', { name: 'Login' })
        .click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});

test('Lockout User',async({page})=>
{
    await page.getByPlaceholder('Username')
        .fill('locked_out_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

        await expect(page.locator('[data-test="error"]')).toBeVisible();
});