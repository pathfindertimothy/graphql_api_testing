import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url, requestHeaders } from '../auth_params/auth_params.js';
import { transfers_payload } from '../data/data.js';

describe('DEX Request - Transfers', async()=> {
    const document = transfers_payload;
    let res;
    let proto_name = 'erc20';
    
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

    it('To verify transaction status is {true}', async()=> {
        const result = await res.EVM.Transfers[0];
        const transactionStatus = result.TransactionStatus.Success;
        
        assert.strictEqual(true, transactionStatus, 'Error: TransactionStatus is not the same');
    })

    it(`To verify protocol name is ${proto_name}`, async()=> {
        const result = await res.EVM.Transfers[0];
        // console.log(result);
        const protocolName = result.Transfer.Currency.ProtocolName
        
        assert.equal(proto_name, protocolName, 'Error: Protocol Name not same');
    })

    it('To verify {from} and {sender} address are the same', async()=> {
        const result = await res.EVM.Transfers[0];
        const transFrom = result.Transaction.From;
        const sender = result.Transfer.Sender;
        
        expect(transFrom).eq(sender);
    })
})

