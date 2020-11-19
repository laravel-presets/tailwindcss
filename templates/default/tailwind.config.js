const { fontFamily } = require('tailwindcss/defaultTheme');

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
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
