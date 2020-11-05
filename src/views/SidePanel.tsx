import { component } from 'vue-tsx-support'

import noteStore from '@/store/noteStore'

export default component({
	name: 'SidePanel',
	render() {
		return (
			<div>
				{!noteStore.isSidePanelOpen &&
					<p onClick={() => noteStore.showSidePanel()} data-test="add-personal-note">Add New Note</p>
				}

				{this.$slots.default}
			</div>
		)
	},
})
