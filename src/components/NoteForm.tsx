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
		onSubmit(): void {
			this.showErrorMessage = false

			const noteInfo: Note = {
				uid: noteStore.selectedNote?.uid ?? shortid.generate(),
				personalNote: this.personalNote,
			}

			noteStore.selectedNote ? noteStore.editNote(noteInfo) : noteStore.addNewNote(noteInfo)

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
					data-test="personal-note-input"
					v-model_trim={this.personalNote}></textarea>

				<div>
					<div onClick={() => this.onSubmit()} data-test="submit-note-form">
						{noteStore.activePanelComponent === 'edit-note' ? 'Edit' : 'Add'} Note
					</div>
					<div onClick={() => this.resetForm()} data-test="reset-note-form">Reset</div>
					<div onClick={() => noteStore.hideSidePanel()} data-test="cancel-note-form">Cancel</div>
				</div>

				<p>{noteStore.errorMessage}</p>
			</div>
		)
	},
})
