import React from 'react'
import PropTypes from 'prop-types'
import Category from '../Category/Category.component.jsx'

const CategoryList = ({ categories, onCategoryClick }) => (
  <ul>
    {
      categories.map(category => (
        <Category
          key={category.id}
          name={category.name}
          onClick={() => onCategoryClick(category.id)} />
      ))
    }
  </ul>
)

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired
}

export default CategoryList
