module.exports = {
    entry: {
        browser: './index-browser.js',
    },
    output: {
        path: __dirname,
        filename: 'cosmicjs.browser.min.js',
    },
    module: {
        loaders: [{
            enforce: 'pre',
            test: /\index.js?$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        },
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'env',
                ],
            }
        }]
    },
}