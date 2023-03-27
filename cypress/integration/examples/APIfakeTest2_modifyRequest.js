/// <reference types="Cypress" />

describe('My API Fake Test suite', function(){

    it('My First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Cypress.config('requestTimeout', 30000)
        // Cypress.config('responseTimeout', 30000)
        // cy.intercept({requestObject}, {responseObject})
        cy.intercept(
            'GET', 
            'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Shetty)', 
            (req) => {
                // Modify AuthorName
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra',
                req.continue((res) => {
                    // expect(res.statusCode).to.equal(403)
            })
        }).as('dummyUrl')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')
        
    })
})