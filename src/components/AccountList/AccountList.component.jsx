import React from 'react'
import PropTypes from 'prop-types'
import Account from '../Account/Account.component.jsx'
import './AccountList.scss'

const AccountList = ({ accounts, onAccountClick, onAddCategoryClick, onAddAccountClick, onAddTransactionClick }) => {
  const accountListElement = () => {
    if (accounts.length === 0) {
      return (<div className='account-list-spinner-container'>
        <i className='fa fa-circle-o-notch fa-spin fa-2x account-list-spinner' aria-hidden='true' />
      </div>)
    }

    return (<ul className='account-list'>
      {
        accounts.map(account => {
          return (<Account
            key={account.id}
            balance={0}
            openingBalance={account.openingBalance}
            name={account.name}
            onAccountClick={() => onAccountClick(account.id)} />)
        })
      }
    </ul>)
  }

  const accountBalance = () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    const balance = accounts.reduce((a, b) => a + b.balance, 0)

    return isNaN(balance) ? formatter.format(0) : formatter.format(balance)
  }

  return (
    <div>
      <h2>Accounts</h2>
      <div className='accounts-balance'>
        Balance: { accountBalance() }
      </div>
      {accountListElement()}
      <button className='account-list-action'
        onClick={() => onAddCategoryClick()} >Add Category</button>
      <button className='account-list-action'
        onClick={() => onAddAccountClick()} >Add Account</button>
      <button className='account-list-action'
        onClick={() => onAddTransactionClick()} >Add Transaction</button>
    </div>
  )
}

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      openingBalance: PropTypes.number,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onAccountClick: PropTypes.func.isRequired
}

export default AccountList
