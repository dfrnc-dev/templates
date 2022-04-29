const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.argv[process.argv.indexOf('--mode') + 1] === 'development';


module.exports = {
	entry: {
		main: path.resolve(__dirname, "../src/pages/index/index-entry.js"),
	},
	output: {
		filename: 'assets/js/[name].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	resolve: {
		alias: {
			scr: path.resolve(__dirname, "../src"),
		}
	},
	devtool: isDev ? 'source-map' : 'eval',
	mode: isDev ? 'development' : 'production',
	devServer: {
		port: 3030,
		// watchFiles: path.join(__dirname, '../dist'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "assets/css/[name].css",
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: "./src/pages/index/index.hbs",
			chunks: ['main'],
			inject: true,
			minify: false
		}),
		new CleanWebpackPlugin(),
	],
	resolveLoader: {
		alias: {
			'svg-anim-loader': path.resolve(__dirname, './loader/svg-anim-loader.js'),
		},
	},
	module: {
		rules: [
			// {
			// 	test: /\.svg$/,
			// 	use: [
			// 		{
			// 			loader : 'svg-anim-loader',
			// 			options: {
			// 				outImageUrl : "/assets/img/",
			// 				needContent : false,
			// 			}
			//
			// 		},
			// 		// loader: "html-loader",
			// 		// 'babel-loader',
			// 		// loader: 'svg-loader',
			// 		// loader: 'file-loader',
			// 	],
			// 	exclude: /(node_modules|bower_components)/,
			//
			// },
			{
				test: /\.(hbs|svg)$/,
				loader: "handlebars-loader",
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					minimize: false,
					esModule: false,
					// attrs: ['img:src','link:href','image:xlink:href']
				},
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[name].[ext]',
							outputPath: './assets/img',
							publicPath: './assets/img',
							// useRelativePaths: true
						}
					}
				]
			},
			{
				test: /\.(css|s[ac]ss)$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// url: false,
							esModule: false,
							// sourceMap: true
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: isDev,
							url: false,
							esModule: false,
						}
					}, {
						loader: 'postcss-loader',
						options: { sourceMap: isDev }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: isDev }
					}
				]
			},
			{
				test: /\.(ttf|woff(2)?|eot)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[name].[ext]',
							outputPath: './fonts',
							// publicPath: './src/fonts',
							// useRelativePaths: true
						}
					}
				]
			},
		]
	}
}

