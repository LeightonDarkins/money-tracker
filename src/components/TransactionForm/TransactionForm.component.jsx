import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import './TransactionForm.scss'

class TransactionForm extends Component {
  constructor (props) {
    super(props)

    this.categoryOptions = this.categoryOptions.bind(this)
    this.accountOptions = this.accountOptions.bind(this)
    this.localSubmitClick = this.localSubmitClick.bind(this)
    this.localAmountChange = this.localAmountChange.bind(this)
  }

  componentDidMount () {
    this.props.fetchCategories()
    this.props.fetchAccounts()
  }

  categoryOptions () {
    if (this.props.categories.length > 0) {
      return this.props.categories.map(category => (
        <option className='mt-category-option' key={category.id} value={category.id}>{ category.name }</option>
      ))
    } else {
      return (<option className='mt-category-option' disabled>No Categories Available</option>)
    }
  }

  accountOptions () {
    if (this.props.accounts.length > 0) {
      return this.props.accounts.map(account => (
        <option className='mt-account-option'key={account.id} value={account.id}>{ account.name }</option>
      ))
    } else {
      return (<option className='mt-account-option' disabled>No Accounts Available</option>)
    }
  }

  onInputFocus (e) {
    e.target.select()
  }

  localAmountChange (e) {
    const numberToSend = Number((e.target.value * 100).toFixed(0))

    return isNaN(numberToSend) ? null : this.props.onAmountChange(numberToSend)
  }

  localSubmitClick () {
    const transactionDetails = {
      amount: this.props.amount,
      date: this.props.date,
      category: this.props.category,
      account: this.props.account,
      transactionType: this.props.transactionType
    }

    this.props.onSubmitClick(transactionDetails)
  }

  render () {
    return (
      <div id='TransactionForm'>
        <section className='mt-header'>
          <h2>Create Transaction</h2>
        </section>

        <section className='mt-body'>
          <div className='mt-transaction-type'>
            <input type='radio' name='type' id='expense-type' value='expense'
              checked={this.props.transactionType === 'expense'}
              onChange={this.props.onTypeChange} />
            <label htmlFor='expense-type'>Expense</label>

            <input type='radio' name='type' id='income-type' value='income'
              checked={this.props.transactionType === 'income'}
              onChange={this.props.onTypeChange} />
            <label htmlFor='income-type'>Income</label>
          </div>

          <div>
            <label>Amount</label>
            <div className='mt-number-input-container'>
              <input type='number'
                value={this.props.amount / 100}
                onChange={this.localAmountChange}
                onFocus={this.onInputFocus} />
            </div>
          </div>

          <div>
            <label>Date</label>
            <DatePicker
              className='mt-datepicker'
              selected={this.props.date}
              onChange={this.props.onDateChange}
              dateFormat='DD/MM/YYYY' />
          </div>

          <div>
            <label>Category</label>
            <div className='select-container'>
              <select
                className='mt-category-select'
                value={this.props.category}
                onChange={this.props.onCategoryChange}>
                { this.categoryOptions() }
              </select>
            </div>
          </div>

          <div>
            <label>Account</label>
            <div className='select-container'>
              <select
                className='mt-account-select'
                value={this.props.account}
                onChange={this.props.onAccountChange}>
                { this.accountOptions() }
              </select>
            </div>
          </div>
        </section>

        <section className='mt-footer transaction-form-actions'>
          <button className='cancel' onClick={this.props.onCancelClick}>
            Cancel
          </button>
          <button
            className='confirm'
            onClick={this.localSubmitClick}>
            Done
          </button>
        </section>
      </div>
    )
  }
}

TransactionForm.propTypes = {
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
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
