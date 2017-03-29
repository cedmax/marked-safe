const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(config.port, config.host, (err) => {
  if (err) {
    console.log(err)
  }

  console.log(`Listening at http://${config.host}:${config.port}`)
})
