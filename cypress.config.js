const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

const sqlServer = require('cypress-sql-server')
const dbConfig = {
  "db": {
      "userName": "rsa",
      "password": "Rahul2023",
      "server": "rsadbdemo2023.database.windows.net",
      "options": {
          "database": "rahulshettyacademy",
          "encrypt": true,
          "rowCollectionOnRequestCompletion" : true
      }
  }
}

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  tasks = sqlServer.loadDBPlugin(dbConfig.db);
  on('task', tasks);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// // FOR WORKS WITH SQL DATABASE
// module.exports = (on, config) => {
//   // 'on' is used to hok into various events Cypress emits
//   // 'config' is the resolved Cypress config
//   tasks = sqlServer.loadDBPlugin(dbConfig.db);
//   on('task', tasks);
// }

module.exports = defineConfig({
  projectId: 'o8xyd6',
  pageLoadTimeout: 70000,
  defaultCommandTimeout: 6000,
  reporter: 'mochawesome',
  env: {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    // runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/integration/./*.{js,jsx,ts,tsx,feature}'
    // specPattern: 'cypress/integration/examples/*.{js,jsx,ts,tsx,feature}',
    // specPattern: 'cypress/integration/cucumberBDD/rahulshetty/*.feature'
    specPattern: 'cypress/integration/**/*.{js,feature}'
  },
});

/** 
// There are 2 stetps
// Cucumber htmp report can be generated with the help of execution results
// The html report can read the test results from JSON file <- this is the basic requirement
// That means all test execution results should be in JSON format
// So, Cucumber html plugin can consumes this JSON file, read the test executions
// and generate JSON file into HTML format
//
// Objective: messages -> json file -> html
//   1. messages -> json file
// 1.1. we have to uderstand how to get our test results in to JSON file format
//      in 'package.json', following instruction in this url, https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md
//      to add this:
//      "cypress-cucumber-preprocessorr": {
//          "json": {
//            "enabled": true,
//            "output": "cypress/cucumber-report/result.json"
//          }
//        },
// 1.2. messages -> json file -> html
//      following instruction in this url, https://github.com/cucumber/json-formatter
//      to download "json-formatter" from Git, https://github.com/cucumber/json-formatter/releases/tag/v19.0.0
//      rename it to "cucumber-json-formatter.exe"
//      and place it under the project folder, same level as "cypress" folder
//
//   2. json file -> html
//      google "multiple cucumber html report", go to this url, https://www.npmjs.com/package/multiple-cucumber-html-reporter
//      to install this
//        npm install multiple-cucumber-html-reporter --save-dev
//      to create a file "cucumber-html-report.js" with content refers to the above url (section Usage)
//      and place the .js file under the project folder
//
//   Command to execute to generate report whenever you want
//      node cucumber-html-report.js
//
*/