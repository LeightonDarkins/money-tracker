import { connect } from 'react-redux'

import ErrorHandler from '../../components/ErrorHandler/ErrorHandler.component.jsx'
import { closeError } from './ErrorHandler.actions.js'

const mapStateToProps = state => {
  return {
    errors: state.ErrorHandler.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onErrorClick: (key) => {
      dispatch(closeError(key))
    }
  }
}

const ConnectedErrorHandler = connect(
  mapStateToProps,
  mapDispatchToProps)(ErrorHandler)

export default ConnectedErrorHandler
