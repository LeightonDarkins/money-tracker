import React from 'react'
import PropTypes from 'prop-types'

const AccountForm = ({name, balance, onNameChange, onBalanceChange, onSubmitClick}) => {
  return (
    <div>
      <h1>Create Account</h1>

      <label>Name</label>
      <input value={name} onChange={onNameChange} />

      <label>Balance</label>
      <input value={balance} onChange={onBalanceChange} />

      <button onClick={() => onSubmitClick({ name, balance })}>
        Add Account
      </button>
    </div>
  )
}

AccountForm.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onBalanceChange: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}

export default AccountForm
