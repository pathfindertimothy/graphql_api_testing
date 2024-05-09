import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url } from '../auth_params/auth_params.js';
import { transfers_payload } from '../data/data.js';

describe('DEX Request - Error Handling', async()=> {
    const document = transfers_payload;
    let res;
    let auth_msg = 'Unauthorized';
    let error_status = 200;

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
        } catch (err) {
            const error_msg = err.response;
            const { error, status } = error_msg;

            expect(error).equal(auth_msg);
            assert.equal(401, status);
        }  
    })

    it(`To verify error status is not: ${error_status}`, async()=> {

        try {
            res = await request({
                url, 
                document, 
                requestHeaders
            });
        } catch (err) {
            const error_msg = err.response;
            const { error, status } = error_msg;

            expect(error).equal(auth_msg);
            assert.notEqual(status, error_status);
        }  
    })

})

