import React from 'react'

import styles from '../../common/styles/Form.css'

import requestor from '../../common/utilities/requestor.js'

import LabelledTextField from '../../components/LabelledTextField/LabelledTextField.jsx'
import Button from '../../components/Button/Button.jsx'

class CurrencyForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rateUSDtoAUD: 0,
      rateAUDtoUSD: 0
    }

    this.onExchangeClick = this.onExchangeClick.bind(this);
  }

  onExchangeClick() {
    requestor.get('currency').then((data) => {
      let USDtoAUD = data.USDAUD

      this.setState({ rateUSDtoAUD: USDtoAUD })

      this.calculateAUDtoUSD(USDtoAUD)
    })
  }

  calculateAUDtoUSD(rateUSD) {
    let AUDtoUSD = 1 - (rateUSD % 1)

    this.setState({ rateAUDtoUSD: AUDtoUSD })
  }

  render() {
    return (
      <div className='starter-template money-tracker-section'>
        <h3>Exchange Rates</h3>

        <Button
          sharedStyle='form-padding'
          text='Get Rates'
          enabled = { true }
          onClick={ this.onExchangeClick } />

        <LabelledTextField
          sharedStyle='form-padding'
          label='USD to AUD'
          default={ this.state.rateUSDtoAUD } />

        <LabelledTextField
          sharedStyle='form-padding'
          label='AUD to USD'
          default={ this.state.rateAUDtoUSD } />
      </div>
    )
  }
}

export default CurrencyForm
