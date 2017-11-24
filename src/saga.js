import AccountListSaga from './containers/AccountList/AccountList.saga'
import TransactionListSaga from './containers/TransactionList/TransactionList.saga'
import TransactionFormSaga from './containers/TransactionForm/TransactionForm.saga'

export default {
  runSagas: (sagaMiddleware) => {
    sagaMiddleware.run(AccountListSaga)
    sagaMiddleware.run(TransactionListSaga)
    sagaMiddleware.run(TransactionFormSaga)
  }
}
