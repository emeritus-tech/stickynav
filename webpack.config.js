const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    stickynav: './stickynav.js',
    stickynavStyles: './stickynav.scss',
  },
  mode: env,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'stickynav',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'server'),
    compress: true,
    port: 3600,
    hot: true,
    open: true
  },
  externals: {
    'lodash': {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
    }
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
    new MiniCssExtractPlugin({
      filename: "stickynav.css",
      chunkFilename: "[id].css"
    }),
    new IgnoreEmitPlugin(/stickynavStyles.js/),
  ]
};
