import React from 'react'

const CancelButton = (props) => {
  let cancelClass = 'btn btn-danger ' + props.sharedStyle

  return (<button type='button' className={ cancelClass }>Cancel</button>)
}

export default CancelButton
