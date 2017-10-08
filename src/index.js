import React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import Reducers from './reducers.js'
import saga from './saga.js'
import App from './containers/App/App.container.jsx'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, rMiddleware))
)

saga.runSagas(sagaMiddleware)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
