describe('formTest',()=>{
    beforeEach(() => {
        cy.visit('/forms')
    })
    it("test empty email",()=>{
       
        cy.get('[data-test="submit"]').click()
        cy.get('[data-test="message"]').contains('Invalid')
    })
    it("test valid email",()=>{
        cy.get('div input').type('test@email.com')
        cy.get('[data-test="submit"]').click()
        cy.get('[data-test="message"]').contains(/successfully/i)
    })
    it("test invalid email",()=>{
        cy.get('div input').type('invalid@em')
        cy.get('[data-test="submit"]').click()
        cy.get('[data-test="message"]').contains('Invalid email: invalid@em!')
    })
})