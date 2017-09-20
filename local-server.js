require('./config/node-config')
const proxy = require('http-proxy-middleware')
const axios = require('axios')
const fakeBackend = require('./fakeBackend/fakebackend')
const server = require('browser-sync').create()

server.watch('./dist/*').on('change', server.reload)

const startServer = (backend) => {
  server.init({
    server: './dist',
    middleware: [
      { route: '/account', handle: backend },
      { route: '/category', handle: backend },
      { route: '/transaction', handle: backend }
    ]
  })
}

// Start server with either a fake backend or a proxy to the real one
console.log(`Checking if backend (${process.env.backendUrl}) is running`)
axios.get(process.env.backendUrl)
.catch(error => {
  if (error.response) {
    return error.response
  } else {
    throw error
  }
})
.then(_ => {
  console.log('Backend is running, proxying to it')
  const backendProxy = proxy({ target: process.env.backendUrl, changeOrigin: true })
  startServer(backendProxy)
})
.catch(_ => {
  console.log('Backend is not running, starting fake backend')
  startServer(fakeBackend)
})
