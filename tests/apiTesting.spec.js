import {test,expect} from '@playwright/test'


test('API Testing', async({request})=>
{
    const response=await request.post('https://jsonplaceholder.typicode.com/posts',

        {
            data:
            {
                title:'Playwright API Testing',
                body:'New course for it',
                UserId:1
            }
        });

        expect(response.status()).toBe(201)

        const responseBody=await response.json()
        expect(responseBody.title).toBe('Playwright API Testing')
        expect(responseBody.body).toBe('New course for it')
        expect(responseBody.id).toBeTruthy()


})