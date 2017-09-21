const initialState = { name: '', balance: 0 }

const accountForm = (state = initialState, action) => {
  switch (action.type) {
    case 'NAME_CHANGED':
      return Object.assign({}, state, {
        name: action.name
      })

    case 'BALANCE_CHANGED':
      return Object.assign({}, state, {
        balance: +action.balance
      })

    default:
      return state
  }
}

export default accountForm
