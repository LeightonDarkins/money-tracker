require('./config/node-config')

const express = require('express')
const path = require('path')

let app = express();
const port = process.env.PORT

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'vendor')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log('Started at ' + port)
})

module.exports = { app }
