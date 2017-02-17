import React from 'react'
import { render } from 'react-dom'

import AccountForm from './components/AccountForm/AccountForm.jsx'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <AccountForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
