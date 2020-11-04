import { style } from 'typestyle'
import { component } from 'vue-tsx-support'

export default component({
	name: 'App',
	render() {
		return (
			<div class={styleApp}>
				<div class={styleNav}>
					<router-link to="/">Home</router-link>
					&nbsp;|&nbsp;
					<router-link to="/about">About</router-link>
				</div>
				<router-view />
			</div>
		)
	},
})

const fontColor = '#2c3e50'

const styleApp = style({
	fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
	textAlign: 'center',
	color: fontColor,
})

const styleNav = style({
	padding: 30,
	$nest: {
		a: {
			fontWeight: 'bold',
			color: fontColor,
			$nest: {
				'&.router-link-exact-active': {
					color: '#42b983',
				},
			},
		},
	},
})
