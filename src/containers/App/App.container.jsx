import React from 'react'
import { Route } from 'react-router'
import './App.scss'

import AccountList from '../../containers/AccountList/AccountList.container.jsx'
import CategoryPage from '../../containers/CategoryPage/CategoryPage.container.jsx'
import TransactionForm from '../../containers/TransactionForm/TransactionForm.container.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={AccountList} />
        <Route path='/categories' component={CategoryPage} />
        <Route path='/add-transaction' component={TransactionForm} />
      </div>
    )
  }
}

export default App
