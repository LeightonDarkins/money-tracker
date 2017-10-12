require('./config/node-config')

const compression = require('compression')
const express = require('express')
const path = require('path')

let app = express()
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

app.get('/cache.manifest', (req, res) => {
  res.sendFile(`${__dirname}/dist/cache.manifest`)
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

app.listen(port, () => {
  console.log(`Started at ${port}`)
})

module.exports = { app }
