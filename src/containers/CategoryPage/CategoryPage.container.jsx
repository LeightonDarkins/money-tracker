import React from 'react'
import { connect } from 'react-redux'
import CategoryList from '../CategoryList/CategoryList.container.jsx'
import CategoryForm from '../CategoryForm/CategoryForm.container.jsx'
import { fetchCategories } from './CategoryPage.actions'

class CategoryPage extends React.Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <div>
        <CategoryList />
        <CategoryForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.CategoryList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}

const ConnectedCategoryPage = connect(
  mapStateToProps,
  mapDispatchToProps)(CategoryPage)

export default ConnectedCategoryPage
