# Description
- This is a mocha testing framework for graphql api

## Folder structure
- api_test: contains the test script files
- auth_params: contains authorization and url parameters
- data: contains payload data
- mochaewsome-report: contains the report in html and json format for generated test report

## Pre-requisite
- System must have node.js and npm package installed
- Pull the repo from github to a local system
- Run: `npm install` to install all the packages needed
    - If the packages fail to install, install the following packages using npm
        - mocha: `npm install --save-dev mocha`
        - chai: `npm install --save-dev chai`
        - graphql-request: npm add graphql-request graphql
        - mochawesome: `npm install --save-dev mochawesome`
- Add your `token` and `token_bearer` in the `auth_params.js` file

## To run:
- To run all test scripts: `npx mocha ./api_test/*.js`
    - This will generate a test report: mochawesome.html
    - Copy path and place in a brower url to view the report
    - Check your `token` and `token_bearer` are correct in case of any authorization error or failure
- To run single test script: `npx mocha ./api_test/{script name}.js`
