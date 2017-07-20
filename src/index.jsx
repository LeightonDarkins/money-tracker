import React from 'react'
import { render } from 'react-dom'

import styles from './common/styles/Global.css'

import Navigation from './containers/Navigation/Navigation.jsx'
import AccountForm from './containers/AccountForm/AccountForm.jsx'
import AccountList from './containers/AccountList/AccountList.jsx'
import ExpenseForm from './containers/ExpenseForm/ExpenseForm.jsx'
import CurrencyForm from './containers/CurrencyForm/CurrencyForm.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='money-tracker-content'>
          <AccountList />
          <CurrencyForm />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
