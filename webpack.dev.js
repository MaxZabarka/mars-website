const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: "development",
	devServer: {
    host: '192.168.1.65',//your ip address
    port: 8080,
    disableHostCheck: true,
}
});
