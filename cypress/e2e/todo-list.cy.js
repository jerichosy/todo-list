describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('passes', () => {
    cy.get('h1').should('exist')
  })

  it('adds a todo', () => {
    cy.addItem('Walk the cat')

    // assert
    // cy.get('li').find('input[type=\"text\"]').eq(0).should('have.value', 'Walk the cat')
    cy.get('[data-test="todo-item"]').should('have.length', 1)
    cy.get('[data-test="todo-item"]').find('input[type="text"]').should('have.value', 'Walk the cat')
    // cy.get('[data-test="todo-item"]').should('contain', 'Walk the cat')
  })
})