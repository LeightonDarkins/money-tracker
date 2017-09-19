export const types = {
  fetchCategories: 'TRANSACTION_FORM_FETCH_CATEGORIES',
  fetchAccounts: 'TRANSACTION_FORM_FETCH_ACCOUNTS'
}

export const fetchCategories = () => {
  return { type: types.fetchCategories }
}

export const fetchAccounts = () => {
  return { type: types.fetchAccounts }
}
