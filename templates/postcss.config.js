/*
 |--------------------------------------------------------------------------
 | PostCSS configuration
 |--------------------------------------------------------------------------
 |
 | You can configure PostCSS and adds plugins in this
 | configuration file.
 |
 */

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('postcss-nested'),
		require('autoprefixer'),
	],
};
