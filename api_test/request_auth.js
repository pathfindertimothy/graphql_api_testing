import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url } from '../auth_params/auth_params.js';
import { transfers_payload } from '../data/data.js';

describe('DEX Request - Error Handling', async()=> {
    const document = transfers_payload;
    let res;
    let auth_msg = 'Unauthorized';

    const requestHeaders = {
        "Content-Type": "application/json",
        'X-API-KEY': 'Bldjfkdjlka;kljdfkldj',
        'Authorization': 'Bearer dlkadjfldkjafldjaklfjdljkfjl'
    }

    it(`To verify invalid auth token produces auth error: ${auth_msg}`, async()=> {

        try {
            res = await request({
                url, 
                document, 
                requestHeaders
            });
        } catch (error) {
            const error_msg = error.response;
            const error_message = error_msg.error;
            const status_value = error_msg.status;

            expect(error_message).contain(auth_msg);
            assert.equal(401, status_value);
        }  
    })

})

