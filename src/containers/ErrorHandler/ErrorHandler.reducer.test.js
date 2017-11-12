/* eslint-env jest */

import reducer from './ErrorHandler.reducer'
import { types } from './ErrorHandler.actions'

describe('ErrorHandlerReducer', () => {
  it('returns the initial state for no action', () => {
    expect(reducer(undefined, {}))
      .toEqual({ errors: [] })
  })

  it('responds to apiError correctly', () => {
    expect(reducer(undefined, { type: types.apiError, error: 'this is an error' }))
      .toEqual({ errors: ['this is an error'] })
  })

  it('responds to closeError correctly', () => {
    const initialState = {
      errors: [
        {
          response: {
            headers: {
              date: '12345'
            }
          }
        },
        {
          response: {
            headers: {
              date: '12354'
            }
          }
        }
      ]
    }

    const expectedErrors = [
      {
        response: {
          headers: {
            date: '12354'
          }
        }
      }
    ]

    expect(reducer(initialState, { type: types.closeError, error: '12345' }))
      .toEqual({ errors: expectedErrors })
  })
})
