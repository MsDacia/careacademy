// https://docs.cypress.io/api/introduction/api.html

describe('Access note-taking app', () => {
	it('should view the note-taking root url', () => {
		cy.visit('/')
	})

	it('should have note-taking header app', () => {
		cy.contains('h1', 'Notes')
	})

	it('should have zero notes in note-taking app', () => {
		cy.contains('span', 'Zero')
		cy.contains('p', 'notes')
	})

	it('should be able to add a new note to note-taking', () => {
		cy.contains('p', 'Add New Note')
	})
})
