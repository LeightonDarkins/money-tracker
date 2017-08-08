const HOST = process.env.MONEY_TRACKER_SERVER_HOST
const PORT = process.env.MONEY_TRACKER_SERVER_PORT
const ENV = process.env.MONEY_TRACKER_ENV
let REQUEST_PREFIX

if (ENV === 'development') {
  REQUEST_PREFIX = 'http'
} else {
  REQUEST_PREFIX = 'https'
}

module.exports = {
  MINIMUM_ACCOUNT_NAME_LENGTH: 3,
  EMPTY_STRING: '',
  SERVER_URI: `${REQUEST_PREFIX}://${HOST}:${PORT}`
}
