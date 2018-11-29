// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const commonConfig = require('./webpack.common.js');

const prodConfig = () => {
	return merge(
		{
			plugins: [
				new CleanWebpackPlugin(['dist']),
				new MiniCssExtractPlugin(),
				new OptimizeCssAssetsPlugin()
			]
		}
	)
}

module.exports = (env = {}) => {
	env.PLATFORM = 'prod'
	return merge(commonConfig(env), prodConfig());
}
