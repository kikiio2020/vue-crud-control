const webpack = require('webpack');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(webpack[0], {
	mode: 'development',
	module: {
	    rules: [
	    	{
	    		test:/\.vue$/,
	    		loader: 'vue-loader'
	    	},
	    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		use: {
	    			loader: 'babel-loader',
	    			options:{
	    				presets: ['@babel/preset-env'],
	    				plugins: ['@babel/plugin-transform-runtime']
	    			}
	    		}
	    	},
	    	{
	    		test:/\.css$/,
	    		use:[
	    			'vue-style-loader',
	    			'css-loader'
	    		]
	    	}
	    	
	    ],
	},
	plugins: [
	    new VueLoaderPlugin()
	],
	externals: {
		BButton: 'BButton',
		BTable: 'BTable', 
		BForm: 'BForm', 
		BFormInput: 'BFormInput', 
		BModal: 'BModal', 
		BFormTextarea: 'BFormTextarea', 
		BFormFile: 'BFormFile', 
		BFormInvalidFeedback: 'BFormInvalidFeedback',
		ValidationProvider: 'ValidationProvider', 
		ValidationObserver: 'ValidationObserver', 
		extend: 'extend',
		required: 'required', 
		image: 'image', 
		size: 'size',
		regex: 'regex'
	}
});