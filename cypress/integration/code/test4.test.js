/// <reference types="cypress" />

describe('Invalid username validpassword',()=>{
    it('visit url', ()=> {

    cy.visit('http://127.0.0.1:8084/')
    cy.title().should('eq','Document')
    cy.get('.sc-bdVaJa > div').contains('qa.code-quiz.dev')
    })

    it('login page', ()=>{
    cy.get('[placeholder="Enter Username"]').type('happy')
    cy.get('[placeholder="password"]').type('test1')
   
    //cy.get('.sc-bZQynM').contains('LOGIN').should('be.visible').click()
    cy.get('.sc-bZQynM').click()
    })
 
})