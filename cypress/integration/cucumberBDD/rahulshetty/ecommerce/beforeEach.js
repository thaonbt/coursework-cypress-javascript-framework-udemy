beforeEach(function(){
    // root-level hook
    // runs once before all tests
    cy.fixture('rahulshetty/testdata').then(function(data){
        this.data=data
    })
})