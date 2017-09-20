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
console.log('Choosing backend to target')
let backendUrl = 'https://money-tracker-server.herokuapp.com'

if (process.argv.length > 2) {
  if (process.argv[2] === '--local') backendUrl = 'http://localhost:3020'
}

console.log(`Checking if backend (${backendUrl}) is running`)
axios.get(backendUrl)
.catch(error => {
  if (error.response) {
    return error.response
  } else {
    throw error
  }
})
.then(_ => {
  console.log('Backend is running, proxying to it')
  const backendProxy = proxy({ target: backendUrl, changeOrigin: true })
  startServer(backendProxy)
})
.catch(_ => {
  console.log('Backend is not running, starting fake backend')
  startServer(fakeBackend)
})
