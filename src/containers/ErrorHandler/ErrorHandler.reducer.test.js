/* eslint-env jest */

import reducer from './ErrorHandler.reducer'
import { types } from './ErrorHandler.actions'
import MoneyTrackerError from '../../common/MoneyTrackerError'

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
        new MoneyTrackerError(),
        new MoneyTrackerError()
      ]
    }

    initialState.errors[0].id = '12345'

    const expectedErrors = [
      initialState.errors[1]
    ]

    expect(reducer(initialState, { type: types.closeError, error: '12345' }))
      .toEqual({ errors: expectedErrors })
  })
})
