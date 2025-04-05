
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./src/**/*.{html,js,ts,jsx,tsx,vue}',
    './public/index.html',
	],
	theme: {
		container: {
			padding: '20px',
			center: true,
		},
		screens: {
			xl: { max: '1466px' },
			lg: { max: '991.98px' },
			md: { max: '767.98px' },
			sm: { max: '479.98px' },
		},
		extend: {
			spacing: {
				'25': '6.438rem',
				'85': '22.813rem',
        '120': '40.313rem',
			},
		},
		colors: {
			primary: '#A344FA',
			black: '#000000',
			white: '#fff',
		},
	},
};