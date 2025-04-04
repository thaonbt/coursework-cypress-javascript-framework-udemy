/// <reference types="cypress"/>
// **************************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
//
// **************************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 *  @type {Cypress.PluginConfig}
 */


// Follow this page to let spec works with SQLdb
// https://www.npmjs.com/package/cypress-sql-server

const sqlServer = require('cypress-sql-server');
const dbConfig = require('../../cypress.json')

module.exports = (on, config) => {
    // 'on' is used to hok into various events Cypress emits
    // 'config' is the resolved Cypress config
    tasks = sqlServer.loadDBPlugin(dbConfig.db);
    on('task', tasks);
}

// MOVED THE ABOVE SCRIPT TO FILE cypress.config.js