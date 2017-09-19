export const types = {
  amountChanged: 'TRANSACTION_AMOUNT_CHANGED',
  dateChanged: 'TRANSACTION_DATE_CHANGED',
  accountChanged: 'TRANSACTION_ACCOUNT_CHANGED',
  categoryChanged: 'TRANSACTION_CATEGORY_CHANGED',
  formSubmitted: 'TRANSACTION_FORM_SUBMITTED',
  transactionFormFetchAccountsSucceeded: 'TRANSACTION_FORM_FETCH_ACCOUNTS_SUCCEEDED',
  transactionFormFetchCategoriesSucceeded: 'TRANSACTION_FORM_FETCH_CATEGORIES_SUCCEEDED'
}

export const amountChanged = (amount) => {
  return {
    type: types.amountChanged,
    amount
  }
}

export const dateChanged = (date) => {
  return {
    type: types.dateChanged,
    date
  }
}

export const accountChanged = (account) => {
  return {
    type: types.accountChanged,
    account
  }
}

export const categoryChanged = (category) => {
  return {
    type: types.categoryChanged,
    category
  }
}

export const formSubmitted = (transactionDetails) => {
  return {
    type: types.formSubmitted,
    transactionDetails
  }
}

export const transactionFormFetchAccountsSucceeded = (accounts) => {
  return { type: types.transactionFormFetchAccountsSucceeded, accounts }
}

export const transactionFormFetchCategoriesSucceeded = (categories) => {
  return { type: types.transactionFormFetchCategoriesSucceeded, categories }
}
