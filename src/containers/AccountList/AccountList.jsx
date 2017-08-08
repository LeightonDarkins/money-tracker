import React from 'react'
import _ from 'lodash'

import styles from '../../common/styles/Form.css'

import requestor from '../../common/utilities/requestor.js'

import TestData from '../../globals/TestData.js'
import AccountListItem from '../../components/AccountListItem/AccountListItem.jsx'

class AccountList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accounts: []
    }
  }

  componentWillMount() {
    requestor.get('accounts').then((data) =>{
      let accounts = data

      this.setState({ accounts: accounts })
    })
  }

  accountsBalance() {
    const result = _.reduce(this.state.accounts, (sum, account) => {
      return sum + account.balance
    }, 0)

    return result;
  }

  render() {
    const accounts = this.state.accounts.map((account) => {
      return (
        <AccountListItem
          key={ account.id }
          name={ account.name }
          balance={ account.balance }/>
      )
    })

    if (this.state.accounts.length === 0) {
      return (
        <div>
          <h3>Accounts</h3>
          <p>No Accounts Found</p>
        </div>
      )
    } else {
      return (
        <div className='money-tracker-section'>
          <h3>Accounts</h3>
          <p>Balance: ${ this.accountsBalance() }</p>
          <ul className='list-group'>
            { accounts }
          </ul>
        </div>
      )
    }
  }
}

export default AccountList
