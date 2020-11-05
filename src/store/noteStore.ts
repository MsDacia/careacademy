import Vue from 'vue'

export interface Note {
	uid: string
	personalNote: string
}

type Panel = 'add-note' | 'edit-note' | null

const state = Vue.observable({
	activePanelComponent: null as Panel | null,
	allNotes: JSON.parse(window.localStorage.getItem('personalNotes') ?? '[]') as Note[],
	errorMessage: '',
	selectedNote: null as Note | null,
})

export default {
	// Getters
	get activePanelComponent() {
		return state.activePanelComponent
	},
	get allNotes() {
		return state.allNotes
	},
	get errorMessage() {
		return state.errorMessage
	},
	get isSidePanelOpen() {
		return !!state.activePanelComponent
	},
	get selectedNote() {
		return state.selectedNote
	},


	// Actions
	addNewNote(note: Note) {
		state.allNotes.push(note)

		try {
			window.localStorage.setItem('personalNotes', JSON.stringify(state.allNotes))
			this.hideSidePanel()
			return true
		} catch (error) {
			state.errorMessage = error
			return false
		}
	},

	deleteNote(noteId: string) {
		const index = state.allNotes.findIndex(note => note.uid === noteId)
		state.allNotes.splice(index, 1)
		window.localStorage.setItem('personalNotes', JSON.stringify(state.allNotes))
	},

	hideSidePanel() {
		state.activePanelComponent = null
	},

	showSidePanel(note?: Note) {
		if (note) {
			state.activePanelComponent = 'edit-note'
			state.selectedNote = note
		} else {
			state.activePanelComponent = 'add-note'
			state.selectedNote = null
		}
	},

	editNote(note: Note) {
		const index = state.allNotes.findIndex(c => c.uid === note.uid)
		Vue.set(state.allNotes, index, note)
		window.localStorage.setItem('personalNotes', JSON.stringify(state.allNotes))

		this.hideSidePanel()
	},
}
