const HtmlPlugins = require('html-webpack-plugin');

module.exports = {
    entry: "./JS/main-component.js",
    plugins: [new HtmlPlugins({
        template: "./HTML/home.html"
    })]
};
