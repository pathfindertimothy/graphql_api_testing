const token = 'BQY6y8mDwhwud2uBsJEynwZJ9wVfMC47';
const bearer_token = 'Bearer ory_at_lVC8dqKts8FDLp5OLYWZEYVXolrwU8tyvk54hxR_rWk.hbbtKqo01rM7N12MBBr7ncvINX5pRAZYJC-llkjkjMs';

const url = 'https://streaming.bitquery.io/graphql';
const requestHeaders = {
    "Content-Type": "application/json",
    'X-API-KEY': token,
    'Authorization': bearer_token
}

export { url, requestHeaders }
