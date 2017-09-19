import React from 'react'

import AccountPage from '../../containers/AccountPage/Accountpage.container.jsx'
import CategoryPage from '../../containers/CategoryPage/CategoryPage.container.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Money Tracker</h1>
        <AccountPage />
        <CategoryPage />
      </div>
    )
  }
}

export default App
