import React from 'react'

import TestData from '../../globals/TestData.js'
import AccountListItem from '../../components/AccountListItem/AccountListItem.jsx'

class AccountList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accounts: TestData.ACCOUNT_LIST
    }
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
          <h1>Accounts</h1>
          <p>No Accounts Found</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Accounts</h1>
          <ul className='list-group'>
            { accounts }
          </ul>
        </div>
      )
    }
  }
}

export default AccountList
