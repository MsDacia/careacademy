import prop from 'vue-strict-prop'
import { component } from 'vue-tsx-support'

import noteStore, { Note } from '@/store/noteStore'

export default component({
	name: 'Note',
	props: {
		note: prop.ofType<Note>().required,
	},
	render(): JSX.Element {
		return (
			<li key={this.note.uid}>
				<p>{this.note.personalNote}</p>

				<div>
					<p onClick={() => noteStore.deleteNote(this.note.uid)}>Delete Note</p>
					<p onClick={() => noteStore.showSidePanel(this.note)}>Update Note</p>
				</div>
			</li>
		)
	},
})
