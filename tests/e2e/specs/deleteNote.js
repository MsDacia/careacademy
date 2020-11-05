// https://docs.cypress.io/api/introduction/api.html

describe('Delete Note', () => {
	it('should be able to delete a note', function () {
		cy.get('.container-form')
			.should('have.class', 'trash').click()
	})
})
