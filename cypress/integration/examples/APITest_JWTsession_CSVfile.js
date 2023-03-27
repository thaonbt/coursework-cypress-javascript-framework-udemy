/// <reference types="Cypress" />

const neatCSV = require('neat-csv')
let productName

describe('JWT Session', function(){

    // it('Logged in through Local Storage by using token', function(){
    it('Logged in through Local Storage by using token', async() => {
        cy.LoginAPI().then(function(){
            cy.visit("https://rahulshettyacademy.com/client", {
                //code to set token in the browser's Local Storage
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get('.card-body b').eq(1).then(function(element){
            productName = element.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click({force:true});
        cy.get("[routerlink*='cart']").click()
        cy.contains('Checkout').click()
        cy.wait(2000)

        cy.get('[placeholder*="Country"]').type('ind')
        cy.wait(1000)

        cy.get('.ta-results button').each(($el, index, $list) => {
            if($el.text().match('Ocean')){
                cy.log('inside IF condition')
                cy.wrap($el).click()
            }
        })

        
        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.get('.order-summary button').click()


        /** Working with CSV */
        //Use this below for the project folder location
        //Cypress.config('fileServerFolder')
        //neatCSV need files in text format, so csv file need to convert
        // Way1
        // cy.readFile(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_rahulshetty.csv')
        // .then(function(text){
        //     const csv = neatCSV(text)
        // })
        // Way2
        cy.readFile(Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_rahulshetty.csv')
        .then(async (text) => {
        // .then(async function(text){
            const csv = await neatCSV(text)
            console.log(csv)

            //Cannot access like this because name has space,
            //if no space, it can
            // csv[0].ProductName
            //have to do this
            const actualProductNameCSV = csv[0]['Product Name']
            expect(productName).to.equal(actualProductNameCSV)
        })
    })

})