import React from 'react'
import PropTypes from 'prop-types'
import currency from '../../common/currency'
import moment from 'moment'

import './Transaction.scss'

const Transaction = ({ category, amount, date, onClick }) => {
  return (
    <li className='Transaction' onClick={onClick}>
      <span className='category'>{ category }</span>
      <span className='date'>{ moment(date).format('DD/MM/YYYY') }</span>
      <span className='amount'>{ currency.numberAsCurrency(amount) }</span>
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
