import React from 'react'
import PropTypes from 'prop-types'

import './Error.scss'

const ErrorComponent = (props) => {
  return (<div
    className='ErrorComponent'
    onClick={props.onClick}>
    <h3 className='heading'>{props.title}</h3>
    <p className='body'>{props.message}</p>
    <i className='fa fa-times close' aria-hidden='true' />
  </div>)
}

ErrorComponent.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

module.exports = ErrorComponent
