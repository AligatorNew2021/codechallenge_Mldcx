/// <reference types="cypress" />

describe('Valid username password-no name',()=>{
    it('visit url', ()=> {

    cy.visit('http://127.0.0.1:8084/')
    cy.title().should('eq','Document')
    cy.get('.sc-bdVaJa > div').contains('qa.code-quiz.dev')
    })

    it('login page', ()=>{
    cy.get('[placeholder="Enter Username"]').type('dummytree')
    cy.get('[placeholder="password"]').type('test1')
   
    cy.get('.sc-bZQynM').contains('LOGIN').should('be.visible').click()
    })

    it('verification page',()=>{
 
   //cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').find('.sc-bwzfXH > :nth-child(1) > :nth-child(2)').length > 0

  
    cy.get('.sc-bwzfXH > :nth-child(1) > :nth-child(2)') .as ('val0')
    cy.get('@val0').should('not.have.text','')
    cy.get('.sc-bwzfXH > :nth-child(2) > :nth-child(2)').as ('val1')
    cy.get('@val1').should('not.have.text','')
    cy.get('@val1').should('have.text','Mango')

    cy.get(':nth-child(3) > :nth-child(2)').as ('val2')
    cy.get('@val2').should('not.have.text','')
    cy.get('@val2').should('have.text','V for Vendetta')
    cy.get(':nth-child(4) > :nth-child(2)').as ('val3')
    cy.get('@val3').should('not.have.text','')
    cy.get('@val3').should('have.text','The last prime number')
    //cy.get('.sc-bdVaJa > div').contains('Hello Undefined')
    cy.contains('LOGOUT').should('exist')
    })

    it('logout check',()=>{
    cy.get('.sc-bxivhb').contains('LOGOUT').should('be.visible').click()
    cy.get('.sc-bdVaJa > div').contains('qa.code-quiz.dev')
    })

})