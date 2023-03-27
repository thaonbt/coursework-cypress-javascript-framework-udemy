/// <reference types="Cypress" />

describe('My API Fake Test suite', function(){

    it('My First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Cypress.config('requestTimeout', 30000)
        // Cypress.config('responseTimeout', 30000)
        // cy.intercept({requestObject}, {responseObject})
        cy.intercept(
        {
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Shetty'
        },{
            statusCode: 200,
            body: [{
                "book_name":"RobotFramework",
                "isbn":"121856",
                "aisle":"982053"  }]
        }).as('bookretrievals')
        // as('bookretrievals', {requestTimeout: 10000})

        cy.get('button[class="btn btn-primary"]').click()

        cy.wait('@bookretrievals').should(({request, response}) => {
            cy.get('tr').should('have.length', response.body.length+1)
            // response.body.length+1 <- 1 row plus table header, means 2
        })

        cy.get('p').should('have.text', 'Sorry we have only one book available')



        //length of the response array = rows of the table
    })
})