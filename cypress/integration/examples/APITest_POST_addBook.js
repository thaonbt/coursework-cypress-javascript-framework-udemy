/// <reference types="Cypress" />

describe('My API Test suite', function(){

    it('My First Test Case', function(){

        // cy.request(method, url, body)
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Cypress Automation for API testing",
            "isbn": "azbcyd",
            "aisle": "12r6",
            "author": "John Foe"
            }).then(function(responseObject){
                // {"Msg": "successfully added", "ID": "azbcyd12r6"}
                expect(responseObject.status).to.eq(200)
                expect(responseObject.body).to.have.property("Msg", "successfully added")
        })

    })
})