(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{438:function(t,a,s){"use strict";s.r(a);var e=s(55),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-crud-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-crud-control"}},[t._v("#")]),t._v(" vue-crud-control")]),t._v(" "),s("p",[t._v("An opinionated, beefed-up Bootstrap-Vue "),s("code",[t._v("b-table")]),t._v(" that loads a GET REST API end point and provision UI elements for the other CRUD actions. It opens up a modal for data manipulation with the specified form elements.")]),t._v(" "),s("p",[t._v("The package works on projects with Bootstrap-Vue.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("h4",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue bootstrap-vue bootstrap @kikiio2020/vue-crud-control\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BootstrapVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IconsPlugin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap/dist/css/bootstrap.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue/dist/bootstrap-vue.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CrudControl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@kikiio2020/vue-crud-control'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BootstrapVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IconsPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CrudControl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcomponents"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CrudControl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"basic-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-example"}},[t._v("#")]),t._v(" Basic Example")]),t._v(" "),s("img",{attrs:{src:"https://www.dropbox.com/s/610alplztngaqk2/vue-crud-control-screen1.png?raw=1"}}),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crud"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("control\t\n\tid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-model-view"')]),t._v("\n\ttable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Person"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \temail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \tphone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\n\t'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            sortable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            sortable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E-mail'")]),t._v("\n            sortable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            sortable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'actions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('"\n    '),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t    \t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    \t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'insert'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    \t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    \t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'details'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('"\n    '),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("modal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t\t    fieldType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-form-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    caption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    placeholder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t\t    fieldType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-form-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    caption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    placeholder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t\t    fieldType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-form-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    caption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Phone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    placeholder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Phone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phone'")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('"\n    api'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api/person"')]),t._v("\n    grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("crud"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("The package depends on Bootstrap-Vue.")]),t._v(" "),s("p",[t._v("You may want to refer specifically to "),s("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/table",target:"_blank",rel:"noopener noreferrer"}},[t._v("b-table"),s("OutboundLink")],1),t._v(" manuel for specific inherited features.")]),t._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("h3",{attrs:{id:"id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" id")]),t._v(" "),s("p",[t._v("A unique ID is required. When more than one crud-control is employed, their respective modals use this ID to distinguish themselves.")]),t._v(" "),s("h3",{attrs:{id:"table-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-name"}},[t._v("#")]),t._v(" table-name")]),t._v(" "),s("p",[t._v("The table name is a caption reflected on the top of the table and various popup messages")]),t._v(" "),s("h3",{attrs:{id:"table-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-properties"}},[t._v("#")]),t._v(" table-properties")]),t._v(" "),s("p",[s("code",[t._v("b-table")]),t._v(" properties that will be inherited.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" Not all of "),s("code",[t._v("b-table")]),t._v(" properties are tested")]),t._v(" "),s("h3",{attrs:{id:"initial-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-values"}},[t._v("#")]),t._v(" initial-values")]),t._v(" "),s("p",[t._v("A required object to initialize values when inserting new record and also provides the keys for matching with the modal fields. The keys must match those in "),s("code",[t._v("modal-fields")]),t._v("."),s("code",[t._v("id")])]),t._v(" "),s("h3",{attrs:{id:"grid-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-fields"}},[t._v("#")]),t._v(" grid-fields")]),t._v(" "),s("p",[t._v("An array of objects that is inherited into "),s("code",[t._v("b-table")]),t._v("'s "),s("code",[t._v("fields")]),t._v(" property.")]),t._v(" "),s("p",[t._v("In addition, an "),s("code",[t._v("actions")]),t._v(" column may be added here for a dropdown to act on the record. The possibile actions are indicated in the "),s("code",[t._v("actions")]),t._v(" prop.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" Not all of "),s("code",[t._v("b-table")]),t._v(" definitions are tested")]),t._v(" "),s("p",[t._v("Reference: "),s("a",{attrs:{href:"https://bootstrap-vue.org/docs/components/button",target:"_blank",rel:"noopener noreferrer"}},[t._v("b-table"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" actions")]),t._v(" "),s("p",[t._v("An array of object that specifies the possible actions. Standard actions are "),s("code",[t._v("edit")]),t._v(", "),s("code",[t._v("remove")]),t._v(", "),s("code",[t._v("details")]),t._v(". In addition custom actions may be specified by an object with these keys:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Key")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),s("td",[t._v("Caption for the action")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),s("td",[t._v("Custom event to be emitted when the action item is clicked")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("fontawesome")]),t._v(" "),s("td",[t._v("Optional Fontawesome icon to be shown beside the caption. You can only use either this or "),s("code",[t._v("icon")]),t._v(" but not both")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("icon")]),t._v(" "),s("td",[t._v("Optional "),s("code",[t._v("b-icon")]),t._v(" to be shown beside the caption. You can only use either this or "),s("code",[t._v("fontawsome")]),t._v(" but not both")])])])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttext"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tevent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect-clicked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tfontawesome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fas fa-hands-helping'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Reference:\n"),s("a",{attrs:{href:"https://bootstrap-vue.org/docs/icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("b-icon"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://fontawesome.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("fontawesome"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"modal-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modal-fields"}},[t._v("#")]),t._v(" modal-fields")]),t._v(" "),s("p",[t._v("A required object array for specifying what fields are available on the modal.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Key")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("fieldType")]),t._v(" "),s("td",[t._v("The element to be used")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("placeholder")]),t._v(" "),s("td",[t._v("Placeholder when field is empty")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),s("td",[t._v("Name of the field")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),s("td",[t._v("ID must match the corresponding key returned from the API and "),s("code",[t._v("initial-values")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("rules")]),t._v(" "),s("td",[t._v("For input fields Vee-valudate rules maybe included")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("requireModel")]),t._v(" "),s("td",[t._v("When set to true the field will only show up in edit mode.")])])])]),t._v(" "),s("p",[t._v("You may also include props of the specific elements used.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t    fieldType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b-form-input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    caption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    placeholder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name *"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-3 mr-3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vBPopover"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            trigger"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hover'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You full name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            placement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'top'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            variant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'primary'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Reference: "),s("a",{attrs:{href:"https://logaretm.github.io/vee-validate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vee-validate"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),s("p",[t._v("Required string value for the API URL for the model. This sets the base for the other API verbs. Please see example right below.")]),t._v(" "),s("h3",{attrs:{id:"grid-url-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-url-query"}},[t._v("#")]),t._v(" grid-url-query")]),t._v(" "),s("p",[t._v("Required string value for appended to the API URL for querying for the grid. This is useful when a specific querying is required for initial load. If no specifc filtering is required you may use '/'.")]),t._v(" "),s("p",[t._v("For example, given API = 'api/person' and grid-url-query = 'men':")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Action")]),t._v(" "),s("th",[t._v("URL")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),s("td",[t._v("api/person/men")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),s("td",[t._v("api/person")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),s("td",[t._v("api/person/1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),s("td",[t._v("api/person/1")])])])]),t._v(" "),s("h3",{attrs:{id:"buttons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buttons"}},[t._v("#")]),t._v(" buttons")]),t._v(" "),s("p",[t._v("Optional array of objects for adding custom buttons left of the standard buttons at the bottom of the modal.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Key")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),s("td",[t._v("Required as unique key")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("event")]),t._v(" "),s("td",[t._v("Custom event to be emitted with the button is clicked. The data object of the current record is passed")])])])]),t._v(" "),s("p",[t._v("Other "),s("code",[t._v("b-button")]),t._v(" props maybe in included in the object for styling. "),s("strong",[t._v("Note:")]),t._v(" Not all "),s("code",[t._v("b-button")]),t._v(" props are tested.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'printBtn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tvariant"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'primary'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Print Record'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'print-requested'")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"insertable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insertable"}},[t._v("#")]),t._v(" insertable")]),t._v(" "),s("p",[t._v("Boolean to indicate whether the Insert button is shown. Default is true.")]),t._v(" "),s("h3",{attrs:{id:"searchable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchable"}},[t._v("#")]),t._v(" searchable")]),t._v(" "),s("p",[t._v("Boolean to indicate whether the Search box is shown. Default is true.")]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Event")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-created")]),t._v(" "),s("td",[t._v("POST API for new record is successful")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-create-failed")]),t._v(" "),s("td",[t._v("POST API for new record is failed")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-updated")]),t._v(" "),s("td",[t._v("PUT API for editing the record is successful")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-update-failed")]),t._v(" "),s("td",[t._v("PUT API for editing the record is failed")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-removed")]),t._v(" "),s("td",[t._v("DELETE API for the record is successful")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("record-remove-failed")]),t._v(" "),s("td",[t._v("DELETE API for the record is failed")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("async-returns")]),t._v(" "),s("td",[t._v("Emitted whenever any of API endpoints is successful or failed (except for GET)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("modal-close")]),t._v(" "),s("td",[t._v("The modal is closed thus indicating user's action is cancelled")])])])]),t._v(" "),s("h2",{attrs:{id:"built-with"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-with"}},[t._v("#")]),t._v(" Built With")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"vuejs.org"}},[t._v("Vue")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bootstrap-vue.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap-Vue"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://getbootstrap.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://logaretm.github.io/vee-validate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vee-validate"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"bundling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundling"}},[t._v("#")]),t._v(" Bundling")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mochajs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.chaijs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chai"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"authors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[t._v("#")]),t._v(" Authors")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kikiio.com",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Daniel 'Kikiio' Leung")]),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"contribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contribute"}},[t._v("#")]),t._v(" Contribute")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/CONTRIBUTE.html"}},[t._v("Read here")])],1)]),t._v(" "),s("h2",{attrs:{id:"code-of-conduct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-of-conduct"}},[t._v("#")]),t._v(" Code of Conduct")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/CONDUCT.html"}},[t._v("Read here")])],1)]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/LICENSE.html"}},[t._v("MIT")])],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);