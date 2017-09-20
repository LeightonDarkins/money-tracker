process.env.backendUrl = 'https://money-tracker-server.herokuapp.com'

var env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 3000

  console.log('Choosing backend to target')

  if (process.argv.length > 2) {
    if (process.argv[2] === '--local') process.env.backendUrl = 'http://localhost:3020'
  }
}
