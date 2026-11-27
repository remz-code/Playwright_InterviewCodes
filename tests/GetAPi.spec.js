import {test,expect} from '@playwright/test'
import { request } from 'node:http'

test('Get API Request', async({request})=>
{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const responseBody= await response.json();

    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).toContain('sunt aut facere repellat');
    expect(responseBody.id).toBeTruthy();
})