export const types = {
  apiError: 'API_ERROR'
}

export const apiError = (error) => {
  return { type: types.apiError, error }
}
