/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/main/webpack/**/*.{ts}",
		"../ui.apps/src/main/content/jcr_root/apps/mysite/components/**/*.html",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
