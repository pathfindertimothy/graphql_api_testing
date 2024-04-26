import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url, requestHeaders } from '../auth_params/auth_params.js';
import { dextrade_tokens_payload } from '../data/data.js'

describe('DEX Request - DexTrade Tokens', async()=> {
    const document = dextrade_tokens_payload;
    let res;
    let len = 10;
    let trans = 'Transaction';
    let trans_status = 'TransactionStatus';
    let cost = 'Cost';
    let gas = 'Gas';
    let gas_price = 'GasPrice';

    before(async () => {
        try {
            res = await request({
                url, 
                document, 
                requestHeaders
            });
        } catch (error) {
            console.error('Error massage: ', error);
            process.exit(1);
        }     
    })

    it('To verify transaction status is true', async()=> {
        const result = await res.EVM.DEXTradeByTokens[0];
        const transaction_status = result.TransactionStatus.Success
        // console.log(result);
        
        assert.strictEqual(true, transaction_status, 'Error: status not the same');
    })

    it('To verify transaction status is not false', async()=> {
        const result = await res.EVM.DEXTradeByTokens[0];
        const transaction_status = result.TransactionStatus.Success
        
        expect(transaction_status).not.eq(false);
    })

    it(`To verify transaction properties ${cost}, ${gas} and ${gas_price} are present`, async()=> {
        const result = await res.EVM.DEXTradeByTokens[0].Transaction;
        
        expect(result).haveOwnProperty(cost);
        expect(result).haveOwnProperty(gas);
        expect(result).haveOwnProperty(gas_price);
    })

    it(`To verify {DEXTradeByTokens} object has properties ${trans} and ${trans_status}`, async()=> {
        const result = await res.EVM.DEXTradeByTokens[0];
        
        expect(result).haveOwnProperty(trans);
        expect(result).haveOwnProperty(trans_status);
    })

    it('To verify {DEXTradeByTokens} object is an array of objects', async()=> {
        const result = await res.EVM.DEXTradeByTokens;
        
        expect(result).instanceOf(Array);
    })

    // to verify the response payload is an object
    it('To verify {EVM} is an instance of an object', async()=> {
        const result = await res.EVM;
     
        expect(result).instanceOf(Object);
    })

    // to verify that the response payload is not an array
    it('To verify {EVM} is not an instance of an array', async()=> {
        const result = await res.EVM;
        
        expect(result).not.instanceOf(Array);
    })

    it(`To verify the transaction count is ${len}`, async()=> {
        const result = await res.EVM.DEXTradeByTokens;
        
        expect(result).length(len);
    })

    // resonse object should not be empty
    it('To verify response object is not empty', async()=> {
        const result = await res.EVM.DEXTradeByTokens;
        
        expect(result).not.empty
    })
})

