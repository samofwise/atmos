const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
	const isDevBuild = !(env && env.prod);
	return [{
		mode: 'development',
		entry: './src/main.tsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/'
		},
		stats: { modules: false },
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
			alias: { 'src': path.resolve(__dirname, 'src') }
		},
		devtool: 'source-map',
		devServer: {
			contentBase: './dist',
			historyApiFallback: true,
		},
		node: {
			global: false
		},
		module: {
			rules: [

				// { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
				{ test: /\.tsx?$/, include: /src/, use: 'ts-loader', exclude: /node_modules/ },
				{
					test: /\.less$/,
					use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" },
						{ loader: "less-loader", options: { strictMath: true, noIeCompat: true } }
					]
				},
				{
					test: /\.css$/,
					use: [{ loader: "style-loader" },
					{ loader: "css-loader" }]
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/,
					use: {
						loader: "file-loader",
						options: { name: "fonts/[name].[ext]" }
					},
				},
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				hash: true,
				filename: 'index.html', //relative to root of the application
				inject: false,
				template: require('html-webpack-template'),
				appMountId: 'app',
				title: 'Atmos',

			}),
			new webpack.DefinePlugin({
				global: 'window'// Placeholder for global used in any node_modules
			})
		]
	}];
};