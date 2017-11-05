export const types = {
  accountClicked: 'ACCOUNT_CLICKED',
  fetchAccountsStarted: 'FETCH_ACCOUNTS_STARTED',
  fetchAccountsSucceeded: 'FETCH_ACCOUNTS_SUCCEEDED',
  fetchAccountsFailed: 'FETCH_ACCOUNTS_FAILED',
  addTransactionClicked: 'ADD_TRANSACTION_CLICKED',
  fetchAccounts: 'FETCH_ACCOUNTS'
}

export const accountClicked = (id) => ({ type: types.accountClicked, id })

export const fetchAccountsStarted = () => ({ type: types.fetchAccountsStarted })

export const fetchAccountsSucceeded = (accounts) => ({ type: types.fetchAccountsSucceeded, accounts })

export const fetchAccountsFailed = () => ({ type: types.fetchAccountsFailed })

export const addTransactionClicked = () => ({ type: types.addTransactionClicked })

export const fetchAccounts = () => ({ type: types.fetchAccounts })
