const HtmlPlugins = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./JS/main.js",
    plugins: [new HtmlPlugins({
        template: "./HTML/home.html"
    }), new CopyPlugin({
        patterns: [{
            from: "./CSS",
            to: "./CSS"
        }]
    })]
};
