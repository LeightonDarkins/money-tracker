import { types } from './CategoryList.actions'

const categories = (state = [], action) => {
  switch (action.type) {
    case types.fetchSucceeded:
      return action.categories
    default:
      return state
  }
}

export default categories
