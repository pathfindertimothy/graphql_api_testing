

const url = 'https://streaming.bitquery.io/graphql';
const requestHeaders = {
    "Content-Type": "application/json",
    'X-API-KEY': `${process.env.TOKEN}`,
    'Authorization': `${process.env.BEARER_TOKEN}`
}

export { url, requestHeaders }
