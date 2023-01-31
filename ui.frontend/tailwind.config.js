const plugin  = require('tailwindcss/plugin');
const {grid, flex, padding} = require('./src/main/tailwind/safelists/index.js');
const themes = require('./src/main/tailwind/themes/index.js');

let safelist = process.argv.indexOf('--tw-all') ? [{
    pattern: /./,
    variants: ['sm', 'md', 'lg']
}] : [...padding, ...grid, ...flex]

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/main/webpack/**/*.{ts,js}",
		"../ui.apps/src/main/content/jcr_root/apps/mysite/components/**/*.html",
	],
	theme: themes,
	plugins: [],
	safelist: safelist,
	blocklist: [
		'container'
	]
};
