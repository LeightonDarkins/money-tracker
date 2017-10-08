import React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import Reducers from './reducers'
import AccountFormSaga from './containers/AccountForm/AccountForm.saga'
import AccountListSaga from './containers/AccountList/AccountList.saga'
import CategoryFormSaga from './containers/CategoryForm/CategoryForm.saga'
import CategoryListSaga from './containers/CategoryList/CategoryList.saga'
import TransactionFormSaga from './containers/TransactionForm/TransactionForm.saga'
import App from './containers/App/App.container.jsx'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, rMiddleware))
)

sagaMiddleware.run(AccountFormSaga)
sagaMiddleware.run(AccountListSaga)
sagaMiddleware.run(CategoryFormSaga)
sagaMiddleware.run(CategoryListSaga)
sagaMiddleware.run(TransactionFormSaga)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
