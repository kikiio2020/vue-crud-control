module.exports = {
	base: '/project/vue-crud-control/',
	title: 'VueCrudControl',
	description: 'An opinionated bootstrap-vue data table that loads a GET API end point and provision UI elements for the other CRUD actions. Also comes with a few specialty fields work in the modal.',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Kikiio', link: 'https://kikiio.com' },
			{ text: 'GitHub', link: 'https://github.com/kikiio2020/vue-crud-control' }
		],
		sidebarDepth: 1,
		displayAllHeaders: false,
		sidebar: [
			['/', 'Guide'],
	    ]
	}
}