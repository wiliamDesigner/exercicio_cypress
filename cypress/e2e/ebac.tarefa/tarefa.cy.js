describe("Teste de adição, Remoção e Edição da página", () => {
    

    beforeEach(()=>{

        cy.visit('https://agenda-contatos-react.vercel.app/');

        });

    it('Deve preencher as informações de um novo contato', () => {
        cy.get('form input').eq(0).type('wiliam').should('have.prop', 'tagName').should('eq', 'INPUT');
        cy.get('form input').eq(1).type('wiliam.omura3@hotmail.com');
        cy.get('form input').eq(2).type('14997687459');
        cy.get('form button.adicionar').click();
    });

    it('Deve editar as informações de um contato', () => {
        cy.get('.sc-gueYoa.jWEbWB button.edit').first().should('exist').and('be.visible').click()
        cy.get('form input').eq(0).type('-novo2');
        cy.get('div button.alterar').first().should('exist').and('be.visible').click();
    });

    it('Deve remover um contato', () => {
        cy.get('div button.delete').first().should('exist').and('be.visible').click();
    });

});
    

