/* eslint-env jest */

import reducer from './TransactionList.reducer'
import { types } from './TransactionList.actions'

describe('TransactionListReducer', () => {
  it('returns the initial state for no action', () => {
    expect(reducer(undefined, {})).toEqual({ transactions: [], isLoading: false })
  })

  it('responds to fetchTransactionsStarted', () => {
    expect(reducer(undefined, { type: types.fetchTransactionsStarted })).toEqual({ transactions: [], isLoading: true })
  })

  it('respnds to fetchTransactionsSucceeded', () => {
    const transactions = ['transaction-1', 'transaction-2']

    expect(reducer(undefined, { type: types.fetchTransactionsSucceeded, transactions })).toEqual({ transactions, isLoading: false })
  })

  it('responds to fetchTransactionsFailed', () => {
    expect(reducer({ transactions: [], isLoading: true }, { type: types.fetchTransactionsFailed }))
      .toEqual({ transactions: [], isLoading: false })
  })
})
