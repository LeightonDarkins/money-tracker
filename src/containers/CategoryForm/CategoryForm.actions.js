export const types = {
  nameChanged: 'CATEGORY_NAME_CHANGED',
  categoryFormSubmitted: 'CATEGORY_FORM_SUBMITTED'
}

export const nameChanged = (name) => {
  return {
    type: types.nameChanged,
    name
  }
}

export const categoryFormSubmitted = (categoryDetails) => {
  return {
    type: types.categoryFormSubmitted,
    categoryDetails
  }
}
