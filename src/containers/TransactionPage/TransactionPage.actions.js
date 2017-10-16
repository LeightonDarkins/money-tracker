export const types = {
  fetchCategories: 'TRANSACTION_FORM_FETCH_CATEGORIES',
  fetchAccounts: 'TRANSACTION_FORM_FETCH_ACCOUNTS',
  fetchDefaultDate: 'TRANSACTION_FORM_FETCH_DEFAULT_DATE'
}

export const fetchCategories = () => {
  return { type: types.fetchCategories }
}

export const fetchAccounts = () => {
  return { type: types.fetchAccounts }
}

export const fetchDefaultDate = () => {
  return { type: types.fetchDefaultDate }
}
