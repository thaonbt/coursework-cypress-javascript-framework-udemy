/// <reference types="Cypress" />

describe('7th Test Suite: Open link in new Window', function(){
    it('My First Test Case', function(){
        
        //Mouse hover events are not supported in Cypress directly
        //Alternately, use jQuery or force click
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        cy.get('#opentab').then(function(el){
            var urlText = el.prop('href')
            
            cy.log(urlText)

            if(urlText!='https://rahulshettyacademy.com'){
                urlText = 'http://www.qaclickacademy.com/'
            }
            
            cy.visit(urlText)
            //This leads to an error because Cypress understand the 'urlText' is not the sub domain of the current site
            //https://on.cypress.io/cannot-visit-second-unique-domain
            //But on cypress": "^12.5.1, cypress can do after add script to handle uncaught exception
        })

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})