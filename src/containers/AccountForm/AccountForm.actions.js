export const types = {
  nameChanged: 'NAME_CHANGED',
  balanceChanged: 'BALANCE_CHANGED',
  accountFormSubmitted: 'ACCOUNT_FORM_SUBMITTED'
}

export const nameChanged = (name) => {
  return {
    type: types.nameChanged,
    name
  }
}

export const balanceChanged = (balance) => {
  return {
    type: types.balanceChanged,
    balance
  }
}

export const accountFormSubmitted = (accountDetails) => {
  return {
    type: types.accountFormSubmitted,
    accountDetails
  }
}
