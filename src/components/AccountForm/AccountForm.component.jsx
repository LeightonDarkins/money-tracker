import React from 'react'
import PropTypes from 'prop-types'

const AccountForm = ({name, balance, onNameChange, onBalanceChange, onSubmitClick}) => {
  return (
    <div>
      <input value={name} onChange={onNameChange} />
      <input value={balance} onChange={onBalanceChange} />
      <button onClick={() => onSubmitClick({ name, balance })}>
        Add Account
      </button>
    </div>
  )
}

AccountForm.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onBalanceChange: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}

export default AccountForm
