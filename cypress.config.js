const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
//const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");

const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");

const sqlServer = require('cypress-sql-server');
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

const excelToJson = require('convert-excel-to-json');

async function setupNodeEvents(on, config) {
    config.db = {
        userName: "rsa",
        password: "Azure!10",
        server: "rsadbdemo2.database.windows.net",
        options: {
            database: "rahulshettyacademy",
            encrypt: true,
            rowCollectionOnRequestCompletion : true
        }
    }

    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    require('cypress-mochawesome-reporter/plugin')(on);

    // Cucumber preprocessor setup
    await addCucumberPreprocessorPlugin(on, config);

    const options = {
        ...browserify.defaultOptions,
         typescript: require.resolve("typescript"),
    };
    on('file:preprocessor', browserify(options))

    tasks = sqlServer.loadDBPlugin(config.db);
    on('task', tasks);

    on('task',{
        excelToJsonConverter(filePath)
        {
            const result =
                excelToJson({
                    source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
                });
          return result;
        }
    })

    on('task', {
        async writeExcelTest({searchText,replaceText,change,filePath})
        {

            const workbook = new ExcelJs.Workbook();
            await workbook.xlsx.readFile(filePath);
            const worksheet = workbook.getWorksheet('Sheet1');
            const output= await readExcel(worksheet,searchText);

            const cell = worksheet.getCell(output.row,output.column+change.colChange);
            cell.value = replaceText;
            //pending resolved rejected
            return workbook.xlsx.writeFile(filePath).then(()=>
            {
                return true;
            }).catch((error)=>
            {
                return false;
            })
        }
    })

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

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
        experimentalStudio: true,
        specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx,feature}',
//        supportFile: 'cypress/integration/cucumberBDD/rahulshetty/**/*.{js}',
        supportFile: false,
        //    url: "https://rahulshettyacademy.com",
        //    chromeWebSecurity: false,
        //    defaultCommandTimeout: 8000,
        //    pageLoadTimeout: 30000,
        //    reporter: 'mochawesome'
    },
});

/**
 This is the script to generate HTML report from JSON file
 There are 2 stetps
 Cucumber htmp report can be generated with the help of execution results
 The html report can read the test results from JSON file <- this is the basic requirement
 That means all test execution results should be in JSON format
 So, Cucumber html plugin can consumes this JSON file, read the test executions
 and generate JSON file into HTML format

 Objective: messages -> json file -> html
   1. messages -> json file
 1.1. we have to understand how to get our test results in to JSON file format
      in 'package.json', following instruction in this url, https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md
      to add this:
      "cypress-cucumber-preprocessor": {
          "json": {
            "enabled": true,
            "output": "cypress/cucumber-report/result.json"
          }
        },
 1.2. messages -> json file -> html
      following instruction in this url, https://github.com/cucumber/json-formatter
      to download "json-formatter" from Git, https://github.com/cucumber/json-formatter/releases/tag/v19.0.0
      rename it to "cucumber-json-formatter.exe"
      and place it under the project folder, same level as "cypress" folder

   2. json file -> html
      google "multiple cucumber html report", go to this url, https://www.npmjs.com/package/multiple-cucumber-html-reporter
      to install this
        npm install multiple-cucumber-html-reporter --save-dev
      to create a file "cucumber-html-report.js" with content refers to the above url (section Usage)
      and place the .js file under the project folder

   Command to execute to generate report whenever you want
      node cucumber-html-report.js
*/