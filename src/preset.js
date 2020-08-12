const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('Laravel Tailwind CSS')
	.option('interaction', true)
	.option('auth', false)

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

	.edit('.gitignore')
		.title('Update .gitignore')
		.search(/\/node_modules/)
		.addAfter(['/public/build', '/public/mix-manifest.json'])
		.end()
		.chain()
		
	.delete()
		.title('Delete SASS')
		.directories('resources/sass')
		.chain()

	.copyDirectory('default')
		.to('/')
		.title('Install Tailwind CSS')
		.chain()

	.copyDirectory('auth')
		.to('/')
		.title('Scaffold authentication')
		.chain()

	.installDependencies()
		.if(({ flags }) => Boolean(flags.interaction))
		.for('node')
		.title('Install node dependencies')
		.chain()
