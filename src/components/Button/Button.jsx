import React from 'react'

const Button = (props) => {
  let successClass = 'btn btn-success ' + props.sharedStyle
  let disabledClass = 'btn btn-default ' + props.sharedStyle

  if (props.enabled) {
    return (<button type='button' className={ successClass }>{ props.text }</button>)
  }

  return (<button type='button' className={ disabledClass } disabled>{ props.text }</button>)
}

export default Button
