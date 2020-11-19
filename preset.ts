import { color, Preset } from 'use-preset';

Preset.setName('Tailwind CSS for Laravel');

Preset.group((preset) => {
	preset.extract('default');
	preset.extract('auth').ifHasOption('auth');
}).withTitle('Extracting templates...');

Preset.edit('.gitignore')
	.withTitle(`Updating ${color.magenta('.gitignore')}...`)
	.addAfter('node_modules', ['/public/build', '/public/mix-manifest.json']);

Preset.group((preset) => {
	preset
		.editNodePackages()
		.addDev('laravel-mix', '^6.0.0-beta.14')
		.addDev('tailwindcss', '^2.0.1')
		.addDev('autoprefixer', '^10')
		.addDev('postcss', '^8.1.8')
		.addDev('vue-template-compiler', '^2.6.12');
	preset.installDependencies();
}).withTitle('Installing dependencies...');

Preset.instruct([
	`Run ${color.magenta('npm run dev')} or ${color.magenta('yarn dev')}`,
]);
