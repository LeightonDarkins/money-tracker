export const types = {
  accountClicked: 'ACCOUNT_CLICKED',
  fetchAccountsSucceeded: 'FETCH_ACCOUNTS_SUCCEEDED',
  fetchAccountsFailed: 'FETCH_ACCOUNTS_FAILED',
  addTransactionClicked: 'ADD_TRANSACTION_CLICKED'
}

export const accountClicked = (id) => {
  return { type: types.accountClicked, id }
}

export const fetchAccountsSucceeded = (accounts) => {
  return { type: types.fetchAccountsSucceeded, accounts }
}

export const addTransactionClicked = () => {
  return { type: types.addTransactionClicked }
}
