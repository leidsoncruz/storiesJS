const path = require('path');
const webpack = require('webpack');

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'stories.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: "this",
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            // { loader: 'babel-loader' },
            {
              loader: 'eslint-loader',
              options: {
                fix: true,
                configFile: __dirname + '/.eslintrc.js'
              }
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader', options: { importLoaders: 1 } },
          ]
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      port: 8000,
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]   
  }
};
