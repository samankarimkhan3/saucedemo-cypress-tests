class productpage {
    verifyOnproductpage() {
      cy.url().should('include', '/inventory-item.html');
      cy.get('.inventory_details_name').should('be.visible');
    }
  }
  
  export default productpage;
  