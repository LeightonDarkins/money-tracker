import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AccountList from './containers/AccountList/AccountList.reducer'
import TransactionList from './containers/TransactionList/TransactionList.reducer'
import TransactionForm from './containers/TransactionForm/TransactionForm.reducer'

const Reducers = combineReducers({
  AccountList,
  TransactionList,
  TransactionForm,
  router: routerReducer
})

export default Reducers
