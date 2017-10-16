import React from 'react'
import PropTypes from 'prop-types'
import './TransactionForm.scss'

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
  onSubmitClick,
  onCancelClick,
  transactionType,
  onTypeChange
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

  const onInputFocus = (e) => {
    e.target.select()
  }

  const localAmountChange = (e) => {
    const numberToSend = Number((e.target.value * 100).toFixed(0))

    return isNaN(numberToSend) ? null : onAmountChange(numberToSend)
  }

  return (
    <div className='transaction-form'>
      <h1>Create Transaction</h1>
      <div>
        <div>
          <label>Type</label>
          <select value={transactionType} onChange={onTypeChange}>
            <option value='expense'>Expense</option>
            <option value='income'>Income</option>
          </select>
        </div>
        <label>Amount</label>
        <div className='mt-number-input-container'>
          <input type='number'
            value={amount / 100}
            onChange={localAmountChange}
            onFocus={onInputFocus} />
        </div>
      </div>

      <div>
        <label>Date</label>
        <input value={date} onChange={onDateChange} />
      </div>

      <div>
        <label>Category</label>
        <select value={category} onChange={onCategoryChange}>
          { categoryOptions() }
        </select>
      </div>

      <div>
        <label>Account</label>
        <select value={account} onChange={onAccountChange}>
          { accountOptions() }
        </select>
      </div>

      <div className='transaction-form-actions'>
        <button className='cancel' onClick={() => onCancelClick()}>
          Cancel
        </button>
        <button className='confirm' onClick={() => onSubmitClick({ amount, date, category, account, transactionType })}>
          Done
        </button>
      </div>
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
  onSubmitClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  transactionType: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired
}

export default TransactionForm
