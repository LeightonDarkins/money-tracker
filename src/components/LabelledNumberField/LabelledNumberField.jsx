import React from 'react'

const LabelledNumberField = (props) => {
  return (
    <div>
      <label>{ props.label }</label>
      <input type='number' min='0.00' step='0.01'></input>
    </div>
  )
}

export default LabelledNumberField
