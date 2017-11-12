import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ErrorHandler from './containers/ErrorHandler/ErrorHandler.reducer'
import AccountList from './containers/AccountList/AccountList.reducer'
import TransactionList from './containers/TransactionList/TransactionList.reducer'
import TransactionForm from './containers/TransactionForm/TransactionForm.reducer'

const Reducers = combineReducers({
  ErrorHandler,
  AccountList,
  TransactionList,
  TransactionForm,
  router: routerReducer
})

export default Reducers
