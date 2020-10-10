/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || 'development'),
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8888,
  },
};
