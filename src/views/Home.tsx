import { component } from 'vue-tsx-support'
import noteStore from '@/store/noteStore'

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
					{/* Notes will go here */}
				</section>

				<aside>
					<SidePanel>
						{(() => {
							switch (noteStore.activePanelComponent) {
							case 'update-note':
								return 'Update note'
							case 'add-note':
								return 'Add note'
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
