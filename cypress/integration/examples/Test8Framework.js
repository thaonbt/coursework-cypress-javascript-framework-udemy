/// <reference types="Cypress" />
//https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks

before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture('testdata').then(function(data){
        this.data=data
    })
  })


describe('8th Test Suite: TestData files, Hooks borrowed from Mocha, customized commands (methods)', function(){
    it('My First Test Case', function(){
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        
        //Input data from json file in 'fixtures' folder
        cy.get("form input[name='name']").type(this.data.name)
        cy.get('select').select(this.data.gender)

        //Assertion
        cy.get("form input[name='name']").should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.pause()
        cy.get("h4 input[name='name']").should('have.value', this.data.name).debug()
    })

    it('My Second Test Case', function(){
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        
        cy.get('a').contains('Shop').click()
        cy.wait(2000)

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
    })
})