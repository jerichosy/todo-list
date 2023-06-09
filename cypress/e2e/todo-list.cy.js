import tasks from '../fixtures/tasks.json'

describe('todo-list', () => {
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

  it('add a subtask', () => {
    cy.addItem(tasks[0])
    cy.addSubItem(tasks[1])

    // assert
    cy.get('li').should('have.length', 2)
    cy.get(`[data-test="sub-val-${tasks[1]}"]`).should('have.value', tasks[1])
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

    let showHideBtn = cy.contains('Hide')
    showHideBtn.click()
    showHideBtn.click()

    // assert
    cy.get('li').should('exist')
  })

  it('remove a todo', () => {
    cy.addItem(tasks[0])

    cy.deleteItem(tasks[0])

    // assert
    cy.get('li').should('not.exist')
  })

  it('remove a subtask', () => {
    cy.addItem(tasks[0])
    cy.addSubItem(tasks[1])

    cy.deleteSubItem(tasks[1])

    // assert
    cy.get('li').should('have.length', 1)
  })
})