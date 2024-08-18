describe('Fundamentals tests', () => {
  
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Title is correct', () => {
    cy.get('.fundamentals_header__yRsdA') // Select the element with the class name
  .contains(/Testing Fundamentals/i); // Assert that it contains the text 
  })

  it('First item is clickable', () => {
    cy.get('[data-test="describeBlock"]').click() // Select the first item by data-test attribute
    cy.get('[data-test="describeBlock"]').contains("Your tests will exist in a describe block.").should('be.visible')
  
    cy.get('[data-test="describeBlock"]').within(()=>{
      cy.get('div[role = button]').click()
    }) // Select the first item by data-test attribute
    cy.get('[data-test="describeBlock"]')
     .contains("Your tests will exist in a describe block.").should('not.be.visible')
  })
})