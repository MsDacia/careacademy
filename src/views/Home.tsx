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
				<header>
					<h1>Personal Notes</h1>
				</header>

				<section>
					<NoteList />
				</section>

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
			</main>
		)
	},
})
