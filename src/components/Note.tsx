import * as theme from '@/ui/theme'
import { border, margin, padding, percent } from 'csx'
import { media, style } from 'typestyle'
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
			<li class={styleListItem} key={this.note.uid}>
				<p>{this.note.personalNote}</p>

				<div class={styleNoteActions}>
					<p data-test="delete-personal-note" onClick={() => noteStore.deleteNote(this.note.uid)}>Delete Note</p>
					<p data-test="edit-personal-note" onClick={() => noteStore.showSidePanel(this.note)}>Edit Note</p>
				</div>
			</li>
		)
	},
})

const styleListItem = style(
	{
		backgroundColor: theme.opacityColorDarker,
		borderBottom: border({
			color: theme.colorPrimaryMedium,
			style: 'solid',
			width: 4,
		}),
		color: theme.colorPrimaryLight,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: margin(0, 20, 20, 0),
		maxWidth: 400,
		padding: padding(20, 14),
		width: percent(40),

		$nest: {
			'p': {
				fontSize: percent(150),
			},
		},
	},
	media(
		{
			maxWidth: theme.computerBreakpoint,
		}, {
			marginRight: 0,
			maxWidth: percent(100),
			width: percent(100),
		},
	),
)

const styleNoteActions = style({
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: margin(25),

	$nest: {
		'p': {
			color: theme.colorLight,
			fontSize: percent(100),

			$nest: {
				'&:hover': {
					color: theme.colorPrimaryHover,
					textDecoration: 'underline',
				},
			},
		},
	},
})
