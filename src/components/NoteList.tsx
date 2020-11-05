import { component } from 'vue-tsx-support'

import noteStore from '@/store/noteStore'

import Note from '@/components/Note'

export default component({
	name: 'NoteList',
	render() {
		const notes = noteStore.allNotes

		if (!notes.length) {
			return <p><b>Zero</b> notes</p>
		}

		return (
			<div>
				<p><b>{notes.length}</b> note{notes.length === 1 ? '' : 's'}</p>
				<ul>
					{notes.map(note => <Note note={note} />)}
				</ul>
			</div>
		)
	},
})
