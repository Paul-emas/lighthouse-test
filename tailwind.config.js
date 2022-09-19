/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					0: '#e0b340',
				},
				grey: {
					0: '#303032',
				},
				neutral: {
					0: '#f9f9f9',
					20: '#ececec',
					30: '#dfdfdf',
					40: '#d2d2d2',
					50: '#c6c6c6',
					60: '#b9b9b9',
					70: '#595959',
					80: '#131313',
					90: '#060606',
					100: '#1a1a1a',
				},
			},
			fontSize: {
				xxs: '10px',
			},
		},
	},
	variants: {
		extends: {
			scale: ['group-hover'],
			translate: ['group-hover', 'hover'],
		},
	},
	plugins: [],
};
