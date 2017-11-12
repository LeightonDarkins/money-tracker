export const types = {
  apiError: 'API_ERROR',
  closeError: 'CLOSE_ERROR'
}

export const apiError = error => ({ type: types.apiError, error })

export const closeError = error => ({ type: types.closeError, error })
