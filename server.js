var server = require('browser-sync').create();

// .init starts the server
server.init({
    server: './'
});

// Now call methods on bs instead of the
// main browserSync module export
server.watch('./dist/*').on('change', server.reload)

// require('./config/node-config')
//
// const express = require('express')
// const path = require('path')
// const axios = require('axios')
//
// let app = express();
// const port = process.env.PORT
//
// app.use('/dist', express.static(path.join(__dirname, 'dist')))
// app.use('/assets', express.static(path.join(__dirname, 'assets')))
// app.use('/vendor', express.static(path.join(__dirname, 'vendor')))
//
// app.get('/', (req, res) => {
//   console.info('SERVER: serving index.html')
//   res.sendFile(__dirname + '/index.html')
// })
//
// app.listen(port, () => {
//   console.info('SERVER: started on ' + port)
// })
//
// module.exports = { app }
