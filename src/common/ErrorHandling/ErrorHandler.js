import MoneyTrackerError from './MoneyTrackerError'

export const ErrorHandler = (error) => {
  if (error.response) {
    const response = error.response

    let message = response.data ? response.data.message : 'An unknown error occured.'

    return new MoneyTrackerError(
      response.status,
      response.statusText,
      message)
  } else {
    return new MoneyTrackerError()
  }
}
