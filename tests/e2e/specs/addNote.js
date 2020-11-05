// https://docs.cypress.io/api/introduction/api.html

describe('Add New Note', () => {
	it('should select add new note', () => {
		cy.contains('p', 'Add New Note').click()
	})

	it('should add new note', function () {
		cy.get('textarea[name=personalNote]').as('personalNote')
			.type('Record new season of The Twilight Zone')
			.trigger('blur')
			.should('have.value', 'Record new season of The Twilight Zone')
		cy.contains('div', 'Add Note').click()
	})
})
