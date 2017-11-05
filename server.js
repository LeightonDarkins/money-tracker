require('./config/node-config')

const sslRedirect = require('heroku-ssl-redirect')
const compression = require('compression')
const express = require('express')

let app = express()
app.use(sslRedirect())
const port = process.env.PORT

app.use(compression())

const items = [
  'styles.css',
  'app.js',
  'serviceWorker.js',
  'RegisterServiceWorker.js',
  'manifest.json',
  'money-tracker.appcache',
  'assets/money-bag-dollar.png',
  'assets/money-tracker-192.png',
  'assets/money-tracker-256.png',
  'assets/money-tracker-384.png',
  'assets/money-tracker-512.png',
  'assets/fontawesome-webfont.woff2',
  'assets/fontawesome-webfont.woff',
  'assets/fontawesome-webfont.ttf',
  'assets/fontawesome-webfont.svg',
  'assets/fontawesome-webfont.eot',
  'offline.html'
]

items.forEach((item) => {
  return app.get(`/${item}`, (req, res) => {
    res.sendFile(`${__dirname}/dist/${item}`)
  })
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(port, () => {
  console.log(`Started at ${port}`)
})

module.exports = { app }
