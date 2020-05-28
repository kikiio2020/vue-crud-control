import CrudControl from './CrudControl.vue';

module.exports = {
	install: function (Vue, options) {
		Vue.component('crud-control', CrudControl);
	}
}
