import { types } from './AccountList.actions'

const accounts = (state = [], action) => {
  switch (action.type) {
    case types.fetchAccountsSucceeded:
      return action.accounts
    default:
      return state
  }
}

export default accounts
