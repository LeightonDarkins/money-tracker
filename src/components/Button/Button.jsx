import React from 'react'

const Button = (props) => {
  if (props.enabled) {
    return (<button type='button' className='btn btn-success'>{ props.text }</button>)
  }

  return (<button type='button' className='btn btn-success' disabled>{ props.text }</button>)
}

export default Button
