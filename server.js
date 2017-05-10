require('./config/node-config')

const express = require('express')
const path = require('path')
const axios = require('axios')

let app = express();
const port = process.env.PORT

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'vendor')))

app.get('/', (req, res) => {
  console.info('SERVER: serving index.html')
  res.sendFile(__dirname + '/index.html')
})

app.get('/currency', (req, res) => {
  console.info('SERVER: getting USD to AUD rate')

  axios.get(`http://www.apilayer.net/api/live?access_key=${process.env.MONEY_TRACKER_APP_ID}&source=USD&currencies=AUD&format=1`)
  .then((data) =>{
    res.send(data.data.quotes)
  })
  .catch((error) => {
    console.error(error)
  })
})

app.listen(port, () => {
  console.info('SERVER: started on ' + port)
})

module.exports = { app }
