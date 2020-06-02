import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { createLocalVue, mount } from '@vue/test-utils'
import { expect, assert } from 'chai';
import axios from 'axios';
import moxios from 'moxios';
import CrudControl from '../../src/CrudControl.vue';
import ModalField from '../../src/ModalField.vue';

const localVue = createLocalVue()
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('crud-control data grid test', () => {
	let wrapper;
	const data = [
		{ id: 1, name: 'Fred', email: 'fred@flintstone.com', phone: '12312345' },
        { id: 2, name: 'Wilma', email: 'eilma@flintstone.com', phone: '3334445' },	
	];
	
	beforeEach(() => {
		moxios.install(axios);
		
		wrapper = mount(CrudControl, {
			localVue,
			propsData: {
				id: "my-model-view",
	    		ref: "myModelView",
	    		tableName: "Person",
	    		initialValues: {
	    			id: 0,
	                name: '',
	                email: '',
	                phone: '',
	    		},
	    		gridFields: [
	                {
	                    key: 'id',
	                    sortable: true,
	                },
	                {
	                    key: 'name',
	                    sortable: true,
	                },
	                {
	                    key: 'email',
	                    sortable: true,
	                },
	                {
	                    key: 'phone',
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
	                {   
	                    fieldType: 'b-form-input',
	                    caption: 'Email',
	                    placeholder: 'Email',
	                    name: 'email',
	                    id: 'email',
                    	ref: 'email',
	                },
	                {   
	                    fieldType: 'b-form-input',
	                    caption: 'Phone',
	                    placeholder: 'Phone',
	                    name: 'phone',
	                    id: 'phone',
	                    ref: 'phone',
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
	
	it('On load data is loaded from API', (done) => {
		moxios.wait(() => {
			expect(wrapper.vm.items).to.deep.equal(data);
			
			let request = moxios.requests.mostRecent();
			request.respondWith({}).then((res) => {
				expect(res.config.method).to.equal('get');
			}).then(() => {
				done();
			}, done);
		});
	});
	
	it('Actions are shown', (done) => {
		moxios.wait(() => {
			const editDropdowns = wrapper.findAllComponents({ref: 'editDropdownItem'});
			expect(editDropdowns.length).to.equal(2);
			
			const detailsDropdownItems = wrapper.findAllComponents({ref: 'detailsDropdownItem'});
			expect(detailsDropdownItems.length).to.equal(2);
			
			const removeDropdownItems = wrapper.findAllComponents({ref: 'removeDropdownItem'});
			expect(removeDropdownItems.length).to.equal(2);
			
			done();
		});
	});
	
	it('On edit modal is shown with correct fields and values', (done) => {
		moxios.wait(async () => {
			const editDropdowns = wrapper.findAllComponents({ref: 'editDropdownItem'});
			await editDropdowns.at(0).trigger('click');
			
			const modalFields = wrapper.findAllComponents({ref: 'modalField'});
			expect(modalFields.at(0).vm.value).to.equal(data[0].name);
			expect(modalFields.at(1).vm.value).to.equal(data[0].email);
			expect(modalFields.at(2).vm.value).to.equal(data[0].phone);
			
			await editDropdowns.at(1).trigger('click');
			expect(modalFields.at(0).vm.value).to.equal(data[1].name);
			expect(modalFields.at(1).vm.value).to.equal(data[1].email);
			expect(modalFields.at(2).vm.value).to.equal(data[1].phone);
			
			done();
		});
	});
	
	it('On edit save model is updated with correct API data', (done) => {
		moxios.wait(async () => {
			const editDropdowns = wrapper.findAllComponents({ref: 'editDropdownItem'});
			await editDropdowns.at(0).trigger('click');
			
			const modalFields = wrapper.findAllComponents({ref: 'modalField'});
			await modalFields.at(0).find('input').setValue('Pebbles');
			
			expect(wrapper.vm.editModalRecord.name).to.equal('Pebbles');
			expect(wrapper.vm.items[0].name).to.equal('Pebbles');
			
			const saveBtn = wrapper.findComponent({ref: 'saveBtn'});
			await saveBtn.trigger('click');

			//assert
			const request = moxios.requests.mostRecent();
			request.respondWith({
				response: data
			}).then((res) => {
				expect(res.config.method).to.equal('put');
				expect(res.config.url).to.equal('api/person/' + res.data[0].id);
				expect(JSON.parse(res.config.data)).to.deep.equal({...res.data[0], name: 'Pebbles'});	
			}).then(() => {
				done();
			}, done);
		});
	});
	
	it('Insert modal fields should be empty', (done) => {
		moxios.wait(async () => {
			const insertBtn = wrapper.findComponent({ref: 'insertModelButton'});
			await insertBtn.trigger('click');
			
			//assert
			const modalFields = wrapper.findAllComponents({ref: 'modalField'});
			expect(modalFields.at(0).vm.value).to.be.empty;
			expect(modalFields.at(1).vm.value).to.be.empty;
			expect(modalFields.at(2).vm.value).to.be.empty;
			
			done();
		});
	});
	
	it('On insertModel() fields should be empty', (done) => {
		moxios.wait(async () => {
			await wrapper.vm.insertModel();
			
			//assert
			const modalFields = wrapper.findAllComponents({ref: 'modalField'});
			expect(modalFields.at(0).vm.value).to.be.empty;
			expect(modalFields.at(1).vm.value).to.be.empty;
			expect(modalFields.at(2).vm.value).to.be.empty;
			
			done();
		});
	});
	
	it('On loadData() is available', (done) => {
		moxios.wait(async () => {
			wrapper.vm.loadData();
			done();
		});
	});
	
	it('On insert new record is added with correct API data', (done) => {
		moxios.wait(async () => {
			const insertBtn = wrapper.findComponent({ref: 'insertModelButton'});
			await insertBtn.trigger('click');
			
			const modalFields = wrapper.findAllComponents({ref: 'modalField'});
			await modalFields.at(0).find('input').setValue('Barney Rubble');
			await modalFields.at(1).find('input').setValue('barney@flintstone.com');
			await modalFields.at(2).find('input').setValue('5555555');
			
			const saveBtn = wrapper.findComponent({ref: 'saveBtn'});
			await saveBtn.trigger('click');
			
			//assert
			const request = moxios.requests.mostRecent();
			request.respondWith({
				response: wrapper,
			}).then((res) => {
				expect(res.config.method).to.equal('post');
				expect(res.config.url).to.equal('api/person');
				expect(JSON.parse(res.config.data)).to.deep.equal(
					{
						id: 0,
						name: "Barney Rubble",
						email: "barney@flintstone.com",
						phone: "5555555",
					}
				);
				expect(res.data.vm.$root.__emitted).to.have.property('bv::refresh::table');
			}).then(() => {
				done();
			}, done);
		});
	});
	
	it('On remove record is updated with correct API data', (done) => {
		moxios.wait(async () => {
			const removeDropdowns = wrapper.findAllComponents({ref: 'removeDropdownItem'});
			await removeDropdowns.at(0).trigger('click');
			
			const removeBtn = wrapper.findComponent({ref: 'removeBtn'});
			await removeBtn.trigger('click');
			
			//assert
			const request = moxios.requests.mostRecent();
			request.respondWith({
				response: wrapper,
			}).then((res) => {
				expect(res.config.method).to.equal('delete');
				expect(res.config.url).to.equal('api/person/1');				
				expect(res.data.emitted('record-removed')[0][0]).to.equal(1);		
			}).then(() => {
				done();
			}, done);			
		});
	});
	
	it('On removeModel() call record is updated with correct API data', (done) => {
		moxios.wait(async () => {
			await wrapper.vm.removeModel(2);
			const request = moxios.requests.mostRecent();
			request.respondWith({
				response: wrapper,
			}).then((res) => {
				expect(res.config.method).to.equal('delete');
				expect(res.config.url).to.equal('api/person/2');				
				expect(res.data.emitted('record-removed')[0][0]).to.equal(2);		
			}).then(() => {
				done();
			}, done);
		});
	});
});

