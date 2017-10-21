/* global describe, it, expect, beforeEach */

import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import TransactionForm from './TransactionForm.container'
import TransactionFormReducer from './TransactionForm.reducer'
import TransactionFormSaga from './TransactionForm.saga'
import {
  amountChanged,
  dateChanged,
  transactionFormFetchAccountsSucceeded,
  accountChanged,
  transactionFormFetchCategoriesSucceeded,
  categoryChanged,
  clearTransactionForm,
  typeChanged,
  formSubmitted
} from './TransactionForm.actions'

import Page from './TransactionForm.page'
import Mocks from './TransactionForm.mocks'

const sagaMiddleware = createSagaMiddleware()

const Reducers = combineReducers({ TransactionForm: TransactionFormReducer })

const store = createStore(Reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(TransactionFormSaga)

describe('TransactionForm Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <TransactionForm />
    </Provider>)
  })

  it('handles amountChanged correctly', () => {
    const amountInput = Page.getAmountInputElement(wrapper)

    expect(amountInput.props().value).toEqual(0)

    store.dispatch(amountChanged(1))

    expect(amountInput.props().value).toEqual(0.01)
  })

  it('handles dateChanged correctly', () => {
    const datePicker = Page.getDatePickerElement(wrapper)

    expect(datePicker.props().value).toEqual(Mocks.formattedToday)

    store.dispatch(dateChanged(Mocks.date))

    expect(datePicker.props().value).toEqual(Mocks.date.format('DD/MM/YYYY'))
  })

  describe('transactionFormFetchAccountsSucceeded', () => {
    let accountSelector

    beforeEach(() => {
      accountSelector = Page.getAccountSelectorElement(wrapper)
    })

    describe('initialState', () => {
      let accountOptions

      beforeEach(() => {
        accountOptions = Page.getAccountOptions(accountSelector)
      })

      it('has one account option', () => {
        expect(accountOptions.length).toEqual(1)
      })

      it('the account option is disabled', () => {
        expect(accountOptions.first().props().disabled).toBeTruthy()
      })

      it('the account option is a placeholder', () => {
        expect(accountOptions.first().props().children).toEqual('No Accounts Available')
      })

      it('the account selector has an empty selected value', () => {
        expect(accountSelector.props().value).toEqual('')
      })
    })

    describe('with accounts', () => {
      let accountOptions

      beforeEach(() => {
        store.dispatch(transactionFormFetchAccountsSucceeded(Mocks.accounts))

        accountOptions = Page.getAccountOptions(accountSelector)
      })

      it('has two account options', () => {
        expect(accountOptions.length).toEqual(2)
      })

      it('the account options are not disabled', () => {
        expect(accountOptions.get(0).disabled).toBeFalsy()
        expect(accountOptions.get(1).disabled).toBeFalsy()
      })

      it('the account options have real account names', () => {
        expect(accountOptions.get(0).value).toEqual(Mocks.accounts[0].id)
        expect(accountOptions.get(0).text).toEqual(Mocks.accounts[0].name)
        expect(accountOptions.get(1).value).toEqual(Mocks.accounts[1].id)
        expect(accountOptions.get(1).text).toEqual(Mocks.accounts[1].name)
      })

      it('the account selector has the first account selected by default', () => {
        expect(accountSelector.props().value).toEqual(Mocks.accounts[0].id)
      })
    })
  })

  it('handles accountChanged', () => {
    const accountSelector = wrapper.find('.mt-account-select')

    store.dispatch(transactionFormFetchAccountsSucceeded(Mocks.accounts))

    expect(accountSelector.props().value).toEqual(Mocks.accounts[0].id)

    store.dispatch(accountChanged(Mocks.accounts[1].id))

    expect(accountSelector.props().value).toEqual(Mocks.accounts[1].id)
  })

  describe('transactionFormFetchCategoriesSucceeded', () => {
    let categorySelector

    const findCategoryOptions = (select) => {
      return select.find('.mt-category-option')
    }

    beforeEach(() => {
      categorySelector = Page.getCategorySelectorElement(wrapper)
    })

    describe('initialState', () => {
      let categoryOptions

      beforeEach(() => {
        categoryOptions = findCategoryOptions(categorySelector)
      })

      it('has one category option', () => {
        expect(categoryOptions.length).toEqual(1)
      })

      it('the category option is disabled', () => {
        expect(categoryOptions.first().props().disabled).toBeTruthy()
      })

      it('the category option is a placeholder', () => {
        expect(categoryOptions.first().props().children).toEqual('No Categories Available')
      })

      it('the category selector has an empty selected value', () => {
        expect(categorySelector.props().value).toEqual('')
      })
    })

    describe('with categories', () => {
      let categoryOptions

      beforeEach(() => {
        store.dispatch(transactionFormFetchCategoriesSucceeded(Mocks.categories))

        categoryOptions = findCategoryOptions(categorySelector)
      })

      it('has two account options', () => {
        expect(categoryOptions.length).toEqual(2)
      })

      it('the account options are not disabled', () => {
        expect(categoryOptions.get(0).disabled).toBeFalsy()
        expect(categoryOptions.get(1).disabled).toBeFalsy()
      })

      it('the account options have real account names', () => {
        expect(categoryOptions.get(0).value).toEqual(Mocks.categories[0].id)
        expect(categoryOptions.get(0).text).toEqual(Mocks.categories[0].name)
        expect(categoryOptions.get(1).value).toEqual(Mocks.categories[1].id)
        expect(categoryOptions.get(1).text).toEqual(Mocks.categories[1].name)
      })

      it('the account selector has the first account selected by default', () => {
        expect(categorySelector.props().value).toEqual(Mocks.categories[0].id)
      })
    })
  })

  it('handles categoryChanged', () => {
    const categorySelector = Page.getCategorySelectorElement(wrapper)

    store.dispatch(transactionFormFetchCategoriesSucceeded(Mocks.categories))

    expect(categorySelector.props().value).toEqual(Mocks.categories[0].id)

    store.dispatch(categoryChanged(Mocks.categories[1].id))

    expect(categorySelector.props().value).toEqual(Mocks.categories[1].id)
  })

  it('handles clearTransactionForm', () => {
    store.dispatch(transactionFormFetchCategoriesSucceeded(Mocks.categories))
    store.dispatch(transactionFormFetchAccountsSucceeded(Mocks.accounts))

    store.dispatch(amountChanged(100))
    store.dispatch(dateChanged(Mocks.date))
    store.dispatch(accountChanged(Mocks.accounts[1].id))
    store.dispatch(categoryChanged(Mocks.categories[1].id))

    let amountInput = Page.getAmountInputElement(wrapper)
    let datePicker = Page.getDatePickerElement(wrapper)
    let accountSelector = Page.getAccountSelectorElement(wrapper)
    let categorySelector = Page.getCategorySelectorElement(wrapper)

    expect(amountInput.props().value).toEqual(1.00)
    expect(datePicker.props().value).toEqual(Mocks.date.format('DD/MM/YYYY'))
    expect(accountSelector.props().value).toEqual(Mocks.accounts[1].id)
    expect(categorySelector.props().value).toEqual(Mocks.categories[1].id)

    store.dispatch(clearTransactionForm())

    expect(amountInput.props().value).toEqual(0)
    expect(datePicker.props().value).toEqual(Mocks.formattedToday)
    expect(accountSelector.props().value).toEqual('')
    expect(categorySelector.props().value).toEqual('')
  })

  it('handles typeChanged', () => {
    let typeSelector = Page.getTypeSelectorElement(wrapper)

    expect(typeSelector.props().value).toEqual('expense')

    store.dispatch(typeChanged('income'))

    expect(typeSelector.props().value).toEqual('income')
  })
})
