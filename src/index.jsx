import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Money Tracker</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
