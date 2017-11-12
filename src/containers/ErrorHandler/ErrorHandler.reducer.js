import { types } from './ErrorHandler.actions'

const initialState = { errors: [] }

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case types.apiError:
      if (state.errors.length > 0) {
        return Object.assign({}, state, { errors: [...state.errors, action.error] })
      }

      return Object.assign({}, state, { errors: [action.error] })
    case types.closeError:
      let filteredErrors = state.errors.filter(err => err.id !== action.error)

      return Object.assign({}, state, { errors: filteredErrors })

    default:
      return state
  }
}

export default accounts
