export const types = {
  fetchTransactionsStarted: 'FETCH_TRANSACTIONS_STARTED',
  fetchTransactionsSucceeded: 'FETCH_TRANSACTIONS_SUCCEEDED',
  fetchTransactionsFailed: 'FETCH_TRANSACTIONS_FAILED',
  transactionClicked: 'TRANSACTION_CLICKED',
  fetchTransactions: 'FETCH_TRANSACTIONS'
}

export const fetchTransactionsStarted = () => ({ type: types.fetchTransactionsStarted })

export const fetchTransactionsFailed = () => ({ type: types.fetchTransactionsFailed })

export const fetchTransactionsSucceeded = (transactions) => ({ type: types.fetchTransactionsSucceeded, transactions })

export const transactionClicked = (id) => ({ type: types.transactionClicked, id })

export const fetchTransactions = (id) => ({ type: types.fetchTransactions, accountId: id })
