import React from 'react'
import { Route } from 'react-router'
import './App.scss'

import ErrorHandler from '../../containers/ErrorHandler/ErrorHandler.container.jsx'
import AccountList from '../../containers/AccountList/AccountList.container.jsx'
import TransactionForm from '../../containers/TransactionForm/TransactionForm.container.jsx'
import TransactionList from '../../containers/TransactionList/TransactionList.container.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <ErrorHandler />
        <Route exact path='/' component={AccountList} />
        <Route path='/add-transaction' component={TransactionForm} />
        <Route path='/account/:accountId' component={TransactionList} />
      </div>
    )
  }
}

export default App
