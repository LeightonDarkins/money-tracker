import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorComponent from '../Error/Error.component.jsx'

import './ErrorHandler.scss'

class ErrorHandler extends Component {
  render () {
    return (<div id='ErrorHandler'>
      { this.props.errors.map(errorItem => {
        return <ErrorComponent
          key={errorItem.response.headers.date}
          title='Error'
          message={errorItem.response.statusText}
          onClick={() => this.props.onErrorClick(errorItem.response.headers.date)}
        />
      }) }
    </div>)
  }
}

ErrorHandler.propTypes = {
  errors: PropTypes.array.isRequired
}

export default ErrorHandler
