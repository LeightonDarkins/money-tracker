import React from 'react'

import AccountPage from '../../containers/AccountPage/AccountPage.container.jsx'
import CategoryPage from '../../containers/CategoryPage/CategoryPage.container.jsx'
import TransactionPage from '../../containers/TransactionPage/TransactionPage.container.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Money Tracker</h1>
        <AccountPage />
        <CategoryPage />
        <TransactionPage />
      </div>
    )
  }
}

export default App
