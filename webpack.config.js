const HtmlPlugins = require('html-webpack-plugin');

module.exports = {
    entry: "./JS/main.js",
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlPlugins({
        template: "./HTML/home.html"
    })]
};
