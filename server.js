var server = require('browser-sync').create()
const fakeBackend = require('./fakeBackend/fakebackend')

// .init starts the server
server.init({
  server: './dist',
  middleware: [
    { route: '/accounts', handle: fakeBackend },
    { route: '/account', handle: fakeBackend }
  ]
})

// Now call methods on bs instead of the
// main browserSync module export
server.watch('./dist/*').on('change', server.reload)
