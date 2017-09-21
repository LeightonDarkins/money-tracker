import React from 'react'
import PropTypes from 'prop-types'
import Account from '../Account/Account.component.jsx'
import { Link } from 'react-router-dom'

const AccountList = ({ accounts, onAccountClick }) => (
  <div>
    <h2>Accounts</h2>
    <ul>
      {
        accounts.map(account => {
          const link = `/transactions/${account.id}`

          return (<Link to={link}>
            <Account
              key={account.id}
              balance={account.balance}
              name={account.name}
              onClick={() => onAccountClick(account.id)} />
          </Link>)
        })
      }
    </ul>

    <Link to='/categories'>About</Link>
  </div>
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
