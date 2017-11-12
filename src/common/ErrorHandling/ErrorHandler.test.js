/* eslint-env jest */

import { ErrorHandler } from './ErrorHandler'

describe('ErrorHandler', () => {
  const mockDate = {
    now: () => ('now')
  }

  let dateCopy = Date

  beforeEach(() => {
    Date = mockDate // eslint-disable-line no-global-assign
  })

  afterEach(() => {
    Date = dateCopy // eslint-disable-line no-global-assign
    dateCopy = undefined
  })

  it('returns a default error for poorly formed errors', () => {
    let expectedError = {
      id: 'now',
      reason: undefined,
      message: undefined,
      status: 'NETWORK ERROR'
    }

    expect(ErrorHandler({})).toEqual(expectedError)
  })

  it('returns a populated error object for a well formed error', () => {
    let inputError = {
      response: {
        status: 500,
        statusText: 'SERVER ERROR',
        data: {
          message: 'Some kind of excellent error occured'
        }
      }
    }

    let expectedError = {
      id: 'now',
      reason: 'SERVER ERROR',
      message: 'Some kind of excellent error occured',
      status: 500
    }

    expect(ErrorHandler(inputError)).toEqual(expectedError)
  })

  it('returns a populate error object for a well formed error, without a message', () => {
    let inputError = {
      response: {
        status: 500,
        statusText: 'SERVER ERROR'
      }
    }

    let expectedError = {
      id: 'now',
      reason: 'SERVER ERROR',
      message: 'An unknown error occured.',
      status: 500
    }

    expect(ErrorHandler(inputError)).toEqual(expectedError)
  })
})
