import { border, padding, percent } from 'csx'
import { style } from 'typestyle'
import { NestedCSSProperties } from 'typestyle/lib/types'

export const emSize = 14

export const computerBreakpoint = 767
export const largeMonitorBreakpoint = 1600

export const colorLight = '#eee'
export const colorLighter = '#dedede'

export const colorDarkest = '#414141'
export const colorDarker = '#707070'

export const colorPrimaryDark = '#2F1c1c'
export const colorPrimaryMedium = '#deb881'
export const colorPrimaryLight = '#eadea6'
export const colorPrimaryHover = 'invert(25%) sepia(95%) saturate(3810%) hue-rotate(11deg) brightness(93%) contrast(33%)'

export const opacityColorDark = 'rgba(200, 200, 200, 0.4)'
export const opacityColorDarker = 'rgba(200, 200, 200, 0.2)'
export const opacityColorLight = 'rgba(200, 200, 200, 0.8)'


export const inputStyle: NestedCSSProperties = {
	alignItems: 'center',
	backgroundColor: colorDarkest,
	border: border({
		color: colorLighter,
		style: 'solid',
		width: 2,
	}),
	borderRadius: 0,
	boxShadow: 'none',
	color: colorLight,
	display: 'flex',
	flex: '1 0 auto',
	flexWrap: 'wrap',
	height: 40,
	justifyContent: 'flex-start',
	lineHeight: 1.1,
	margin: 0,
	maxWidth: percent(100),
	outline: 0,
	padding: padding(5, 10),
	position: 'relative',
	textAlign: 'left',
	transition: 'boxShadow .1s ease, borderColor .1s ease',
	width: percent(100),

	$nest: {
		'&:hover, &:active, &.active, &:focus': {
			borderColor: colorPrimaryLight,
			cursor: 'pointer',
			outline: '0 none',
		},
	},
}

export const elementTextarea = style({
	...inputStyle,
	alignItems: 'flex-start',
	flexWrap: 'wrap',
	minHeight: 80,
})
