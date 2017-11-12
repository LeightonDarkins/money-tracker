class MoneyTrackerError {
  constructor (status = 'NETWORK ERROR', reason, message) {
    this.id = Date.now()
    this.status = status
    this.reason = reason
    this.message = message
  }

  getTitle () {
    if (this.status === 'NETWORK ERROR') return this.status

    return `${this.status} ${this.reason}`
  }

  getMessage () {
    if (this.status === 'NETWORK ERROR') return 'There was a problem connecting to the server. Check your internet connection and try again.'

    return this.message
  }

  getId () {
    return this.id
  }
}

module.exports = MoneyTrackerError
