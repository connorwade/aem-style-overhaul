/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/main/webpack/**/*.{ts}",
		"../ui.apps/src/main/content/jcr_root/apps/mysite/components/**/*.html",
	],
	theme: {
		extend: {},
		font: {
			'font-family': '"Helvetica Neue", Helvetica, Arial, sans-serif;',
			'font-size': '16px',
			'font-height': '1.5',
		},
		colors: {
			'foreground': '#202020',
			'background': '#ECECEC',
			'link': '#2020E0',
		},
	},
	plugins: [],
	safelist: [
		'p-1',
		'p-2',
		'p-3',
		'p-4',
		'p-5'
	]
};
