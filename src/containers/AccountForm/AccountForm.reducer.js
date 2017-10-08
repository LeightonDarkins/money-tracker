import { types } from './AccountForm.actions'

const initialState = { name: '', balance: 0 }

const accountForm = (state = initialState, action) => {
  switch (action.type) {
    case types.nameChanged:
      return Object.assign({}, state, {
        name: action.name
      })

    case types.balanceChanged:
      return Object.assign({}, state, {
        balance: +action.balance
      })

    default:
      return state
  }
}

export default accountForm
