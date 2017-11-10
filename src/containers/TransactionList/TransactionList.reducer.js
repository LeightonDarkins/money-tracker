import { types } from './TransactionList.actions'

const initialState = { transactions: [], isLoading: false }

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case types.fetchTransactionsStarted:
      return Object.assign({}, state, { isLoading: true })
    case types.fetchTransactionsSucceeded:
      return Object.assign({}, state,
        {
          transactions: action.transactions,
          isLoading: false
        })
    case types.fetchTransactionsFailed:
      return Object.assign({}, state, { isLoading: false })
    default:
      return state
  }
}

export default accounts
