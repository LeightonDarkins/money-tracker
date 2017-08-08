const HOST = process.env.MONEY_TRACKER_SERVER_HOST
const PORT = process.env.MONEY_TRACKER_SERVER_PORT

module.exports = {
  MINIMUM_ACCOUNT_NAME_LENGTH: 3,
  EMPTY_STRING: '',
  SERVER_URI: `http://${HOST}:${PORT}`
}
