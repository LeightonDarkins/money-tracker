const generateUrl = (resource) => {
  if (process.env.MONEY_TRACKER_ENV === 'development') return `/${resource}`

  const uri = `https://${process.env.MONEY_TRACKER_SERVER_HOST}:${process.env.MONEY_TRACKER_SERVER_PORT}`
  return `${uri}/${resource}`
}

module.exports = {
  generateUrl
}
