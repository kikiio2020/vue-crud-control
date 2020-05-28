import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { createLocalVue, mount } from '@vue/test-utils'
import { expect, assert } from 'chai';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import flushPromises from 'flush-promises';
import CrudControl from '../../src/CrudControl.vue';
import ModalField from '../../src/ModalField.vue';

const localVue = createLocalVue()
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('model-image-field', () => {
	let wrapper;
	
	beforeEach(() => {
		moxios.install(axios);
		
		const data = [
			{},
			{},
		];
		
		wrapper = mount(CrudControl, {
			localVue,
			propsData: {
				id: "my-model-view",
	    		ref: "myModelView",
	    		tableName: "Person",
	    		initialValues: {
	    			id: 0,
	    		},
	    		gridFields: [
	                {
	                    key: 'id',
	                    sortable: true,
	                },
	                'actions',
	            ],
	            actions: [
	            	'edit',
	            	'insert',
	            	'remove',
	            	'details'
	            ],
	            modalFields: [
	    			{   
	                    fieldType: 'b-form-input',
	                    caption: 'Name',
	                    placeholder: 'Name',
	                    name: 'name',
	                    id: 'name',
	                    ref: 'name',
	                },
	    		],
	            api: "api/person",
	            gridUrlQuery: "/",
			},
		});
		
		moxios.stubRequest('api/person/', {
	        status: 200,
	        response: {
	        	data: data
	        }, 
		});
	})
	
	afterEach(() => {
		moxios.uninstall(axios);
	});
	
	it('blah blah', (done) => {
		moxios.wait(() => {
			let request = moxios.requests.mostRecent();
			request.respondWith({}).then((res) => {
				//expect(..);
			}).then(() => {
				done();
			}, done);
		});
	});
}