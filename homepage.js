class homepage {
    verifyOnhomepage() {
      cy.url().should('include', '/inventory.html');
    }
  
    clickFirstProduct() {
      cy.get('.inventory_item').first().click();
    }
  }
  
  export default homepage;
  