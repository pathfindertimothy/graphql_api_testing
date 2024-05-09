import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url, requestHeaders } from '../auth_params/auth_params.js';
import { transfers_payload } from '../data/data.js';

describe('DEX Request - Transfers', async()=> {
    const document = transfers_payload;
    let res;
    let proto_name = 'erc20';
    let true_value = true;
    
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

    it(`To verify transaction status is ${true_value}`, async()=> {
        const result = await res.EVM.Transfers;
        const [ item_one ] = result;
        const {TransactionStatus: {Success}} = item_one;
        const transactionStatus = Success;
        
        assert.strictEqual(true_value, transactionStatus, 'Error: TransactionStatus is not the same');
    })

    it(`To verify protocol name is ${proto_name}`, async()=> {
        const result = await res.EVM.Transfers;
        const [ item_one ] = result;
        const { Transfer: {Currency: {ProtocolName}}} = item_one;
        const protocolName = ProtocolName;
        
        assert.equal(proto_name, protocolName, 'Error: Protocol Name not same');
    })

    it('To verify {from} and {sender} address are the same', async()=> {
        const result = await res.EVM.Transfers;
        const [ item_one ] = result;
        const { Transaction: { From} } = item_one;
        const transFrom = From;
        const { Transfer: { Sender }} = item_one;
        const sender = Sender;
        
        expect(transFrom).eq(sender);
    })
})

