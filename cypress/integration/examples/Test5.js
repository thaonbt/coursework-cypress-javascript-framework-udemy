/// <reference types="Cypress" />

describe('5th Test Suite: Table', function(){
    it('My First Test Case', function(){
        
        //Alert window
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")

        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $lists) => {
            const courseText = $el.text()
            if(courseText.includes('Python')){
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })
    

    // it('My  Test Case', function(){
    //    //test step
    // })
})