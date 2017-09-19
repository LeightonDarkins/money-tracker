import React from 'react'
import PropTypes from 'prop-types'
import Transaction from '../Transaction/Transaction.component.jsx'

const AccountList = ({ transactions, onTransactionClick }) => (
  <ul>
    {
      transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          amount={transaction.amount}
          date={transaction.date}
          category={transaction.category}
          onClick={() => onTransactionClick(transaction.id)} />
      ))
    }
  </ul>
)

AccountList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  onTransactionClick: PropTypes.func.isRequired
}

export default AccountList
