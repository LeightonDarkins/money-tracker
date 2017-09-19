export const types = {
  clicked: 'CATEGORY_CLICKED',
  fetchSucceeded: 'FETCH_CATEGORIES_SUCCEEDED',
  fetchFailed: 'FETCH_CATEGORIES_FAILED'
}

export const categoryClicked = (id) => {
  return { type: types.clicked, id }
}

export const fetchCategoriesSucceeded = (categories) => {
  return { type: types.fetchSucceeded, categories }
}
