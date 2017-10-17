import React from 'react'
import PropTypes from 'prop-types'
import currency from '../../common/currency'

import './Account.scss'

const Account = ({ openingBalance, balance, name, onAccountClick }) => {
  return (
    <li className='account-list-item' onClick={onAccountClick}>
      <div className='account-container'>
        <span className='account-element account-name'>{ name }</span>
        <span className='account-element account-balance'>{ currency.numberAsCurrency(balance) }</span>
        <div className='account-element account-opening-balance'>Opening Balance: { currency.numberAsCurrency(openingBalance) }</div>
      </div>
    </li>
  )
}

Account.propTypes = {
  balance: PropTypes.number.isRequired,
  openingBalance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onAccountClick: PropTypes.func.isRequired
}

export default Account
