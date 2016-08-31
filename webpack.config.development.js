import merge from 'webpack-merge';
import * as webpack from 'webpack';
import config from './webpack.config.base';

const port = 5000;

export default merge(config, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
    './app/index'
  ],
  output: {
    publicPath: `http://localhost:${port}/dist/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
