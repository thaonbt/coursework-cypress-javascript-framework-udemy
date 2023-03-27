/// <reference types="Cypress" />

describe('2nd Test Suite: Work with Locators (cont.)', function(){
    it('My First Test Case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        //selenium get hit url in browser, cypress get acts like findElements of selenium
        cy.get('.search-keyword').type('ca')
        //cypress is automatically wait whenever finding the loading on the page, but that does not work here, so we add wait
        cy.wait(2000)

        //Parent child chaining
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name').text()
            if(textVeg.includes('Cashews')){
                // $el.find('button').click()  -- this way is depreceated
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})