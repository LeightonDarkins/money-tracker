import { combineReducers } from 'redux'
import AccountList from '../containers/AccountList/AccountList.reducer'
import AccountForm from '../containers/AccountForm/AccountForm.reducer'
import CategoryForm from '../containers/CategoryForm/CategoryForm.reducer'
import CategoryList from '../containers/CategoryList/CategoryList.reducer'
import TransactionForm from '../containers/TransactionForm/TransactionForm.reducer'

const MoneyTracker = combineReducers({
  AccountList,
  AccountForm,
  CategoryForm,
  CategoryList,
  TransactionForm
})

export default MoneyTracker
