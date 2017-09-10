const Url = require('url')
const createAccountResponse = require('./responses/createAccount')
const accountsResponse = require('./responses/accounts')
const headers = {'Content-Type': 'application/json'}

// Routes for fake backend. Map of 'METHOD /path' to (request) => [status, headers, body]
const ROUTES = {
  'POST /account': () => [ 200, headers, createAccountResponse ],
  'GET /accounts': () => [ 200, headers, accountsResponse ]
}

// Fake backend middleware
const fakeBackend = function (request, response, next) {
  const url = Url.parse(request.originalUrl)
  const methodAndPath = [request.method, url.pathname].join(' ')
  const route = ROUTES[methodAndPath]

  if (route) {
    console.log('Fake backend received: ' + methodAndPath)
    const [statusCode, headers, body] = route(request)
    response.statusCode = statusCode
    Object.keys(headers).forEach(name => {
      response.setHeader(name, headers[name])
    })
    response.end(JSON.stringify(body))
  } else {
    next()
  }
}

module.exports = fakeBackend
