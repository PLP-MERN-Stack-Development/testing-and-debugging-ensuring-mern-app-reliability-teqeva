describe('App Loads', () => {
  it('shows welcome message', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="welcome"]').should('be.visible');
  });
});