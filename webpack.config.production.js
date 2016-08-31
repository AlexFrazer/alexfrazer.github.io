import merge from 'webpack-merge';
import * as webpack from 'webpack';
import config from './webpack.config.base';

export default merge(config, {
  devtool: 'cheap-module-source-map',
  publicPath: __dirname,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
});
