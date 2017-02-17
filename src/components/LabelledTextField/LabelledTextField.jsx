import React from 'react'

import TextField from '../TextField/TextField.jsx'

const LabelledTextField = (props) => {
  return (
    <div>
      <label>{ props.label }</label>
      <TextField placeholder={ props.placeholder } />
    </div>
  )
}

export default LabelledTextField
