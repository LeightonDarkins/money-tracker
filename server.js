var server = require('browser-sync').create()

// .init starts the server
server.init({ server: './dist' })

// Now call methods on bs instead of the
// main browserSync module export
server.watch('./dist/*').on('change', server.reload)
