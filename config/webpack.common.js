/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
	const { PLATFORM, STAT } = env;
	return {
		mode: PLATFORM === 'prod' ? 'production' : 'development',
		devtool: PLATFORM === 'prod' ? 'source-map' : 'eval-source-map',
		entry: {
			app: './src/index.jsx',
			stylesGlobal: './src/assets/scss/styles.scss'
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, '..', 'dist'),
			publicPath: '/'
		},
		resolve: {
			extensions: ['.jsx', '.js', '.scss'],
			modules: ['node_modules'],
			alias: {
				components: path.resolve(__dirname, '..', 'src', 'app', 'components'),
				containers: path.resolve(__dirname, '..', 'src', 'app', 'containers'),
				models: path.resolve(__dirname, '..', 'src', 'app', 'models'),
				modules: path.resolve(__dirname, '..', 'src', 'app', 'modules'),
				assets: path.resolve(__dirname, '..', 'src', 'assets')
			}
		},
		devServer: {
			historyApiFallback: true,
			contentBase: '.',
			stats: 'minimal',
			overlay: true,
			open: true,
			hot: true
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: true
				})
			],
			splitChunks: {
				chunks: 'async',
				minSize: 30000,
				maxSize: 0,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				automaticNameDelimiter: '~',
				name: true,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all'
					},
					styles: {
						name: 'styles',
						test: /\.scss$/,
						chunks: 'all',
						enforce: true
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true
					}
				}
			}
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					exclude: [
						path.resolve(__dirname, '..', 'src', 'assets', 'scss'),
						/node_modules/
					],
					use: [
						PLATFORM === 'prod' ? MiniCssExtractPlugin.loader : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									path.resolve(__dirname, '..', 'src', 'assets', 'scss')
								]
							}
						}
					]
				},
				{
					test: /\.scss$/,
					exclude: [
						path.resolve(__dirname, '..', 'src', 'app'),
						/node_modules/
					],
					use: [
						PLATFORM === 'prod' ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									path.resolve(__dirname, '..', 'src', 'assets', 'scss')
								]
							}
						}
					]
				},
				{
					test: /\.(jsx|js)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader',
						{
							loader: 'eslint-loader',
							options: {
								emitWarning: PLATFORM !== 'prod'
							}
						}
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					exclude: /node_modules/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 1000,
							name: '[name].[ext]'
						}
					}
				},
				{
					test: /\.(ttf)$/,
					loader: 'url-loader?limit=100000'
				}
			]
		},
		plugins: [
			STAT
				? new BundleAnalyzerPlugin()
				: new HtmlWebpackPlugin({
						template: './src/index.html',
						removeComments: true,
						collapseWhitespace: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
						minifyURLs: true
				  }),
			PLATFORM === 'dev'
				? new webpack.NormalModuleReplacementPlugin(
						/.\/api/,
						path.join(__dirname, '..', '__mocks__', 'api')
				  )
				: () => {},
			new webpack.DefinePlugin({
				PRODUCTION: JSON.stringify(PLATFORM === 'prod')
			})
		]
	};
};
