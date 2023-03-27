/// <reference types="Cypress" />
import HomePage from "../../../pageObjects/HomePage"
import ProductPage from "../../../pageObjects/ProductPage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
let name
let gender

// Given I open Ecommerce page
Given('I open Ecommerce page', ()=>{
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

// When I add item to Cart
When('I add item to Cart', function(){
    //Input data from json file in 'fixtures' folder
    homePage.getNameBox().type(this.data.name)
    homePage.getGenderDropdown().select(this.data.gender)

    //Assertion
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaurRadio().should('be.disabled')
    homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)

    homePage.getShopTab().click()

    const products = this.data.productName
    products.forEach(function(element) {
        cy.selectProduct(element)
    })

    productPage.getCheckoutBtn().click()
})

// And Validate the total prices
When('Validate the total prices', ()=>{
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
})

// Then Select the country submit and verify Thank you message
Then('Select the country submit and verify Thank you message', ()=>{
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

// When I fill the form details
When('I fill the form details', function(dataTable){
    // [[name, gender], [bobz, male]]
    // dataTable.rawTable[1] => [bobz, male]
    // dataTable.rawTable[1][0] => [bobz]
    name = dataTable.rawTable[1][0]
    gender = dataTable.rawTable[1][1]
    homePage.getNameBox().type(dataTable.rawTable[1][0])
    homePage.getGenderDropdown().select(dataTable.rawTable[1][1])
})
// Original copy from spec (means, works with data in fixtures)
// When('I fill the form details', function(){
//     //Input data from json file in 'fixtures' folder
//     homePage.getNameBox().type(this.data.name)
//     homePage.getGenderDropdown().select(this.data.gender)
// }) 

// Then Validate the forms behaviour
Then('Validate the forms behaviour', function(){
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaurRadio().should('be.disabled')
    homePage.getTwoWayDataBindingBox().should('have.value', name)
}) 
// Original copy from spec (means, works with data in fixtures)
// Then('Validate the forms behaviour', function(){
//     homePage.getNameBox().should('have.attr', 'minlength', '2')
//     homePage.getEntrepreneaurRadio().should('be.disabled')
//     homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)
// }) 

// And Select the Shop page
Then('Select the Shop page', ()=>{
    homePage.getShopTab().click()
})