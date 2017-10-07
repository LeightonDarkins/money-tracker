import React from 'react'
import { connect } from 'react-redux'
import AccountList from '../AccountList/AccountList.container.jsx'
import { fetchAccounts } from './AccountPage.actions'

class AccountPage extends React.Component {
  componentDidMount () {
    this.props.fetchAccounts()
  }

  render () {
    return (
      <div>
        <AccountList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.AccountList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccounts: () => {
      dispatch(fetchAccounts())
    }
  }
}

const ConnectedAccountPage = connect(
  mapStateToProps,
  mapDispatchToProps)(AccountPage)

export default ConnectedAccountPage
