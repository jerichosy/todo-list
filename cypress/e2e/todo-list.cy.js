import tasks from '../fixtures/tasks.json'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('host'))
  })

  it('adds a todo', () => {
    cy.addItem(tasks[0])

    // assert
    cy.get('li').should('have.length', 1)
    cy.get(`[data-test="todo-val-${tasks[0]}"]`).should('have.value', tasks[0])
    // cy.get('[data-test="todo-item"]').should('contain', 'Walk the cat')
  })

  it('check a todo', () => {
    cy.addItem(tasks[0])
    cy.get(`[data-test="todo-check-${tasks[0]}"]`).check()

    // assert
    cy.get(`[data-test="todo-check-${tasks[0]}"]`).should('be.checked')
  })

  it('hide a todo', () => {
    cy.addItem(tasks[0])
    cy.get(`[data-test="todo-check-${tasks[0]}"]`).click()

    cy.contains('Hide').click()

    // assert
    cy.get('li').should('not.exist')
  })

  it('show a todo', () => {
    cy.addItem(tasks[0])
    cy.get(`[data-test="todo-check-${tasks[0]}"]`).click()

    cy.contains('Hide').click()
    cy.contains('Show').click()

    // assert
    cy.get('li').should('exist')
  })

  it('remove a todo', () => {
    cy.addItem(tasks[0])

    cy.contains('Delete').click()

    // assert
    cy.get('li').should('not.exist')
  })
})