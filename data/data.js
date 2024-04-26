import { gql } from 'graphql-request';

let dextrade_tokens_payload = gql `{
    EVM {
      DEXTradeByTokens(limit: {count: 10}) {
        Transaction {
          Cost
          Gas
          GasPrice
        }
        TransactionStatus {
          Success(selectWhere: true)
        }
      }
    }
}`

let dextrades_payload = gql `{
    EVM {
        DEXTrades(limit: {count: 2}) {
          Trade {
            Buy {
              Amount
              Currency {
                Fungible(selectWhere: true)
                Name
              }
            }
          }
        }
    }
}`

let transfers_payload = gql `{
    EVM(dataset: archive) {
      Transfers(limit: {count: 2}) {
        Transaction {
          From
          To
        }
        TransactionStatus {
          Success
        }
        Transfer {
          Amount
          Currency {
            Name(selectWhere: {is: "ETHER"})
            ProtocolName
          }
          Receiver
          Sender
        }
      }
    }
}`

let miner_rewards_payload = gql `{
  EVM {
    MinerRewards(limit: {count: 5}) {
      Reward {
        TxFees
        BurntFee
      }
      ChainId
    }
  }
}`

export { 
  dextrade_tokens_payload, 
  dextrades_payload, 
  transfers_payload,
  miner_rewards_payload
};