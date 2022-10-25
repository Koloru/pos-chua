/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", "sans-serif"],
			},
			screens: {
				'xs': '320px'
			}
		},
		plugins: [require("daisyui")],
	},
};
