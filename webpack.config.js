const webpack = require('webpack');

const path = require('path');
const atImport = require('postcss-import');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  name: "client-side rendering",
  entry: [
    './client/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
  ]
};
