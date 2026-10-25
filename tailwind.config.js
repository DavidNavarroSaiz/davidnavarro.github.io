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

				// Dark colors (deep navy-charcoal foundation)
				'primary-dark': '#070B12',
				'secondary-dark': '#0B111A',
				'ternary-dark': '#111A26',

				// Restrained cyan / teal accents
				'dev-blue': '#22D3EE',
				'dev-blue-dark': '#0891B2',
				'dev-blue-light': '#67E8F9',
				'dev-cyan': '#2DD4BF',
				'dev-purple': '#8B5CF6',
				'dev-green': '#10B981',
				'ink': '#080D14',

				// Blue-tinted neutral scale for consistent dark surfaces
				gray: {
					50: '#F4F7FA',
					100: '#E8EEF5',
					200: '#CBD5E1',
					300: '#AEBCCD',
					400: '#8B9BB0',
					500: '#7D8DA3',
					600: '#46566A',
					700: '#293545',
					800: '#151E2B',
					900: '#0D141E',
					950: '#070B12',
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
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
