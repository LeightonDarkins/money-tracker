import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ category, amount, date, onClick }) => {
  return (
    <li onClick={onClick}>
      { category } : { amount } : { date }
    </li>
  )
}

Transaction.propTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Transaction
