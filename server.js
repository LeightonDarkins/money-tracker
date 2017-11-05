require('./config/node-config')

const sslRedirect = require('heroku-ssl-redirect')
const compression = require('compression')
const express = require('express')
const path = require('path')

let app = express()
app.use(sslRedirect())
const port = process.env.PORT

app.use(compression())
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/dist/assets', express.static(path.join(__dirname, 'dist/assets')))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.get('/styles.css', (req, res) => {
  res.sendFile(`${__dirname}/dist/styles.css`)
})

app.get('/app.js', (req, res) => {
  res.sendFile(`${__dirname}/dist/app.js`)
})

app.get('/manifest.json', (req, res) => {
  res.sendFile(`${__dirname}/dist/manifest.json`)
})

app.get('/money-tracker.appcache', (req, res) => {
  res.sendFile(`${__dirname}/dist/money-tracker.appcache`)
})

app.get('/assets/money-bag-dollar.png', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/money-bag-dollar.png`)
})

app.get('/assets/money-tracker-192.png', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/money-tracker-192.png`)
})

app.get('/assets/money-tracker-256.png', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/money-tracker-256.png`)
})

app.get('/assets/money-tracker-384.png', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/money-tracker-384.png`)
})

app.get('/assets/money-tracker-512.png', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/money-tracker-512.png`)
})

app.get('/assets/fontawesome-webfont.woff2', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/fontawesome-webfont.woff2`)
})

app.get('/assets/fontawesome-webfont.woff', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/fontawesome-webfont.woff`)
})

app.get('/assets/fontawesome-webfont.ttf', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/fontawesome-webfont.ttf`)
})

app.get('/assets/fontawesome-webfont.svg', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/fontawesome-webfont.svg`)
})

app.get('/assets/fontawesome-webfont.eot', (req, res) => {
  res.sendFile(`${__dirname}/dist/assets/fontawesome-webfont.eot`)
})

app.listen(port, () => {
  console.log(`Started at ${port}`)
})

module.exports = { app }
