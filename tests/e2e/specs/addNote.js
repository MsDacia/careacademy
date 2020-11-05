// https://docs.cypress.io/api/introduction/api.html

describe('Add New Note', () => {
	it('should select add new note', () => {
		cy.get('[data-test=add-personal-note]').click()
	})

	it('should add new note', function () {
		cy.get('[data-test=personal-note-input]')
			.type('Record new season of The Twilight Zone')
			.trigger('blur')
			.should('have.value', 'Record new season of The Twilight Zone')
		cy.get('[data-test=submit-note-form]').click()
	})
})
