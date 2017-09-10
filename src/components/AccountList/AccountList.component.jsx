import React from 'react'
import PropTypes from 'prop-types'
import Account from '../Account/Account.component.jsx'

const AccountList = ({ accounts, onAccountClick }) => (
  <ul>
    {
      accounts.map(account => (
        <Account
          key={account.id}
          balance={account.balance}
          name={account.name}
          onClick={() => onAccountClick(account.id)} />
      ))
    }
  </ul>
)

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
