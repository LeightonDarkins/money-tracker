import React from 'react'

import styles from '../../common/styles/Form.css'

import constants from '../../globals/constants.js'

import LabelledTextField from '../../components/LabelledTextField/LabelledTextField.jsx'
import CancelButton from '../../components/CancelButton/CancelButton.jsx'
import Button from '../../components/Button/Button.jsx'

class ExpenseForm extends React.Component {
  render() {
    return (
      <div className='money-tracker-section'>
        <h3>New Expense</h3>
        <div>
          <LabelledTextField
            sharedStyle='form-padding'
            label='Merchant Name'
            placeholder='ABC Business'
          />

          <LabelledTextField
            sharedStyle='form-padding'
            label='Amount'
            placeholder='0.00'
          />
          <CancelButton sharedStyle='form-padding' />
          <Button sharedStyle='form-padding' text='Add' enabled={ true } />
        </div>
      </div>
    )
  }
}

export default ExpenseForm
