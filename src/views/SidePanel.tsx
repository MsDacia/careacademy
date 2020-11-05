import { component } from 'vue-tsx-support'

import noteStore from '@/store/noteStore'

export default component({
	name: 'SidePanel',
	render() {
		return (
			<div>
				{noteStore.isSidePanelOpen ?
					<i
						class="times icon"
						onClick={() => noteStore.hideSidePanel()}
						data-message="Close panel"
					></i>
					:
					<p onClick={() => noteStore.showSidePanel()}>Add New Note</p>
				}

				{this.$slots.default}
			</div>
		)
	},
})
