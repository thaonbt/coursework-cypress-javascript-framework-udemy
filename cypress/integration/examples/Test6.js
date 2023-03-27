/// <reference types="Cypress" />

describe('6th Test Suite: Mouse hover', function(){
    it('My First Test Case', function(){
        
        //Mouse hover events are not supported in Cypress directly
        //Alternately, use jQuery or force click
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', '#top')

        //Cypress is able to click hidden element
        // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click({force:true})
        cy.url().should('not.include', '#top')

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})