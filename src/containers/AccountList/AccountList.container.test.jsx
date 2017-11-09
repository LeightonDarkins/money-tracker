/* eslint-env jest */

import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { createStore, combineReducers } from 'redux'

import AccountListContainer from './AccountList.container'
import AccountListReducer from './AccountList.reducer'

import {
  fetchAccountsStarted,
  fetchAccountsSucceeded,
  fetchAccountsFailed
 } from './AccountList.actions'

import Page from './AccountList.page'
import Mocks from './AccountList.mocks'

const Reducers = combineReducers({ AccountList: AccountListReducer })

describe('AccountListContainer', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = createStore(Reducers)

    wrapper = mount(<Provider store={store}>
      <AccountListContainer />
    </Provider>)
  })

  afterEach(() => {
    store = {}
    wrapper = {}
  })

  it('renders the default state correctly', () => {
    let noAccountsPlaceholder = Page.getPlaceholder(wrapper)
    let accountListItems = Page.getAccountListItems(wrapper)
    let spinner = Page.getSpinner(wrapper)

    expect(noAccountsPlaceholder).toHaveLength(1)
    expect(accountListItems).toHaveLength(1)
    expect(spinner).toHaveLength(0)
  })

  it('handles fetchAccountsStarted correctly', () => {
    store.dispatch(fetchAccountsStarted())

    let noAccountsPlaceholder = Page.getPlaceholder(wrapper)
    let accountListItems = Page.getAccountListItems(wrapper)
    let spinner = Page.getSpinner(wrapper)

    expect(noAccountsPlaceholder).toHaveLength(0)
    expect(accountListItems).toHaveLength(0)
    expect(spinner).toHaveLength(1)
  })

  it('handles fetchAccountsSucceeded correctly', () => {
    store.dispatch(fetchAccountsSucceeded(Mocks.accounts))

    let noAccountsPlaceholder = Page.getPlaceholder(wrapper)
    let accountListItems = Page.getAccountListItems(wrapper)
    let spinner = Page.getSpinner(wrapper)

    expect(noAccountsPlaceholder).toHaveLength(0)
    expect(accountListItems).toHaveLength(2)
    expect(spinner).toHaveLength(0)
  })

  it('handles fetchAccountsFailed correctly', () => {
    store.dispatch(fetchAccountsSucceeded(Mocks.accounts))
    store.dispatch(fetchAccountsStarted())
    store.dispatch(fetchAccountsFailed())

    let noAccountsPlaceholder = Page.getPlaceholder(wrapper)
    let accountListItems = Page.getAccountListItems(wrapper)
    let spinner = Page.getSpinner(wrapper)

    expect(noAccountsPlaceholder).toHaveLength(0)
    expect(accountListItems).toHaveLength(2)
    expect(spinner).toHaveLength(0)
  })
})
