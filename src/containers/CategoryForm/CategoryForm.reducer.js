import { types } from './CategoryForm.actions'

const initialState = { name: '' }

const categoryForm = (state = initialState, action) => {
  switch (action.type) {
    case types.nameChanged:
      return Object.assign({}, state, {
        name: action.name
      })

    default:
      return state
  }
}

export default categoryForm
