class HomePage{

    getShopTab(){
        return cy.get('a').contains('Shop')
    }

    getNameBox(){
        return cy.get("form input[name='name']")
    }

    getGenderDropdown(){
        return cy.get('select')
    }

    getEntrepreneaurRadio(){
        return cy.get('#inlineRadio3')
    }

    getTwoWayDataBindingBox(){
        return cy.get("h4 input[name='name']")
    }
}

export default HomePage