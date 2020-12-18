import { color, Preset } from 'apply';

Preset.setName('Tailwind CSS for Laravel');
Preset.option('install', true);
// Preset.option('auth', true);

Preset.group((preset) => {
  preset.extract('default');
  // preset.extract('auth').ifOption('auth');
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
  preset.editNodePackages().merge({
    scripts: {
      dev: 'npm run development',
      development: 'npx mix',
      watch: 'npx mix watch',
      prod: 'npm run production',
      production: 'npx mix -p',
    },
  });
  preset.installDependencies().ifOption('install');
}).withTitle('Installing dependencies...');

Preset.instruct([
  `Run ${color.magenta('npm run dev')} or ${color.magenta('yarn dev')}`,
]);
