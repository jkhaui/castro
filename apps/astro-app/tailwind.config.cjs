const defaultTheme = require("tailwindcss/defaultTheme");
const konstaConfig = require('konsta/config');

/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	konsta: {
		colors: {
			primary: '#00ff00'
		}
	},
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				ios: ["Poppins", ...defaultTheme.fontFamily.sans],
				material: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				progress: 'progress 1s infinite linear',
			},
			keyframes: {
				progress: {
					'0%': { transform: ' translateX(0) scaleX(0)' },
					'40%': { transform: 'translateX(0) scaleX(0.4)' },
					'100%': { transform: 'translateX(100%) scaleX(0.5)' },
				},
			},
			transformOrigin: {
				'left-right': '0% 50%',
			},
		},
	},
	darkMode: 'media',
	plugins: [],
});