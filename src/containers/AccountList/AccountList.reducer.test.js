/* eslint-env jest */

import AccountListReducer from './AccountList.reducer'
import { types } from './AccountList.actions'

describe('AccountListReducer', () => {
  const reducer = AccountListReducer

  it('returns the initial state for no action', () => {
    expect(reducer(undefined, {})).toEqual({ accounts: [], isLoading: false })
  })

  it('responds to fetchAccountsSucceeded', () => {
    const accounts = ['account-1', 'account-2']
    const action = { type: types.fetchAccountsSucceeded, accounts }

    expect(reducer(undefined, action)).toEqual({ accounts, isLoading: false })
  })

  it('responds to fetchAccountsFailed', () => {
    const action = { type: types.fetchAccountsFailed }

    expect(reducer({ accounts: [], isLoading: true }, action)).toEqual({ accounts: [], isLoading: false })
  })

  it('responds to fetchAccountsStarted', () => {
    const action = { type: types.fetchAccountsStarted }

    expect(reducer(undefined, action)).toEqual({ accounts: [], isLoading: true })
  })
})
