import React from 'react'
import PropTypes from 'prop-types'

import './Account.scss'

const Account = ({ openingBalance, balance, name, onAccountClick }) => {
  const numberAsCurrency = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    return isNaN(number) ? formatter.format(0) : formatter.format(number)
  }

  return (
    <li className='account-list-item' onClick={onAccountClick}>
      <div className='account-container'>
        <span className='account-element account-name'>{ name }</span>
        <span className='account-element account-balance'>{ numberAsCurrency(balance) }</span>
        <div className='account-element account-opening-balance'>Opening Balance: { numberAsCurrency(openingBalance) }</div>
      </div>
    </li>
  )
}

Account.propTypes = {
  balance: PropTypes.number,
  openingBalance: PropTypes.number,
  name: PropTypes.string.isRequired,
  onAccountClick: PropTypes.func.isRequired
}

export default Account
