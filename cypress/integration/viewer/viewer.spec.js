describe('viewer', () => {

    it('should visit viewer page', () => {

        cy.visit('http://localhost:8777/')
    })

    it('should load viewer', () => {

        cy.visit('http://localhost:8777/')

        cy.get('[data-cy=access-url]').type('ffdgdfgd dfg dfg df gdfg dfg')

        cy.get('[data-cy=viewer]').should('exist')
    })
})