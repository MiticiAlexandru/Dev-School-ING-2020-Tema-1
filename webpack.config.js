const HtmlPlugins = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./JS/main.js",
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './css', to: 'css'
                },
                {
                    from: './img', to: 'img'
                }
            ]
        }),
        new HtmlPlugins({
            template: "./HTML/home.html"
        })
    ]
};
