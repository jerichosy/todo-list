import tasks from '../fixtures/tasks.json'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
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
})