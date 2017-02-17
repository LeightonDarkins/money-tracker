import React from 'react'
import styles from './AccountForm.css'

import LabelledTextField from '../LabelledTextField/LabelledTextField.jsx'
import LabelledNumberField from '../LabelledNumberField/LabelledNumberField.jsx'
import CancelButton from '../CancelButton/CancelButton.jsx'
import Button from '../Button/Button.jsx'

class AccountForm extends React.Component {
  render() {
    let DEFAULT_DOLLAR_VALUE = 0.00

    return (
      <div>
        <LabelledTextField label='Account Name' placeholder='Enter Account Name' />
        <LabelledNumberField label='Starting Balance' default={ DEFAULT_DOLLAR_VALUE } />
        <CancelButton />
        <Button text='Save' />
      </div>
    )
  }
}

export default AccountForm
