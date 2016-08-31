import * as path from 'path';
import express from 'express';
import webpack from 'webpack';
import { createServer } from 'http';
import config from './webpack.config.development';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(config);
const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunkModules: false
  }
});

app.use(wdm);
app.use(webpackHotMiddleware(compiler));

app.use('*', function (req, res) {
  res.write(wdm.fileSystem.readFileSync(path.join(__dirname, 'index.html')))
  res.end();
});

const server = createServer(app);

server.listen(5000, function () {
  const { address, port } = server.address();
  const host = address === '::' ? '127.0.0.1' : address;

  console.log(`Hot module replacement server listening at http://${host}:${port}/`)
});

process.on('SIGTERM', () => {
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
})
