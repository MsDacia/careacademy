import { component } from 'vue-tsx-support'

export default component({
	name: 'App',
	render() {
		return (
			<div>
				<router-view />
			</div>
		)
	},
})

