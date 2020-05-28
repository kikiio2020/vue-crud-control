const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var baseConfig = {
	mode: 'production',
	output: {
	    path: path.resolve(__dirname + '/dist/')
	},
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
	    				presets: ['@babel/preset-env']
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
	    new VueLoaderPlugin(),
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
};

module.exports = [
	merge(
		baseConfig, 
		{
			entry: path.resolve(__dirname + '/src/plugin.js'),
			output: {
				filename: 'crud-control.min.js',
				libraryTarget: 'window',
				library: 'CrudControl'
			}
		}
	),
	merge(
		baseConfig,
		{
			entry: path.resolve(__dirname + '/src/CrudControl.vue'),
			output: {
				filename: 'crud-control.js',
				libraryTarget: 'umd',
				library: 'crud-control',
				umdNamedDefine: true
			}
		}
	)
];
