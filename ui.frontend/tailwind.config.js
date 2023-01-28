const plugin  = require('tailwindcss/plugin');
const safelists = require('./src/main/tailwind/safelists/index.js');
const themes = require('./src/main/tailwind/themes/index.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/main/webpack/**/*.{ts,js}",
		"../ui.apps/src/main/content/jcr_root/apps/mysite/components/**/*.html",
	],
	theme: themes,
	plugins: [],
	safelist: safelists
};
