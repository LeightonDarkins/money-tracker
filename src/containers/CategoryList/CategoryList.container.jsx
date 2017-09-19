import { connect } from 'react-redux'
import CategoryList from '../../components/CategoryList/CategoryList.component.jsx'
import { categoryClicked } from './CategoryList.actions'

const mapStateToProps = state => {
  return {
    categories: state.CategoryList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCategoryClick: (id) => {
      console.log('i was clicked!', id)
      dispatch(categoryClicked(id))
    }
  }
}

const ConnectedCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps)(CategoryList)

export default ConnectedCategoryList
