# Description
- This is a mocha testing framework for testing graphql api

## Folder structure
- `api_test`: contains the test script files
- `auth_params`: contains authorization and url parameters
- `data`: contains payload data
- `mochaewsome-report`: contains the report in html and json format for generated test report
- `video`: contains a recording of the test running and also showing an html report of the test

## Pre-requisite
- System must have node.js and npm package installed
    - node version used is 20. It gives a token error if some lesser version are used
- Pull the repo from github to a local system
- Run: `npm install` to install all the packages needed
    - If the packages fail to install, install the following packages using npm
        - mocha: `npm install --save-dev mocha`
        - chai: `npm install --save-dev chai`
        - graphql-request: npm add graphql-request graphql
        - mochawesome: `npm install --save-dev mochawesome`
        -  dotenv: `npm install dotenv --save`
- Add your `token` and `bearer_token` in `.env` file
    - Make a copy of `.env.example` and remove the `.example` to create `.env` file
    - Add the `token` and `bearer_token`

## To run:
- To run all test scripts: `npm test`
    - This will generate a test report file: `mochawesome.html`
    - Copy path and place in a browser url to view the the html report
    - Check your `token` and `token_bearer` are correct in case of any authorization error or failure
