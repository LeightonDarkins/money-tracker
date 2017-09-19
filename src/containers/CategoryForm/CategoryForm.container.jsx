import { connect } from 'react-redux'
import { nameChanged, categoryFormSubmitted } from './CategoryForm.actions'
import CategoryForm from '../../components/CategoryForm/CategoryForm.component.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.CategoryForm.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (accountDetails) => {
      dispatch(categoryFormSubmitted(accountDetails))
    },
    onNameChange: (event) => {
      dispatch(nameChanged(event.target.value))
    }
  }
}

const ConnectedCategoryForm = connect(mapStateToProps, mapDispatchToProps)(CategoryForm)

export default ConnectedCategoryForm
