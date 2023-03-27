/// <reference types="Cypress" />

describe('4th Test Suite: Alert/Confirm window, Invoke', function(){
    it('My First Test Case', function(){
        
        //Alert window
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        //Cypress auto accepts alerts and popups
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //Cypress has capability of browser events (ref: catalog of events)
        
        //window:alert is the event which get fired on alert open
        //so you are firing the event through Cypress to get access to that alert
        cy.on('window:alert',(str) => {
            //from Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.on('window:confirm',(str) => {
            //from Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Cypress has ability to manipulate the DOM
        //Cypress do not work with child window open on new tab, which has attribute 'target' in the DOM element
        //So, we need to remove the attribute 'target' to open the link in same browser window
        //Use 'Invoke' to do jQuerry action 'removeAttr()' before click on the link
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        
        cy.url().title().should('include', 'Rahul Shetty Academy')

        cy.go('back')

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})