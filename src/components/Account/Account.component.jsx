import React from 'react'
import PropTypes from 'prop-types'

import './Account.scss'

const Account = ({ balance, name, onAccountClick }) => {
  const balanceAsCurrency = () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    return formatter.format(balance)
  }

  return (
    <li className='account-list-item' onClick={onAccountClick}>
      <div className='account-container'>
        <span className='account-element account-name'>{ name }</span>
        <span className='account-element account-balance'>{ balanceAsCurrency() }</span>
      </div>
    </li>
  )
}

Account.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onAccountClick: PropTypes.func.isRequired
}

export default Account
