import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorComponent from '../Error/Error.component.jsx'

import './ErrorHandler.scss'

class ErrorHandler extends Component {
  render () {
    return (<div id='ErrorHandler'>
      { this.props.errors.map(errorItem => {
        return <ErrorComponent
          key={errorItem.getId()}
          title={errorItem.getTitle()}
          message={errorItem.getMessage()}
          onClick={() => this.props.onErrorClick(errorItem.getId())}
        />
      }) }
    </div>)
  }
}

ErrorHandler.propTypes = {
  errors: PropTypes.array.isRequired
}

export default ErrorHandler
