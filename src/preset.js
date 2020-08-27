const { Preset } = require('use-preset');

// prettier-ignore
module.exports = Preset.make('Laravel Tailwind CSS')
	.option('interaction', true)
	.option('pagination', true)
	.option('auth', false)

	.editJson('package.json')
		.title('Add Tailwind CSS')
		.merge({
			devDependencies: {
				'@tailwindcss/ui': '^0.3',
				'@tailwindcss/typography': '^0.2',
				'postcss-nested': '^4',
				'postcss-import': '^12',
				'autoprefixer': '^9.6',
				tailwindcss: '^1.7',
			},
		})
		.delete(['devDependencies.sass', 'devDependencies.sass-loader'])
		.indentWith('    ')
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
		.whenConflict('override')
		.title('Install Tailwind CSS')
		.chain()

	.copyDirectory('auth')
		.to('/')
		.whenConflict('override')
		.if(({ flags }) => Boolean(flags.auth))
		.title('Scaffold authentication')
		.chain()

	.editJson('composer.json')
		.if(({ flags }) => Boolean(flags.auth))
		.title('Add laravel/ui')
		.merge({
			require: {
				'laravel/ui': '^2.1',
			},
		})
		.chain()

	.edit('app/Providers/AppServiceProvider.php')
		.title('Setup pagination')
		.if(({ flags }) => Boolean(flags.pagination))
		.search(/use Illuminate\\Support\\ServiceProvider;/)
			.addAfter('use Illuminate\\Pagination\\Paginator;')
			.end()
		.search(/public function boot\(\)/)
			.addAfter([
				`{`,
				`    Paginator::useTailwind();`,
			])
			.removeAfter(2) // Removes opening curly bracket and comment
			.end()
		.chain()

	.installDependencies()
		.if(({ flags }) => Boolean(flags.interaction))
		.for('node')
		.title('Install Node dependencies')
		.chain()
		
	.updateDependencies()
		.if(({ flags }) => Boolean(flags.interaction) && Boolean(flags.auth))
		.for('php')
		.title('Update PHP dependencies')
		.chain()
