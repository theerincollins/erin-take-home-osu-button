const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin([
	{
		from: './src/assets/', 
		to: './assets/' 
	}
],{ copyUnmodified: false }
);

module.exports = {

	output: {
		path: __dirname + '/build'
	},
	optimization: {
		splitChunks: {
			chunks: "initial",
		},
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
			loader: "babel-loader"
			}
		},
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.(gif|png|apng|jpe?g|svg)$/i,
			use: [
				'file-loader',
				{
				loader: 'image-webpack-loader',
				options: {
					optipng: {
					enabled: false,
					},
					pngquant: {
					endabled: false
					}
				}
				}
			]
		}
		]		
	},
	resolve: {
		extensions: ['.js', '.jsx', '.react.js']
	},
	plugins: [htmlWebpackPlugin, copyWebpackPlugin,  /* new BundleAnalyzerPlugin() */],
	devServer: {
		historyApiFallback: true,
	}
};
