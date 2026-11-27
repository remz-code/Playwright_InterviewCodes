import {test,expect} from '@playwright/test'
test.use({ storageState: 'Playwright/user.json' });

test('Logout from the website', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/secure');

    await expect(page.getByText('Welcome to the Secure Area')).toBeVisible();

    await page.getByRole('link',{ name: 'Logout' }).click();

    await expect(page).toHaveURL(/login/);

    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();

});