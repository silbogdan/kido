module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				lightPurple: '#540D6E',
				darkPurple: '#370B47',
				orange: '#EE4266',
				yellow: '#FFD23F',
				lightGreen: '#3BCEAC',
				darkGreen: '#0EAD69',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
