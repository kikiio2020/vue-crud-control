# vue-crud-control
An opinionated, beefed-up Bootstrap-Vue `b-table` that loads a GET REST API end point and provision UI elements for the other CRUD actions. It opens up a modal for data manipulation with the specified form elements. 

The package works on projects with Bootstrap-Vue.

## Getting Started

#### NPM
``` bash
npm install vue bootstrap-vue bootstrap @kikiio2020/vue-crud-control
```

``` js
//app.js
require('bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import CrudControl from '@kikiio2020/vue-crud-control';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CrudControl);

const app = new Vue({
    el: '#app',
	components: {CrudControl}
});
```

## Basic Example
<img src="https://www.dropbox.com/s/610alplztngaqk2/vue-crud-control-screen1.png?raw=1">

``` js
<crud-control	
	id="my-model-view"
	table-name="Person"
	:initial-values="{
		id: 0,
		name: '',
        	email: '',
        	phone: '',
	}"
	:grid-fields="[
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
            label: 'E-mail'
            sortable: true,
        },
        {
            key: 'phone',
            sortable: true,
        },
        'actions',
    ]"
    :actions="[
	    	'edit',
	    	'insert',
	    	'remove',
	    	'details'
    ]"
    :modal-fields="[
		{   
		    fieldType: 'b-form-input',
		    caption: 'Name',
		    placeholder: 'Name',
		    name: 'name',
		    id: 'name'
		},
		{   
		    fieldType: 'b-form-input',
		    caption: 'Email',
		    placeholder: 'Email',
		    name: 'email',
		    id: 'email'
		},
		{   
		    fieldType: 'b-form-input',
		    caption: 'Phone',
		    placeholder: 'Phone',
		    name: 'phone',
		    id: 'phone'
		},
	]"
    api="api/person"
    grid-url-query="/"
></crud-control>
```

## Prerequisites

The package depends on Bootstrap-Vue. 

You may want to refer specifically to [b-table](https://bootstrap-vue.org/docs/components/table) manuel for specific inherited features. 


## Props

### id
A unique ID is required. When more than one crud-control is employed, their respective modals use this ID to distinguish themselves.  

### table-name
The table name is a caption reflected on the top of the table and various popup messages

### table-properties
`b-table` properties that will be inherited. 

**Note:** Not all of `b-table` properties are tested
  
### initial-values
A required object to initialize values when inserting new record and also provides the keys for matching with the modal fields. The keys must match those in `modal-fields`.`id`   

### grid-fields
An array of objects that is inherited into `b-table`'s `fields` property. 

In addition, an `actions` column may be added here for a dropdown to act on the record. The possibile actions are indicated in the `actions` prop. 

**Note:** Not all of `b-table` definitions are tested

Reference: [b-table](https://bootstrap-vue.org/docs/components/button)

### actions
An array of object that specifies the possible actions. Standard actions are `edit`, `remove`, `details`. In addition custom actions may be specified by an object with these keys:

|Key|Description|
|:---:|---|
|label|Caption for the action|
|event|Custom event to be emitted when the action item is clicked|
|fontawesome|Optional Fontawesome icon to be shown beside the caption. You can only use either this or `icon` but not both|
|icon|Optional `b-icon` to be shown beside the caption. You can only use either this or `fontawsome` but not both|
|disabled|Optional boolean to indicate if action should be disabled. It can also be a passback with the row object as an argument|

Example:
``` js
{
	label: 'Connect',
	event: 'connect-clicked',
	fontawesome: 'fas fa-hands-helping',
	disabled(row){return row.item.canConnect}
}
```

Reference: 
[b-icon](https://bootstrap-vue.org/docs/icons)
[fontawesome](https://fontawesome.com)

### modal-fields
A required object array for specifying what fields are available on the modal. 

|Key|Description|
|:---:|---|
|fieldType|The element to be used|
|placeholder|Placeholder when field is empty|
|name|Name of the field|
|id|ID must match the corresponding key returned from the API and `initial-values`|
|rules|For input fields Vee-valudate rules maybe included |
|requireModel|When set to true the field will only show up in edit mode.|

You may also include props of the specific elements used.

Example:
``` js
[
	{   
	    fieldType: "b-form-input",
	    caption: "Name",
	    placeholder: "Name *",
	    required: true,
	    rules: "required",
	    name: "name",
	    id: "name",
	    class: "my-3 mr-3",
        vBPopover: {
            trigger: 'hover',
            content: 'You full name',
            placement: 'top',
            variant: 'primary'
        },
    },
]
```

Reference: [Vee-validate](https://logaretm.github.io/vee-validate/)

### api
Required string value for the API URL for the model. This sets the base for the other API verbs. Please see example right below.

### grid-url-query
Required string value for appended to the API URL for querying for the grid. This is useful when a specific querying is required for initial load. If no specifc filtering is required you may use '/'.

For example, given API = 'api/person' and grid-url-query = 'men':

|Action|URL|
|:---:|---|
|GET|api/person/men|
|POST|api/person|
|PUT|api/person/1|
|DELETE|api/person/1|

### buttons
Optional array of objects for adding custom buttons left of the standard buttons at the bottom of the modal.

|Key|Description|
|:---:|---|
|id|Required as unique key|
|event|Custom event to be emitted with the button is clicked. The data object of the current record is passed|

Other `b-button` props maybe in included in the object for styling. **Note:** Not all `b-button` props are tested. 

Example:
``` js
[
	{
		id:'printBtn',
		variant: 'primary',
        content: 'Print Record',
        event: 'print-requested'
	}
]
```

### insertable
Boolean to indicate whether the Insert button is shown. Default is true. 

### searchable
Boolean to indicate whether the Search box is shown. Default is true.

## Events
|Event|Description|
|:---:|---|
|record-created|POST API for new record is successful|
|record-create-failed|POST API for new record is failed|
|record-updated|PUT API for editing the record is successful|
|record-update-failed|PUT API for editing the record is failed|
|record-removed|DELETE API for the record is successful|
|record-remove-failed|DELETE API for the record is failed|
|async-returns|Emitted whenever any of API endpoints is successful or failed (except for GET)|
|modal-close|The modal is closed thus indicating user's action is cancelled|

## Built With

* [Vue](vuejs.org)
* [Bootstrap-Vue](https://bootstrap-vue.org)
* [Bootstrap](https://getbootstrap.com)
* [Vee-validate](https://logaretm.github.io/vee-validate)

#### Bundling
* [Webpack](https://webpack.js.org)

#### Testing
* [Mocha](https://mochajs.org)
* [Chai](https://www.chaijs.com)

#### Documentation
* [VuePress](https://vuepress.vuejs.org)

## Authors

* [**Daniel 'Kikiio' Leung**](https://kikiio.com)

## Contribute
* [Read here](./CONTRIBUTE.md)

## Code of Conduct
* [Read here](./CONDUCT.md)

## License
* [MIT](./LICENSE.md)
