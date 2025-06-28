describe('Saucedemo Login Functionality Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  // Positive test cases

  it('should login successfully with standard_user', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should login successfully with problem_user', () => {
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should login successfully with performance_glitch_user', () => {
    cy.get('[data-test="username"]').type('performance_glitch_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should login successfully with visual_user', () => {
    cy.get('[data-test="username"]').type('visual_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should show error for locked_out_user', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should login with error_user (error simulation)', () => {
    cy.get('[data-test="username"]').type('error_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  // Negative test cases

  it('should show error for invalid username with valid password', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should show error for valid username with invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrongpassword');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should show error for empty username and password', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should show error for empty username with valid password', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should show error for valid username with empty password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

});
