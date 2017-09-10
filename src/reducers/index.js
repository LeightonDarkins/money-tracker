import { combineReducers } from 'redux'
import AccountList from '../containers/AccountList/AccountList.reducer'
import AccountForm from '../containers/AccountForm/AccountForm.reducer'

const MoneyTracker = combineReducers({
  AccountList,
  AccountForm
})

export default MoneyTracker
