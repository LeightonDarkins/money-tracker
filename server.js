require('./config/node-config')

const express = require('express')
const path = require('path')

let app = express();
const port = process.env.PORT

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'vendor')))

app.get('/', (req, res) => {
  console.info('SERVER: serving index.html')
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.info('SERVER: started on ' + port)
})

module.exports = { app }
