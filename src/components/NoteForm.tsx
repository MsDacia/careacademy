import { component } from 'vue-tsx-support'
import * as shortid from 'shortid'
import noteStore, { Note } from '@/store/noteStore'

export default component({
	name: 'NoteForm',
	data() {
		return {
			personalNote: '',
			showErrorMessage: false,
		}
	},
	computed: {
		isDisabled(): boolean {
			return !this.personalNote
		},
	},
	mounted(): void {
		if (noteStore.selectedNote) this.personalNote = noteStore.selectedNote.personalNote
	},

	methods: {
		/**
		 * Successful adding of note on submit
		 */
		onSuccess(): void {
			this.showErrorMessage = false

			const noteInfo: Note = {
				uid: noteStore.selectedNote?.uid ?? shortid.generate(),
				personalNote: this.personalNote,
			}

			noteStore.selectedNote ? noteStore.updateNote(noteInfo) : noteStore.addNewNote(noteInfo)

			this.resetForm()
		},

		/**
		* Reset v-model back to default state
		*/
		resetForm(): void {
			this.personalNote = ''
		},
	},

	render() {
		return (
			<div>
				<textarea
					name="personalNote"
					aria-label="Type a note"
					aria-required="true"
					v-model_trim={this.personalNote}></textarea>

				<div>
					<div onClick={() => this.onSuccess()}>
						{noteStore.activePanelComponent === 'update-note' ? 'Update' : 'Add'} Note
					</div>
					<div onClick={() => this.resetForm()} data-message="Reset form">Reset</div>
				</div>

				<p>{noteStore.errorMessage}</p>
			</div>
		)
	},
})
