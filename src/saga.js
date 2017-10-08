import AccountFormSaga from './containers/AccountForm/AccountForm.saga'
import AccountListSaga from './containers/AccountList/AccountList.saga'
import CategoryFormSaga from './containers/CategoryForm/CategoryForm.saga'
import CategoryListSaga from './containers/CategoryList/CategoryList.saga'
import TransactionFormSaga from './containers/TransactionForm/TransactionForm.saga'

export default {
  runSagas: (sagaMiddleware) => {
    sagaMiddleware.run(AccountFormSaga)
    sagaMiddleware.run(AccountListSaga)
    sagaMiddleware.run(CategoryFormSaga)
    sagaMiddleware.run(CategoryListSaga)
    sagaMiddleware.run(TransactionFormSaga)
  }
}
