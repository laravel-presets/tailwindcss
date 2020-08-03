const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('Laravel Tailwind CSS')
	.editJson('package.json')
		.title('Add Tailwind CSS')
		.merge({
			devDependencies: {
				'@tailwindcss/ui': '^0.3',
				'@tailwindcss/typography': '^0.2',
				'postcss-nested': '^4',
				'postcss-import': '^12',
				tailwindcss: '^1',
			},
		})
		.delete(['devDependencies.sass', 'devDependencies.sass-loader'])
		.chain()
		
	.delete()
		.title('Delete SASS')
		.directories('resources/sass')
		.chain()

	.copyTemplates()

	.installDependencies()
		.for('node')
		.title('Install node dependencies')
		.chain()
