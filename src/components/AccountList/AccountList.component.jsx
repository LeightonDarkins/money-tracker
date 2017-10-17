import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Account from '../Account/Account.component.jsx'
import './AccountList.scss'

class AccountList extends Component {
  constructor (props) {
    super(props)

    this.accountListElement = this.accountListElement.bind(this)
    this.accountBalanceAsCurrency = this.accountBalanceAsCurrency.bind(this)
  }

  accountListElement () {
    if (this.props.accounts.length === 0) {
      return (<div className='account-list-spinner-container'>
        <i className='fa fa-circle-o-notch fa-spin fa-2x account-list-spinner' aria-hidden='true' />
      </div>)
    }

    return (<ul className='account-list'>
      {
        this.props.accounts.map(account => {
          return (<Account
            key={this.props.account.id}
            balance={this.props.account.balance}
            openingBalance={this.props.account.openingBalance}
            name={this.props.account.name}
            onAccountClick={() => this.props.onAccountClick(this.props.account.id)} />)
        })
      }
    </ul>)
  }

  accountBalanceAsCurrency (accounts) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    let balance = accounts.reduce((a, b) => a + b.balance, 0)
    balance /= 100

    return isNaN(balance) ? formatter.format(0) : formatter.format(balance)
  }

  render () {
    return (
      <div>
        <h2>Accounts</h2>
        <div className='accounts-balance'>
          Balance: { this.accountBalanceAsCurrency(this.props.accounts) }
        </div>
        {this.accountListElement()}
        <button className='account-list-action'
          onClick={() => this.props.onAddCategoryClick()} >Add Category</button>
        <button className='account-list-action'
          onClick={() => this.props.onAddAccountClick()} >Add Account</button>
        <button className='account-list-action'
          onClick={() => this.props.onAddTransactionClick()} >Add Transaction</button>
      </div>
    )
  }
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
