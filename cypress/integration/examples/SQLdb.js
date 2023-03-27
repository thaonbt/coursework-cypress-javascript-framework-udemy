/// <reference types="Cypress" />

// Data in SQL database
// [dbo].[Presons]
// ID  | LastName | FirstName | City
// 953 | Tom B    | Senat     | Norway
// 9535| Jerssey  | Senat     | Southway

describe('My SQL database Test suite', function(){

    it('Database Interaction', function(){
        cy.sqlServer('SELECT * FROM [dbo].[Persons]').then(function(result){
            result.forEach(element => {
                cy.log(element[1])
            });
        })
    })

})