var webpack = require('webpack');
var path = require('path');

var moduleProps = {
	loaders: [
		{
			test: /\.jsx$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['react', 'es2015']
			}
		}
	]
};
var resolveProps = {
	extensions: ['', '.js', '.jsx']
};

module.exports = [
	{
		entry: {
			'lib/react-video-hero': './src/react-video-hero'
		},
		output: {
			library: 'VideoHero',
			libraryTarget: 'umd',
			path: path.resolve(__dirname),
			filename: '[name].js'
		},
		externals: [{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			},
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom'
			}
		}],
		devtool: 'source-map',
		module: moduleProps,
		resolve: resolveProps
	},
	{
		entry: {
			'examples/examples': [
				'./examples/example-basic'
			]
		},
		output: {
			path: path.resolve(__dirname),
			filename: '[name].js'
		},
		externals: [{
			'react': 'React',
			'react-dom': 'ReactDOM',
			'../lib/react-video-hero': 'VideoHero'
		}],
		devtool: 'source-map',
		module: moduleProps,
		resolve: resolveProps
	}
];
