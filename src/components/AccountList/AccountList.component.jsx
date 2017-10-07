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
            balance={account.balance}
            name={account.name}
            onAccountClick={() => onAccountClick(account.id)} />)
        })
      }
    </ul>)
  }

  return (
    <div>
      <h2>Accounts</h2>
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
      balance: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onAccountClick: PropTypes.func.isRequired
}

export default AccountList
