export const types = {
  accountClicked: 'ACCOUNT_CLICKED',
  fetchAccountsStarted: 'FETCH_ACCOUNTS_STARTED',
  fetchAccountsSucceeded: 'FETCH_ACCOUNTS_SUCCEEDED',
  fetchAccountsFailed: 'FETCH_ACCOUNTS_FAILED',
  addTransactionClicked: 'ADD_TRANSACTION_CLICKED'
}

export const accountClicked = (id) => {
  return { type: types.accountClicked, id }
}

export const fetchAccountsStarted = () => {
  return { type: types.fetchAccountsStarted }
}

export const fetchAccountsSucceeded = (accounts) => {
  return { type: types.fetchAccountsSucceeded, accounts }
}

export const fetchAccountsFailed = () => {
  return { type: types.fetchAccountsFailed }
}

export const addTransactionClicked = () => {
  return { type: types.addTransactionClicked }
}
