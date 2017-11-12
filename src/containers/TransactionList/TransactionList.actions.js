export const types = {
  fetchTransactionsStarted: 'FETCH_TRANSACTIONS_STARTED',
  fetchTransactionsSucceeded: 'FETCH_TRANSACTIONS_SUCCEEDED',
  fetchTransactionsFailed: 'FETCH_TRANSACTIONS_FAILED',
  transactionClicked: 'TRANSACTION_CLICKED',
  fetchTransactions: 'FETCH_TRANSACTIONS',
  fetchCategories: 'TRANSACTION_LIST_FETCH_CATEGORIES',
  fetchCategoriesSucceeded: 'TRANSACTION_LIST_FETCH_CATEGORIES_SUCCEEDED'
}

export const fetchTransactionsStarted = () => ({ type: types.fetchTransactionsStarted })

export const fetchTransactionsFailed = () => ({ type: types.fetchTransactionsFailed })

export const fetchTransactionsSucceeded = (transactions) => ({ type: types.fetchTransactionsSucceeded, transactions })

export const transactionClicked = (id) => ({ type: types.transactionClicked, id })

export const fetchTransactions = (id) => ({ type: types.fetchTransactions, accountId: id })

export const fetchCategories = () => ({ type: types.fetchCategories })

export const fetchCategoriesSucceeded = (categories) => ({ type: types.fetchCategoriesSucceeded, categories })
