// https://docs.cypress.io/api/introduction/api.html

describe('Update Current Note', () => {
	it('should be able to edit current note', function () {
		cy.get('.container-form')
			.should('have.class', 'pen').click()
	})

	it('should have current note populated', function () {
		cy.get('textarea[name=personalNote]')
			.should('have.value', 'Record new season of The Twilight Zone')
	})

	it('should update current note', function () {
		cy.get('textarea[name=personalNote]').as('personalNote')
			.type('Record new season of The Masked Singer')
			.trigger('blur')
			.should('have.value', 'Record new season of The Masked Singer')
		cy.contains('div', 'Update Note').click()
	})
})
