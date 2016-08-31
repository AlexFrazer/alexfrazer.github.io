import * as path from 'path';
import * as webpack from 'webpack';
import WebpackHTMLPlugin from 'webpack-html-plugin';

export default {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.global\.css$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap'
      ]
    }, {
      test: /^((?!\.global).)*\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      ]
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackHTMLPlugin({
      inject: 'body',
      template: path.join(__dirname, 'app', 'index.tpl.html')
    }),
  ]
}
