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
import App from './containers/App/App.container.jsx'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  MoneyTracker,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(AccountFormSaga)
sagaMiddleware.run(AccountListSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
