import { expect, should } from 'chai';
import { request } from 'graphql-request';
import { url, requestHeaders } from '../auth_params/auth_params.js';
import { dextrades_payload } from '../data/data.js';

describe('Dex Request - DexTrades', async()=> {
    const document = dextrades_payload;
    let res;
    let cur = 'Currency';

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

    it('To verify the value of fungigle parameter is true', async()=> {
      const result = await res.EVM.DEXTrades;
      const [ item_one ] = result;
      const buy = item_one.Trade.Buy;
      const { Currency: {Fungible} } = buy;
    
      expect(Fungible).eq(true);
    })

    it('To verify the value of fungigle parameter is not false', async()=> {
      const result = await res.EVM.DEXTrades;
      const [ item_one ] = result;
      const buy = item_one.Trade.Buy;
      const { Currency: { Fungible } } = buy;

      expect(Fungible).not.eq(false);
    })

    it(`To verify the response payload has a ${cur} parameter`, async()=> {
        const result = await res.EVM.DEXTrades;
        const [ item_one ] = result;
        const { Trade: { Buy }} = item_one;

        expect(Buy).haveOwnProperty(cur);
    })

    // response object should not be empty
    it('To verify response object is not empty', async()=> {
        const result = await res.EVM.DEXTrades;

        expect(result).not.empty
    })

    it('To verify the property type of {amount} is a string', async()=> {
        const result = await res.EVM.DEXTrades;
        const [ item_one ] = result;
        const { Trade: { Buy: {Amount} }} = item_one;

        expect(Amount).to.be.a('string');
    })

    it('To verify the property type of {amount} is not an integer', async()=> {
        const result = await res.EVM.DEXTrades;
        const [ item_one ] = result;
        const { Trade: { Buy: {Amount} }} = item_one;

        expect(Amount).to.not.be.an('integer');
    })

    it('To verify the property type of {fungible} is boolean', async()=> {
        const result = await res.EVM.DEXTrades;
        const [ item_one ] = result;
        const buy = item_one.Trade.Buy;
        const { Currency: { Fungible } } = buy;
        

        expect(Fungible).to.be.a('boolean');
    })
})

