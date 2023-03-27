// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import ProductPage from "../integration/pageObjects/ProductPage"

const productPage = new ProductPage()

Cypress.Commands.add('selectProduct', (productName) => { 
    productPage.getProductTitle().each(($el, index, $lists) => {
        const text = $el.text()
        if(text.includes(productName)){
            cy.log(text)
            productPage.getProductAddBtn().eq(index).click()
        }
    })
 })

 Cypress.Commands.add('LoginAPI', () => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {
            "userEmail": "rahulshetty@gmail.com", 
            "userPassword": "Iamking@00"
        }).then(function(response){
            cy.log(response.body.token)
            expect(response.status).to.eq(200)
            Cypress.env('token', response.body.token)
    })
 })

 // This is from cypress-sql-server
 Cypress.Commands.add('sqlServer', (query) => {
    if(!query) {
      throw new Error('Query must be set');
    }

    cy.task('sqlServer:execute', query).then(response => {
      let result = [];

      const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

      if(response) {
        for (let i in response) {
          result[i] = [];
          for (let c in response[i]) {
            result[i][c] = response[i][c].value;
          }
        }
        result = flatten(result);
      } else {
        result = response;
      }

      return result;
    });
  });

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })