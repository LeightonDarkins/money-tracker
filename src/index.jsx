import React from 'react'
import { render } from 'react-dom'

import AccountForm from './containers/AccountForm/AccountForm.jsx'
import AccountList from './containers/AccountList/AccountList.jsx'
import ExpenseForm from './containers/ExpenseForm/ExpenseForm.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AccountForm />
        <AccountList />
        <ExpenseForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
