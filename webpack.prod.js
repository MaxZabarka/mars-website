const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	output: {
		filename: `main.[contenthash].js`,
		path: path.resolve(__dirname, "docs"),
	},
	mode: "production",
});
