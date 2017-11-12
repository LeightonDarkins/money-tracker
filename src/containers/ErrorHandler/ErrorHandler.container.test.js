/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { createStore, combineReducers } from 'redux'

import ErrorHandlerContainer from './ErrorHandler.container'
import ErrorHandlerReducer from './ErrorHandler.reducer'

import { apiError } from './ErrorHandler.actions'
import MoneyTrackerError from '../../common/ErrorHandling/MoneyTrackerError'

const Reducers = combineReducers({ ErrorHandler: ErrorHandlerReducer })

describe('ErrorHandler', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = createStore(Reducers)

    wrapper = mount(<Provider store={store}>
      <ErrorHandlerContainer />
    </Provider>)
  })

  afterEach(() => {
    store = {}
    wrapper = {}
  })

  it('renders the default state correctly', () => {
    const errorComponents = wrapper.find('ErrorComponent')

    expect(errorComponents).toHaveLength(0)
  })

  it('handles apiError correctly', () => {
    let errors = [
      new MoneyTrackerError(),
      new MoneyTrackerError()
    ]

    errors[1].id = 'test'

    store.dispatch(apiError(errors[0]))

    let errorComponents = wrapper.find('ErrorComponent')

    expect(errorComponents).toHaveLength(1)

    store.dispatch(apiError(errors[1]))

    errorComponents = wrapper.find('ErrorComponent')

    expect(errorComponents).toHaveLength(2)
  })
})
