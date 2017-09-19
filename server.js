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
      { route: '/category', handle: backend }
    ]
  })
}

// Start server with either a fake backend or a proxy to the real one
console.log('Checking if backend is running')
axios.get('https://money-tracker-server.herokuapp.com')
.catch(error => {
  if (error.response) {
    return error.response
  } else {
    throw error
  }
})
.then(_ => {
  console.log('Backend is running, proxying to it')
  const backendProxy = proxy({ target: 'https://money-tracker-server.herokuapp.com', changeOrigin: true })
  startServer(backendProxy)
})
.catch(_ => {
  console.log('Backend is not running, starting fake backend')
  startServer(fakeBackend)
})
