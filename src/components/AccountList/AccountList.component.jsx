import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Account from '../Account/Account.component.jsx'
import currency from '../../common/currency'
import './AccountList.scss'

class AccountList extends Component {
  constructor (props) {
    super(props)

    this.accountListElement = this.accountListElement.bind(this)
    this.accountBalanceAsCurrency = this.accountBalanceAsCurrency.bind(this)
  }

  componentDidMount () {
    this.props.fetchAccounts()
  }

  accountListElement () {
    if (this.props.isLoading) {
      return (<div className='account-list-spinner-container'>
        <i className='fa fa-circle-o-notch fa-spin fa-2x account-list-spinner' aria-hidden='true' />
      </div>)
    }

    if (this.props.accounts.length === 0) {
      return (<ul className='account-list'>
        <li className='placeholder'>No Accounts Available</li>
      </ul>)
    }

    return (<ul className='account-list'>
      {
        this.props.accounts.map(account => {
          return (<Account
            key={account.id}
            balance={account.balance}
            openingBalance={account.openingBalance}
            name={account.name}
            onAccountClick={() => this.props.onAccountClick(account.id)} />)
        })
      }
    </ul>)
  }

  accountBalanceAsCurrency (accounts) {
    let balance = accounts.reduce((a, b) => a + b.balance, 0)

    return currency.numberAsCurrency(balance)
  }

  render () {
    return (
      <div id='AccountList'>
        <section id='al-header' className='mt-header'>
          <h2>Accounts</h2>
          <div className='accounts-balance'>
            Balance: { this.accountBalanceAsCurrency(this.props.accounts) }
          </div>
        </section>
        <section className='mt-body scroll-view'>
          {this.accountListElement()}
        </section>
        <section className='mt-footer'>
          <button id='mt-add-transaction' className='account-list-action'
            onClick={this.props.onAddTransactionClick} >Add Transaction</button>
        </section>
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
  onAccountClick: PropTypes.func.isRequired,
  onAddCategoryClick: PropTypes.func.isRequired,
  onAddTransactionClick: PropTypes.func.isRequired,
  onAddAccountClick: PropTypes.func.isRequired
}

export default AccountList
