// eslint-disable-next-line node/no-unpublished-require
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [new ESLintPlugin()],
  entry: {
    browser: './index-browser.js',
  },
  output: {
    path: __dirname,
    filename: 'cosmicjs.browser.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
