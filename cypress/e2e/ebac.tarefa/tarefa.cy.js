describe("Teste  de adição ,Remoção e Edição da pagina",()=>{
    it('Deve Renderizar 3 campos de input',()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('form input').eq(0).type('wiliam').should('have.prop', 'tagName').should('eq', 'INPUT')      
        cy.get('form input').eq(1).type('wiliam.omura3@hotmail.com');
        cy.get('form input').eq(2).type('14997687459');
        cy.get('form button.adicionar').click();
        cy.get('div button.edit').click();
        cy.get('form input').eq(0).type('-novo2');  
        cy.get('div button.alterar').click();  
        cy.get('div button.delete').click();  

    })
})