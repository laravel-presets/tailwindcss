import { color, Preset } from 'apply';

Preset.setName('Tailwind CSS for Laravel');
Preset.option('install', false);

Preset.group((preset) => {
  preset.extract('default');
}).withTitle('Extracting templates...');

Preset.edit('.gitignore')
  .withTitle(`Updating ${color.magenta('.gitignore')}...`)
  .addAfter('node_modules', ['/public/build'])

Preset.group((preset) => {
  preset
    .editNodePackages()
    .addDev('tailwindcss', '^2.2.4')
    .addDev('autoprefixer', '^10.3.0')
    .addDev('postcss', '^8.3.5')
  preset.installDependencies().ifOption('install');
}).withTitle('Installing dependencies...');

Preset.instruct([
  `Run ${color.magenta('npm run dev')} or ${color.magenta('yarn dev')}`,
]);
