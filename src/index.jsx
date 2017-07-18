import React from 'react'
import { render } from 'react-dom'

import styles from './common/styles/Global.css'

import AccountForm from './containers/AccountForm/AccountForm.jsx'
import AccountList from './containers/AccountList/AccountList.jsx'
import ExpenseForm from './containers/ExpenseForm/ExpenseForm.jsx'
import CurrencyForm from './containers/CurrencyForm/CurrencyForm.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AccountForm />
        <AccountList />
        <ExpenseForm />
        <CurrencyForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
