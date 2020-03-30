const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    main: './src/stickynav.js',
    mainStyles: './src/stickynav.scss',
  },
  mode: env,
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'stickynav.js',
    library: 'stickynav',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3600,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "stickynav.css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "src", "stickynav.scss"), to: "./" },
    ]),
  ]
};
