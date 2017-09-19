import React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import MoneyTracker from './reducers'
import AccountFormSaga from './containers/AccountForm/AccountForm.saga'
import AccountListSaga from './containers/AccountList/AccountList.saga'
import CategoryFormSaga from './containers/CategoryForm/CategoryForm.saga'
import CategoryListSaga from './containers/CategoryList/CategoryList.saga'
import TransactionFormSaga from './containers/TransactionForm/TransactionForm.saga'
import App from './containers/App/App.container.jsx'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  MoneyTracker,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(AccountFormSaga)
sagaMiddleware.run(AccountListSaga)
sagaMiddleware.run(CategoryFormSaga)
sagaMiddleware.run(CategoryListSaga)
sagaMiddleware.run(TransactionFormSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
