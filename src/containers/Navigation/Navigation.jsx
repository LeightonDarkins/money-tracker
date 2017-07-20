import React from 'react'

import styles from './Navigation.css'

import Button from '../../components/Button/Button.jsx'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='starter-template navigation-flexbox navbar-fixed-bottom money-tracker-section'>
        <Button text='Account' sharedStyle='navigation-button form-padding' enabled={ false }/>
        <Button text='+' sharedStyle='navigation-button form-padding' enabled={ false }/>
        <Button text='-' sharedStyle='navigation-button form-padding' enabled={ false }/>
        <Button text='Expense' sharedStyle='navigation-button form-padding' enabled={ true }/>
      </div>
    )
  }
}

export default Navigation
