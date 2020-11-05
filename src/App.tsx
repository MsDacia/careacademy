import { component } from 'vue-tsx-support'
import { cssRule } from 'typestyle'
import * as theme from '@/ui/theme'
import { padding, percent, rem, viewHeight } from 'csx'

export default component({
	name: 'App',
	render() {
		return (
			<router-view />
		)
	},
})

cssRule('*, ::before, ::after', {
	boxSizing: 'border-box',
})

cssRule('html, body', {
	backgroundColor: theme.colorDarkest,
	color: theme.colorLight,
	fontSize: theme.emSize,
	height: viewHeight(100),
	margin: 0,
	minHeight: viewHeight(100),
})

cssRule('main', {
	overflow: 'hidden',
	position: 'relative',

	$nest: {
		'section': {
			padding: padding(0, 20),
			width: percent(100),
		},

		'i': {
			color: theme.colorPrimaryLight,
			cursor: 'pointer',
			display: 'inline-block',
			marginRight: rem(1.5),
			fontSize: percent(125),

			$nest: {
				'&:hover': {
					color: theme.colorPrimaryHover,
				},
			},
		},

		'p': {
			$nest: {
				'&.add-new-note': {
					$nest: {
						'&:hover': {
							backgroundColor: theme.opacityColorLight,
							color: theme.colorDarkest,
							cursor: 'pointer',
						},
					},
				},
			},
		},
	},
})

cssRule('.container', {
	$nest: {
		'.container-form': {
			height: viewHeight(100),
			margin: '0 auto',
			width: percent(100),
		},
	},
})

cssRule('.enhanced-style', {
	backgroundColor: theme.opacityColorDarker,
	fontSize: rem(1.5),
	padding: padding(10, 40, 10, 10),
	width: percent(100),
})
