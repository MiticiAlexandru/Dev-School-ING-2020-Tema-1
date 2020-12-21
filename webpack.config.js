const HtmlPlugins = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./JS/main.js",
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlPlugins({
            template: "./HTML/home.html"
        }),
        new CopyPlugin({
            patterns: [{
                from: './img', to: 'img'
            }]
        })
    ]
};
