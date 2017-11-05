/* eslint-env jest */

import reducer from './TransactionForm.reducer'
import moment from 'moment'
import { types } from './TransactionForm.actions'

let expectedState

const runReducerWithAction = action => (reducer(undefined, action))
const getInitialState = () => {
  return {
    account: '',
    accounts: [],
    amount: 0,
    categories: [],
    category: '',
    date: moment().startOf('day'),
    transactionType: 'expense'
  }
}

describe('TransactionFormReducer', () => {
  beforeEach(() => {
    expectedState = getInitialState()
  })

  it('returns the initial state for no action', () => {
    let state = reducer(undefined, {})

    expect(state).toEqual(expectedState)
  })

  it('responds to amountChanged', () => {
    let state = runReducerWithAction({ type: types.amountChanged, amount: 1 })

    expectedState.amount = 1

    expect(state).toEqual(expectedState)
  })

  it('responds to dateChanged', () => {
    let state = runReducerWithAction({ type: types.dateChanged, date: { id: 'date' } })

    expectedState.date = { id: 'date' }

    expect(state).toEqual(expectedState)
  })

  it('responds to categoryChanged', () => {
    let state = runReducerWithAction({ type: types.categoryChanged, category: 'category-1' })

    expectedState.category = 'category-1'

    expect(state).toEqual(expectedState)
  })

  it('responds to accountChanged', () => {
    let state = runReducerWithAction({ type: types.accountChanged, account: 'account-1' })

    expectedState.account = 'account-1'

    expect(state).toEqual(expectedState)
  })

  it('responds to typeChanged', () => {
    let state = runReducerWithAction({ type: types.typeChanged, transactionType: 'expense' })

    expectedState.transactionType = 'expense'

    expect(state).toEqual(expectedState)
  })

  describe('transactionFormFetchAccountsSucceeded', () => {
    it('responds with accounts', () => {
      const expectedAccounts = [{ id: 'account-1' }, { id: 'account-2' }]

      let state = runReducerWithAction({ type: types.transactionFormFetchAccountsSucceeded, accounts: expectedAccounts })

      expectedState.accounts = expectedAccounts
      expectedState.account = expectedAccounts[0].id

      expect(state).toEqual(expectedState)
    })

    it('responds without accounts', () => {
      const expectedAccounts = []

      let state = runReducerWithAction({ type: types.transactionFormFetchAccountsSucceeded, accounts: expectedAccounts })

      expect(state).toEqual(expectedState)
    })
  })

  describe('transactionFormFetchCategoriesSucceeded', () => {
    it('responds with categories', () => {
      const expectedCategories = [{ id: 'category-1' }, { id: 'category-2' }]

      let state = runReducerWithAction({ type: types.transactionFormFetchCategoriesSucceeded, categories: expectedCategories })

      expectedState.categories = expectedCategories
      expectedState.category = expectedCategories[0].id

      expect(state).toEqual(expectedState)
    })

    it('responds without categories', () => {
      const expectedCategories = []

      let state = runReducerWithAction({ type: types.transactionFormFetchCategoriesSucceeded, categories: expectedCategories })

      expect(state).toEqual(expectedState)
    })
  })

  it('responds to clearTransactionForm', () => {
    let startingState = getInitialState()
    startingState.account = 'account-1'
    startingState.category = 'category-2'
    startingState.transactionType = 'income'
    startingState.amount = 100

    let state = reducer(startingState, { type: types.clearTransactionForm })

    expect(state).toEqual(expectedState)
  })
})
