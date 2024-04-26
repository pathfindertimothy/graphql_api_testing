// // provide your token: remove the curly brace and provide token
// const token = '{provide token}';

// // provide your bearer_token: remove the curly brace and provide token
// const bearer_token = 'Bearer {provide bear_token}';

// provide your token
const token = 'BQY6y8mDwhwud2uBsJEynwZJ9wVfMC47';
// provide your bearer_token
const bearer_token = 'Bearer ory_at_lVC8dqKts8FDLp5OLYWZEYVXolrwU8tyvk54hxR_rWk.hbbtKqo01rM7N12MBBr7ncvINX5pRAZYJC-llkjkjMs';

const url = 'https://streaming.bitquery.io/graphql';
const requestHeaders = {
    "Content-Type": "application/json",
    'X-API-KEY': token,
    'Authorization': bearer_token
}

export { url, requestHeaders }
