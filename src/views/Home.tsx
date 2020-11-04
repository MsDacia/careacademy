import { component } from 'vue-tsx-support'

import HelloWorld from '@/components/HelloWorld'

export default component({
	name: 'Home',
	render() {
		return (
			<div>
				<img alt="Vue logo" src={require('@/assets/logo.png')} />
				<HelloWorld msg="Welcome to Your Vue.js App" />
			</div>
		)
	},
})
