import { types } from './AccountList.actions'

const initialState = { accounts: [], isLoading: false }

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case types.fetchAccountsSucceeded:
      return Object.assign({}, state, {
        accounts: action.accounts,
        isLoading: false
      })
    case types.fetchAccountsStarted:
      return Object.assign({}, state, {
        isLoading: true
      })
    default:
      return state
  }
}

export default accounts
