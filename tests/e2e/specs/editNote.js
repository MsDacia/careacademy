// https://docs.cypress.io/api/introduction/api.html

describe('Edit Current Note', () => {
	// Add a note prior to editing
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

	it('should be able to edit current note', function () {
		cy.get('[data-test=edit-personal-note]').click()
	})

	it('should have current note populated', function () {
		cy.get('[data-test=personal-note-input]')
			.should('have.value', 'Record new season of The Twilight Zone')
	})

	it('should edit current note', function () {
		cy.get('[data-test=personal-note-input]')
			.clear()
			.type('Record new season of The Masked Singer')
			.trigger('blur')
			.should('have.value', 'Record new season of The Masked Singer')
		cy.get('[data-test=submit-note-form]').click()
	})
})
