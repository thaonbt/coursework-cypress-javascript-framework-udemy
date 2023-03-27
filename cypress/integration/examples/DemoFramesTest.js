/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function(){
    it('Demo example', function(){
        
        //Need to install cypress-iframe to work with frames
        //npm install -D cypress-iframe
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length','2')

    })
})