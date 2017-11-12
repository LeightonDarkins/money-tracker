/* eslint-env jest */

import reducer from './TransactionList.reducer'
import { types } from './TransactionList.actions'

describe('TransactionListReducer', () => {
  it('returns the initial state for no action', () => {
    expect(reducer(undefined, {}))
      .toEqual({ transactions: [], categories: [], isLoading: false })
  })

  it('responds to fetchTransactionsStarted', () => {
    expect(reducer(undefined, { type: types.fetchTransactionsStarted }))
      .toEqual({ transactions: [], categories: [], isLoading: true })
  })

  it('respnds to fetchTransactionsSucceeded', () => {
    const transactions = ['transaction-1', 'transaction-2']

    expect(reducer(undefined, { type: types.fetchTransactionsSucceeded, transactions }))
      .toEqual({ transactions, categories: [], isLoading: false })
  })

  it('responds to fetchTransactionsFailed', () => {
    expect(reducer({ transactions: [], categories: [], isLoading: true }, { type: types.fetchTransactionsFailed }))
      .toEqual({ transactions: [], categories: [], isLoading: false })
  })

  it('responds to fetchCategoriesSucceeded', () => {
    const categories = ['category-1', 'category-2']

    expect(reducer(undefined, { type: types.fetchCategoriesSucceeded, categories }))
      .toEqual({ transactions: [], categories, isLoading: false })
  })
})
