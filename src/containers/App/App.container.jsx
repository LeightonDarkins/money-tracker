import React from 'react'
import { Route } from 'react-router'
import './App.css'

import AccountPage from '../../containers/AccountPage/AccountPage.container.jsx'
import CategoryPage from '../../containers/CategoryPage/CategoryPage.container.jsx'
import TransactionPage from '../../containers/TransactionPage/TransactionPage.container.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Money Tracker</h1>
        <Route exact path='/' component={AccountPage} />
        <Route path='/categories' component={CategoryPage} />
        <Route path='/transactions' component={TransactionPage} />
      </div>
    )
  }
}

export default App
