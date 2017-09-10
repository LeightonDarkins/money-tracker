export const types = {
  accountClicked: 'ACCOUNT_CLICKED',
  fetchAccountsSucceeded: 'FETCH_ACCOUNTS_SUCCEEDED',
  fetchAccountsFailed: 'FETCH_ACCOUNTS_FAILED'
}

export const accountClicked = (id) => {
  return { type: types.accountClicked, id }
}

export const fetchAccountsSucceeded = (accounts) => {
  return { type: types.fetchAccountsSucceeded, accounts }
}
