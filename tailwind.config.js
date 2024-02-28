/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				light: {
					periWinkel: '#F0F4FA',
					solitude: '#E9EDF6',
					catskillWhite: '#F0F4FA',
				},
				dark: {
					sanJuan: '#475161',
					blackPearl: '#1B212D',
					shadowBlue: '#7887A0',
				},
			},
		},
	},
	plugins: [],
}
