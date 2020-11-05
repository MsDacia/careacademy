import * as theme from '@/ui/theme'
import { padding, percent, rem } from 'csx'
import { style } from 'typestyle'
import { component } from 'vue-tsx-support'
import noteStore from '@/store/noteStore'

import AddNote from '@/components/actions/AddNote'
import EditNote from '@/components/actions/EditNote'
import NoteList from '@/components/NoteList'
import SidePanel from './SidePanel'

export default component({
	name: 'Home',
	render() {
		return (
			<main>
				<header class={styleHeaderContent}>
					<h1>Personal Notes</h1>
				</header>

				<aside>
					<SidePanel>
						{(() => {
							switch (noteStore.activePanelComponent) {
							case 'edit-note':
								return <EditNote />
							case 'add-note':
								return <AddNote />
							default:
								return null
							}
						})()}
					</SidePanel>
				</aside>

				<section>
					<NoteList />
				</section>
			</main>
		)
	},
})

const styleHeaderContent = style({
	alignContent: 'center',
	display: 'flex',
	justifyContent: 'flex-end',
	margin: 0,
	padding: 0,

	$nest: {
		'h1': {
			backgroundColor: theme.opacityColorDark,
			fontSize: rem(2),
			padding: padding(10, 40, 10, 20),
			position: 'relative',
			textAlign: 'right',
			width: percent(100),
		},
	},
})
