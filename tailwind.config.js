const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light colors (for light mode - minimal usage)
				'primary-light': '#0A0A0A',
				'secondary-light': '#111111',
				'ternary-light': '#1A1A1A',

				// Dark colors (main theme - black and blue)
				'primary-dark': '#000000',
				'secondary-dark': '#0A0A0A',
				'ternary-dark': '#1A1A1A',

				// Developer blue accents
				'dev-blue': '#00D4FF',
				'dev-blue-dark': '#0099CC',
				'dev-blue-light': '#33E0FF',
				'dev-cyan': '#00FFFF',
				'dev-purple': '#8B5CF6',
				'dev-green': '#10B981',

				// Extended v3 color
				gray: colors.neutral,
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
