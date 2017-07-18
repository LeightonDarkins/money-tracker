import React from 'react'

import styles from '../../common/styles/Form.css'

import constants from '../../globals/constants.js'

import LabelledTextField from '../../components/LabelledTextField/LabelledTextField.jsx'
import CancelButton from '../../components/CancelButton/CancelButton.jsx'
import Button from '../../components/Button/Button.jsx'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accountName: constants.EMPTY_STRING,
      startingBalance: constants.EMPTY_STRING,
      accountNameValid: true,
      startingBalanceValid: true
    }

    this.onAccountNameChange = this.onAccountNameChange.bind(this);
    this.onStartingBalanceChange = this.onStartingBalanceChange.bind(this);
    this.accountFormIsValid = this.accountFormIsValid.bind(this);
  }

  onAccountNameChange(event) {
    let value = event.target.value

    this.validateAccountName(value)
    this.setState({ accountName: value })
  }

  validateAccountName(value) {
    if (value.length >= constants.MINIMUM_ACCOUNT_NAME_LENGTH) {
      this.setState({ accountNameValid: true })
    } else {
      this.setState({ accountNameValid: false })
    }
  }

  onStartingBalanceChange(event) {
    let value = event.target.value

    this.validateStartingBalance(value)
    this.setState({ startingBalance: value })
  }

  validateStartingBalance(value) {
    if (isNaN(Number(value))) {
       this.setState({ startingBalanceValid: false })
    } else {
      this.setState({ startingBalanceValid: true })
    }
  }

  accountFormIsValid() {
    return this.state.accountNameValid && this.state.startingBalanceValid;
  }

  render() {
    return (
      <div className='starter-template'>
        <h1>New Account</h1>

        <LabelledTextField
          sharedStyle='form-padding'
          label='Account Name'
          placeholder='Enter Account Name'
          default={ this.state.accountName }
          onChange={ this.onAccountNameChange }
          validationError={ !this.state.accountNameValid }
          validationMessage='Account name must be longer than 3 characters' />
        <LabelledTextField
          sharedStyle='form-padding'
          label='Starting Balance'
          placeholder='0.00'
          default={ this.state.startingBalance }
          onChange={ this.onStartingBalanceChange }
          validationError={ !this.state.startingBalanceValid }
          validationMessage='Starting balance must be a number' />
        <CancelButton sharedStyle='form-padding' />
        <Button sharedStyle='form-padding' text='Save' enabled={ this.accountFormIsValid() } />
      </div>
    )
  }
}

export default AccountForm
