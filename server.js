require('./config/node-config')

const express = require('express')
const path = require('path')

let app = express()
const port = process.env.PORT

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
  console.log('getting manifest')

  res.sendFile(`${__dirname}/dist/manifest.json`)
})

app.listen(port, () => {
  console.log(`Started at ${port}`)
})

module.exports = { app }
