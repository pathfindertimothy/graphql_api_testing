import { expect, assert } from 'chai';
import { request } from 'graphql-request';
import { url, requestHeaders } from '../auth_params/auth_params.js';
import { miner_rewards_payload } from '../data/data.js';

describe('DEX Request - MinerRewards: Error Handling', async()=> {
    const document = miner_rewards_payload;
    let res;
    let burnt_fee = 'BurntFee';

    it(`To verify error message due to invalid parameter: ${burnt_fee}`, async()=> {

        try {
            res = await request({
                url, 
                document, 
                requestHeaders
            });
        } catch (error) {
            const error_msg = error.response;
            const status_value = error_msg.status
            const invalid_parameter = error_msg.errors[0].message;
            
            assert.equal(200, status_value);
            expect(invalid_parameter).contain(`Cannot query field "${burnt_fee}"`);
            expect(invalid_parameter).contain('Cannot query field "BurntFee" on type "EVM_MinerReward_Fields_Reward". Did you mean "BurntFees"?')
        }  
    })

})

