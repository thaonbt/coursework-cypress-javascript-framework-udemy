/// <reference types="Cypress" />

describe('1st Test Suite: Work with Locators', function(){
    it('My First Test Case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        //selenium get hit url in browser, cypress get acts like findElements of selenium
        cy.get('.search-keyword').type('ca')
        //cypress is automatically wait whenever finding the loading on the page, but that does not work here, so we add wait
        cy.wait(2000)
        cy.get('.product').should('have.length', 5) //- there is 1 hidden element on the page
        cy.get('.product:visible').should('have.length', 4)

        cy.get(':nth-child(3) > .product-action').click()
        //Parent child chaining
        // cy.get('.products').find('.product').should('have.length', 4)
        // cy.get('.products').find('.product').eq('2').contains('ADD TO CART').click()
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').eq('2').contains('ADD TO CART').click().then(function(){
            console.log('from Synchronous command: hello')
        })

        console.log('from Asynchronous command: hello')

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name').text()
            if(textVeg.includes('Cashews')){
                // $el.find('button').click()  -- this way is depreceated
                cy.wrap($el).find('button').click({force: true})
            }
        })


        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        // const logo=cy.get('.brand') <- create allias for locator
        // cy.log(logo.text())         <- invalid run according to asynchronous, should as below
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})