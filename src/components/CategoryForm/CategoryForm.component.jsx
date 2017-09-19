import React from 'react'
import PropTypes from 'prop-types'

const AccountForm = ({name, onNameChange, onSubmitClick}) => {
  return (
    <div>
      <input value={name} onChange={onNameChange} />
      <button onClick={() => onSubmitClick({ name })}>
        Add Category
      </button>
    </div>
  )
}

AccountForm.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}

export default AccountForm
