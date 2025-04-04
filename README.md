"# Udemy_CypressJavaScript-RahulShetty"
written by JavaScript on Visual Studio Code IDE

## Download and Install [Node.js](https://nodejs.org/en/download)

## Create a new project with Package.json

1. Create a project folder, example `"CypressAutomation"`
   example: `mkdir CyressAutomation`
2. Go to the created folder
   example: `cd CyressAutomation`
3. Create the `package.json` file by running this command
   `npm -i init`

## Install Cypress

4. Install Cypress via `npm`, example: `cd CyressAutomation`
    1. `npm install cypress --save-dev`
       *This will install Cypress locally as a dev dependency for the project*
    2. `npm install`
       This will do installation according to those defined in the `package.json` file
5. Folder `"node_modules"` is automatically created, which includes all Cypress library dependencies

## Open Cypress Test Runner

Run this command to open Cypress Test Runner, `node_modules/.bin/cypress open`

