class ProductPage {

    getCheckoutBtn(){
        return cy.get('.btn-primary')
    }

    getProductTitle(){
        return cy.get('h4.card-title')
    }

    getProductAddBtn(){
        return cy.get('button.btn.btn-info')
    }

}

export default ProductPage