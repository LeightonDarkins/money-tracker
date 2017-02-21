import React from 'react'
import { render } from 'react-dom'

import AccountForm from './containers/AccountForm/AccountForm.jsx'
import AccountList from './containers/AccountList/AccountList.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AccountForm />
        <AccountList />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
