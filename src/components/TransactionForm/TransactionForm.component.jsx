import React from 'react'
import PropTypes from 'prop-types'

const TransactionForm = ({
  amount,
  onAmountChange,
  date,
  onDateChange,
  category,
  onCategoryChange,
  categories,
  account,
  onAccountChange,
  accounts,
  onSubmitClick
}) => {
  const firstAccount = () => {
    if (accounts.length <= 0) return 'nothing...'

    return accounts[0].id
  }

  const firstCategory = () => {
    if (categories.length <= 0) return 'nada...'

    return categories[0].id
  }

  return (
    <div>
      <h1>Create Transaction</h1>
      <div>
        <label>Amount</label>
        <input value={amount} onChange={onAmountChange} />
      </div>

      <div>
        <label>Date</label>
        <input value={date} onChange={onDateChange} />
      </div>

      <div>
        <label>Category</label>
        <input value={category} onChange={onCategoryChange} />
        <p>value: {firstCategory()}</p>
      </div>

      <div>
        <label>Account</label>
        <input value={account} onChange={onAccountChange} />
        <p>value: {firstAccount()}</p>
      </div>

      <button onClick={() => onSubmitClick({ amount, date, category, account })}>
        Add Transaction
      </button>
    </div>
  )
}

TransactionForm.propTypes = {
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  account: PropTypes.string.isRequired,
  onAccountChange: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}

export default TransactionForm
