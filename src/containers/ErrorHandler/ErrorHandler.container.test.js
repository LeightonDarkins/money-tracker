/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { createStore, combineReducers } from 'redux'

import ErrorHandlerContainer from './ErrorHandler.container'
import ErrorHandlerReducer from './ErrorHandler.reducer'

import { apiError } from './ErrorHandler.actions'

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
      {
        response: {
          headers: {
            date: 'date'
          },
          statusText: 'this is an error'
        }
      },
      {
        response: {
          headers: {
            date: 'date-1'
          },
          statusText: 'this is an error'
        }
      }]

    store.dispatch(apiError(errors[0]))

    let errorComponents = wrapper.find('ErrorComponent')

    expect(errorComponents).toHaveLength(1)

    store.dispatch(apiError(errors[1]))

    errorComponents = wrapper.find('ErrorComponent')

    expect(errorComponents).toHaveLength(2)
  })
})
