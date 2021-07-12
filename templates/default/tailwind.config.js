const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: [
		'./resources/**/*.blade.php',
		'./resources/**/*.{js,ts,vue}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
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
}
