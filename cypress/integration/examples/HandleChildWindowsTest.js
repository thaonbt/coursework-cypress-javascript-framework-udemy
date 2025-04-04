describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
           cy.get(".blinkingText").invoke('removeAttr','target').click();
           cy.get("h1").should('contain','Documents request');
        })
});