import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AccountList from '../containers/AccountList/AccountList.reducer'
import AccountForm from '../containers/AccountForm/AccountForm.reducer'
import CategoryForm from '../containers/CategoryForm/CategoryForm.reducer'
import CategoryList from '../containers/CategoryList/CategoryList.reducer'
import TransactionForm from '../containers/TransactionForm/TransactionForm.reducer'

const Reducers = combineReducers({
  AccountList,
  AccountForm,
  CategoryForm,
  CategoryList,
  TransactionForm,
  router: routerReducer
})

export default Reducers
