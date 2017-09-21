import React from 'react'
import PropTypes from 'prop-types'
import './TransactionForm.css'

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
  const categoryOptions = () => {
    return categories.map(category => (
      <option key={category.id} value={category.id}>{ category.name }</option>
    ))
  }

  const accountOptions = () => {
    return accounts.map(account => (
      <option key={account.id} value={account.id}>{ account.name }</option>
    ))
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
        <select onChange={onCategoryChange}>
          { categoryOptions() }
        </select>
      </div>

      <div>
        <label>Account</label>
        <select onChange={onAccountChange}>
          { accountOptions() }
        </select>
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
