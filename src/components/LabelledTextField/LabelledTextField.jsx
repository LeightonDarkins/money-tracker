import React from 'react'

const LabelledTextField = (props) => {
  return (
    <div className='input-group'>
      <span className='input-group-addon' id='basic-addon1'>{ props.label }</span>
      <input
        type='text'
        className='form-control'
        placeholder={ props.placeholder }
        aria-describedby='basic-addon1'
        onChange={ props.onChange }
        value={ props.default }>
      </input>
    </div>
  )
}

export default LabelledTextField
