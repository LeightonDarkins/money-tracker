import React from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../TransactionForm/TransactionForm.container.jsx'
import { fetchCategories, fetchAccounts, fetchDefaultDate } from './TransactionPage.actions'

class TransactionPage extends React.Component {
  componentDidMount () {
    this.props.fetchCategories()
    this.props.fetchAccounts()
    this.props.setDefaultDate()
  }

  render () {
    return (
      <div>
        <TransactionForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    fetchAccounts: () => {
      dispatch(fetchAccounts())
    },
    setDefaultDate: () => {
      dispatch(fetchDefaultDate())
    }
  }
}

const ConnectedTransactionPage = connect(
  mapStateToProps,
  mapDispatchToProps)(TransactionPage)

export default ConnectedTransactionPage
