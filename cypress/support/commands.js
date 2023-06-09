// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addItem', (task) => {
    cy.get('[data-test="add-todo-input"]').type(task)
    cy.get('[data-test="add-todo-button"]').click()
})

Cypress.Commands.add('addSubItem', (task) => {
    cy.get('[data-test="add-sub-input"]').type(task)
    cy.get('[data-test="add-sub-button"]').click()
})

Cypress.Commands.add('deleteItem', (task) => {
    cy.get(`[data-test="todo-del-${task}"]`).click()
})

Cypress.Commands.add('deleteSubItem', (task) => {
    cy.get(`[data-test="sub-del-${task}"]`).click()
})