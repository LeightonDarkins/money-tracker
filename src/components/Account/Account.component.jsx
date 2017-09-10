import React from 'react'
import PropTypes from 'prop-types'

const Account = ({ balance, name, onClick }) => {
  return (
    <li onClick={onClick}>
      { name } : { balance }
    </li>
  )
}

Account.propTypes = {
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Account
