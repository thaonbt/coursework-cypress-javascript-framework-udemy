/// <reference types="Cypress" />
//https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture('rahulshetty/testdata').then(function(data){
        this.data=data
    })
  })

describe('8th Test Suite: Shopping cart workflow, Environment variables', function(){
    // Declare here will replace the one in the 'cypress.config.js' and apply for ALL this spec
    Cypress.config('defaultCommandTimeout', 7000)

    const homePage = new HomePage()
    const productPage = new ProductPage()

    it('My First Test Case', function(){
        
        // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env('url') + '/angularpractice/')
        
        //Input data from json file in 'fixtures' folder
        homePage.getNameBox().type(this.data.name)
        homePage.getGenderDropdown().select(this.data.gender)

        //Assertion
        homePage.getNameBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaurRadio().should('be.disabled')
        homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)
    })

    it('My Second Test Case', function(){
        const url = Cypress.env('url')
        // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(url + '/angularpractice/')
        
        homePage.getShopTab().click()
        // Declare here will replace the one in the 'cypress.config.js' and apply for only for the above action 
        // (like Explicit wait in Selenium)
        Cypress.config('defaultCommandTimeout', 7000)
        // cy.wait(2000)

        cy.selectProduct('iphone X')
        // cy.get('h4.card-title').each(($el, index, $lists) => {
        //     const text = $el.text()
        //     if(text.includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })

        //Javacript array foreach
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        // const array1 = ['a', 'b', 'c'];
        // array1.forEach(element => console.log(element));
        // // Expected output: "a"
        // // Expected output: "b"
        // // Expected output: "c"

        const products = this.data.productName
        products.forEach(function(element) {
            cy.selectProduct(element)
        })

        productPage.getCheckoutBtn().click()
        //Sum products
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $lists) => {
            const actualText = $el.text()  //Ex: ₹. 100000
            cy.log(actualText) 

            //remove "₹. "
            var res = actualText.split(' ')    //res[0]=₹.; res[1]=100000
            res = res[1].trim()
            cy.log(res) 

            //Sum
            sum = Number(sum) + Number(res)
        }).then(function(){
            cy.log(sum)
        })
        //Assertion of Total
        cy.get('h3 strong').then(function(element){
            const amountText = element.text()
            cy.log(amountText)

            var res = amountText.split(' ')
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        cy.get('.btn-success').click()

        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout', 7000)

        cy.get('.suggestions a').click()
        cy.get('#checkbox2').check({force:true})
        cy.get('input[type="submit"]').click()

        // cy.get('div.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('div.alert').should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('div.alert').then(function(element){
            const actualText=element.text()
            if(actualText.includes('Success')){
                cy.log(actualText)
            }
            expect(actualText.includes('Success')).to.be.true
        })

    })
})