// provide your token: remove the curly brace and provide token
const token = '{provide token}';

// provide your bearer_token: remove the curly brace and provide token
const bearer_token = 'Bearer {provide bear_token}';

const url = 'https://streaming.bitquery.io/graphql';
const requestHeaders = {
    "Content-Type": "application/json",
    'X-API-KEY': token,
    'Authorization': bearer_token
}

export { url, requestHeaders }
