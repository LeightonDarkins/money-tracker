export const types = {
  amountChanged: 'TRANSACTION_AMOUNT_CHANGED',
  dateChanged: 'TRANSACTION_DATE_CHANGED',
  accountChanged: 'TRANSACTION_ACCOUNT_CHANGED',
  categoryChanged: 'TRANSACTION_CATEGORY_CHANGED',
  formSubmitted: 'TRANSACTION_FORM_SUBMITTED',
  formCancelled: 'TRANSACTION_FORM_CANCELLED',
  typeChanged: 'TRANSACTION_TYPE_CHANGED',
  transactionFormFetchAccountsSucceeded: 'TRANSACTION_FORM_FETCH_ACCOUNTS_SUCCEEDED',
  transactionFormFetchCategoriesSucceeded: 'TRANSACTION_FORM_FETCH_CATEGORIES_SUCCEEDED',
  clearTransactionForm: 'CLEAR_TRANSACTION_FORM',
  returnDefaultDate: 'RETURN_DEFAULT_DATE'
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

export const formCancelled = () => {
  return { type: types.formCancelled }
}

export const typeChanged = (transactionType) => {
  return {
    type: types.typeChanged,
    transactionType
  }
}

export const returnDefaultDate = (date) => {
  return {
    type: types.returnDefaultDate,
    date
  }
}

export const transactionFormFetchAccountsSucceeded = (accounts) => {
  return { type: types.transactionFormFetchAccountsSucceeded, accounts }
}

export const transactionFormFetchCategoriesSucceeded = (categories) => {
  return { type: types.transactionFormFetchCategoriesSucceeded, categories }
}

export const clearTransactionForm = () => {
  return { type: types.clearTransactionForm }
}
