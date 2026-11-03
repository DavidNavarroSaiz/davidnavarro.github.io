module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Copper Workshop black edition palette. Semantic names remain stable
				// so the existing components keep their behavior.
				'primary-light': '#0D0E0D',
				'secondary-light': '#151614',
				'ternary-light': '#1B1B19',
				'primary-dark': '#0D0E0D',
				'secondary-dark': '#151614',
				'ternary-dark': '#1B1B19',

				'dev-blue': '#C58B69',
				'dev-blue-dark': '#A97946',
				'dev-blue-light': '#DAA381',
				'dev-cyan': '#96A18D',
				'dev-purple': '#A97946',
				'dev-green': '#96A18D',
				'ink': '#0A0B0A',

				gray: {
					50: '#EFE8DC',
					100: '#E5DED2',
					200: '#D1C7B9',
					300: '#BEB4A8',
					400: '#A9A59C',
					500: '#928C83',
					600: '#625B54',
					700: '#383530',
					800: '#25211E',
					900: '#1B1B19',
					950: '#0D0E0D',
				},
			},
			container: {
				// One shared gutter everywhere: header, footer, and page content align.
				padding: '1rem',
			},
			fontFamily: {
				sans: [
					'GeneralSans-Variable',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				display: [
					'GeneralSans-Variable',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Consolas',
					'monospace',
				],
				'general-regular': [
					'GeneralSans-Regular',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				'general-medium': [
					'GeneralSans-Medium',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				'general-semibold': [
					'GeneralSans-Semibold',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				editorial: [
					'Newsreader',
					'Georgia',
					'serif',
				],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
