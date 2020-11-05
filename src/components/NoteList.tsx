import * as theme from '@/ui/theme'
import { margin, percent } from 'csx'
import { media, style } from 'typestyle'
import { component } from 'vue-tsx-support'

import noteStore from '@/store/noteStore'

import Note from '@/components/Note'

export default component({
	name: 'NoteList',
	render() {
		const notes = noteStore.allNotes

		if (!notes.length) {
			return <p class="enhanced-style"><b>Zero</b> notes</p>
		}

		return (
			<div>
				<p class="enhanced-style"><b>{notes.length}</b> note{notes.length === 1 ? '' : 's'}</p>
				<ul class={styleNoteList}>
					{notes.map(note => <Note note={note} />)}
				</ul>
			</div>
		)
	},
})

const styleNoteList = style(
	{
		display: 'flex',
		flexWrap: 'wrap',
		listStyle: 'none',
		margin: margin(20, 0),
		overflow: 'auto',
		padding: 0,
		width: percent(100),
	},

	media(
		{
			maxWidth: theme.computerBreakpoint,
		}, {
			margin: 0,
		},
	),
)
