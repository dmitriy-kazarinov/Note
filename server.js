import express from 'express'
import bodyParser from 'body-parser'

import * as db from './server/utils/UtilsDB'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.js'

const HOSTNAME = process.env.HOSTNAME || '0.0.0.0'
const PORT = process.env.PORT || 8080

config.entry.index.unshift(
  `webpack-hot-middleware/client?http://${HOSTNAME}:${PORT}/`,
  'webpack/hot/dev-server'
)
config.plugins.push(new webpack.HotModuleReplacementPlugin())

db.setUpConnection()

const server = express()
const compiler = webpack(config)

server.use(
  webpackDevMiddleware(compiler, {
    contentBase: config.output.path,
    host: HOSTNAME,
    hot: true,
    port: PORT,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  })
)

server.use(webpackHotMiddleware(compiler))

server.use(bodyParser.json())

server.get('/api/notes', (req, res) => {
  db.listNotes().then(data => res.send(data))
})

server.post('/api/notes', (req, res) => {
  db.createNote().then(data => res.send(data))
})

server.delete('/api/notes/:id', (req, res) => {

})

server.listen(PORT, HOSTNAME, (err) => {
  let url = `http://${HOSTNAME}`

  if (err) {
    return console.error(err)
  }

  if (PORT !== 80) {
    url = url + `:${PORT}`
  }

  console.info(`==> 🌎  Running server. Open up ${url} in your browser.`)
})
