import React from 'react'

import constants from '../../globals/constants.js'

import styles from '../../common/styles/Form.css'
import LabelledTextField from '../../components/LabelledTextField/LabelledTextField.jsx'
import CancelButton from '../../components/CancelButton/CancelButton.jsx'
import Button from '../../components/Button/Button.jsx'

class ExpenseForm extends React.Component {
  render() {
    return (
      <div>
        <h1>New Expense</h1>
        <div>
          <LabelledTextField
            sharedStyle={ styles.formPadding }
            label='Merchant Name'
            placeholder='ABC Business'
          />

          <LabelledTextField
            sharedStyle={ styles.formPadding }
            label='Amount'
            placeholder='0.00'
          />
          <CancelButton sharedStyle={ styles.formPadding } />
          <Button sharedStyle={ styles.formPadding } text='Add' enabled={ true } />
        </div>
      </div>
    )
  }
}

export default ExpenseForm
