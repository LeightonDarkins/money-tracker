import React from 'react'

import styles from './LabelledTextField.css'

class LabelledTextField extends React.Component {
  constructor(props) {
    super(props)
  }

  textFieldClass() {
    return 'input-group ' + this.props.sharedStyle
  }

  validationClass() {
    if (this.props.validationError) {
      return styles.validation_show
    }

    return styles.validation_hide
  }

  render() {
    return (
      <div>
        <div className={ this.textFieldClass() }>
          <span className='input-group-addon' id='basic-addon1'>{ this.props.label }</span>
          <input
            type='text'
            className='form-control'
            placeholder={ this.props.placeholder }
            aria-describedby='basic-addon1'
            onChange={ this.props.onChange }
            value={ this.props.default }>
          </input>
        </div>
        <div className={ this.validationClass() }>{ this.props.validationMessage }</div>
      </div>
    )
  }
}

export default LabelledTextField
