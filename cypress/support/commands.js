Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Andreza')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('andreza.silva@uol.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})