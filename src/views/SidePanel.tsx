import { percent, rem } from 'csx'
import { style } from 'typestyle'
import { component } from 'vue-tsx-support'

import noteStore from '@/store/noteStore'

export default component({
	name: 'SidePanel',
	render() {
		return (
			<div class={noteStore.isSidePanelOpen ? styleSidePanel : ''}>
				{!noteStore.isSidePanelOpen &&
					<p
						class="add-new-note enhanced-style"
						onClick={() => noteStore.showSidePanel()}
						data-test="add-personal-note"
					>Add New Note</p>
				}

				{this.$slots.default}
			</div>
		)
	},
})

const styleSidePanel = style(
	{
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		padding: rem(1),
		width: percent(100),
	},
)
