/* eslint import/no-extraneous-dependencies: "off" */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const CSS_LOADERS = 'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader';
const CSS_DEV = `style-loader!${CSS_LOADERS}`;
const CSS_PROD = ExtractTextPlugin.extract({ use: CSS_LOADERS });
const DEBUG = !process.argv.includes('-p');

const entry = { index: './src/index.js' };
const packageNames = Object.keys(pkg.dependencies).reverse();

function reduceDependencies(prevObj, key) {
  const obj = prevObj;
  obj[key] = key;
  return obj;
}

module.exports = {
  context: path.resolve(__dirname),
  entry: Object.keys(pkg.dependencies).reduce(reduceDependencies, entry),
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: DEBUG ? CSS_DEV : CSS_PROD,
    }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].js',
  },
  performance: { hints: DEBUG ? false : 'warning' },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ names: packageNames }),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new ExtractTextPlugin({ filename: 'index.css' }),
  ],
};
