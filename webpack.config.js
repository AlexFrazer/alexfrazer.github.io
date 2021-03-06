const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HTMLPlugin = require('webpack-html-plugin');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const basePath = path.resolve(__dirname, 'app');

const baseConfig = {
  context: basePath,
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'velocity-react',
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      app: basePath,
    },
    modules: [
      'node_modules',
      basePath,
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(basePath, 'index.tpl.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          }),
        ],
        context: path.resolve(__dirname, 'app'),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = (env = process.env.NODE_ENV || 'production') => {
  const isDev = env.toLowerCase() !== 'production';
  return merge(baseConfig, isDev ? devConfig : prodConfig);
};