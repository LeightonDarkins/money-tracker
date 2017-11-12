/* eslint-env jest */

import MoneyTrackerError from './MoneyTrackerError'

describe('MoneyTrackerError', () => {
  describe('getTitle', () => {
    it('returns the default title if none is provided', () => {
      let moneyTrackerError = new MoneyTrackerError()

      expect(moneyTrackerError.getTitle()).toEqual('NETWORK ERROR')
    })

    it('returns the status combined with the reason if status and reason are provided', () => {
      let moneyTrackerError = new MoneyTrackerError(500, 'A Reason')

      expect(moneyTrackerError.getTitle()).toEqual('500 A Reason')
    })
  })

  describe('getMessage', () => {
    it('returns the default message if none is provided', () => {
      let moneyTrackerError = new MoneyTrackerError()

      expect(moneyTrackerError.getMessage()).toEqual('There was a problem connecting to the server. Check your internet connection and try again.')
    })

    it('returns the provided message if present', () => {
      let moneyTrackerError = new MoneyTrackerError(500, 'REASON', 'this is a message')

      expect(moneyTrackerError.getMessage()).toEqual('this is a message')
    })
  })
})
