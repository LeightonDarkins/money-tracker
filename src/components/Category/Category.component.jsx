import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ name, onClick }) => {
  return (
    <li onClick={onClick}> { name } </li>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Category
