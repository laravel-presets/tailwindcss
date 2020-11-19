const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./app/**/*.php',
		'./resources/**/*.html',
		'./resources/**/*.js',
		'./resources/**/*.jsx',
		'./resources/**/*.ts',
		'./resources/**/*.php',
		'./resources/**/*.vue',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			gray: colors.coolGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
