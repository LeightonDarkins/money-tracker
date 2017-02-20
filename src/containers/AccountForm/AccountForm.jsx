import React from 'react'

import constants from '../../globals/constants.js'

import LabelledTextField from '../../components/LabelledTextField/LabelledTextField.jsx'
import CancelButton from '../../components/CancelButton/CancelButton.jsx'
import Button from '../../components/Button/Button.jsx'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accountName: constants.EMPTY_STRING,
      valid: false
    }

    this.onAccountNameChange = this.onAccountNameChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onAccountNameChange(event) {
    let value = event.target.value

    this.validate(value)
    this.setState({ accountName: value })
  }

  validate(value) {
    if (value.length >= constants.MINIMUM_ACCOUNT_NAME_LENGTH) {
      this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }

  render() {
    return (
      <div className='starter-template'>
        <h1>New Account</h1>
        <LabelledTextField
          label='Account Name'
          placeholder='Enter Account Name'
          default={ this.state.accountName }
          onChange={ this.onAccountNameChange } />
        <CancelButton />
        <Button text='Save' enabled={ this.state.valid } />
      </div>
    )
  }
}

export default AccountForm
