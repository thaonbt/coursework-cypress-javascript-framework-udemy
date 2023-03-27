/// <reference types="Cypress" />

const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

let data

Given ('Get data from Cypress env', function(){
    data = Cypress.env('testData', this.data.productName)
})

Then ('Print data', function(){
    data.forEach(element => {
        cy.log(element)
    });
})

Given('Get runned data', function(){
    cy.log(data)
})

Then('Print gotten data', function(){
    data.forEach(element => {
        cy.log(element)
    });
})