/* eslint-env jest */

import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import TransactionFormSaga, { createTransaction, cancel, fetchCategories, fetchAccounts } from './TransactionForm.saga'
import { types,
  clearTransactionForm,
  transactionFormFetchAccountsSucceeded,
  transactionFormFetchCategoriesSucceeded } from './TransactionForm.actions'
import { apiError } from '../../common/common.actions'
import TransactionApi from '../../apis/Transaction.api'
import AccountApi from '../../apis/Account.api'
import CategoryApi from '../../apis/Category.api'

describe('TransactionFormSaga', () => {
  let saga

  beforeEach(() => {
    saga = TransactionFormSaga()
  })

  it('registers a generator to handle TransactionForm events', () => {
    expect(saga.next().value).toEqual(takeLatest(types.formSubmitted, createTransaction))
    expect(saga.next().value).toEqual(takeLatest(types.formCancelled, cancel))
    expect(saga.next().value).toEqual(takeLatest(types.fetchCategories, fetchCategories))
    expect(saga.next().value).toEqual(takeLatest(types.fetchAccounts, fetchAccounts))
    expect(saga.next().value).toBeUndefined()
  })

  describe('createTransaction', () => {
    let generator
    let action = {
      transactionDetails: {
        id: 'test'
      }
    }

    beforeEach(() => {
      generator = createTransaction(action)
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(call(TransactionApi.createTransaction, { id: 'test' }))
      expect(generator.next().value).toEqual(put(clearTransactionForm()))
      expect(generator.next().value).toEqual(put(push('/')))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects', () => {
      expect(generator.next().value).toEqual(call(TransactionApi.createTransaction, { id: 'test' }))
      expect(generator.throw('error').value).toEqual(put(apiError('error')))
      expect(generator.next().value).toBeUndefined()
    })
  })

  describe('fetchCategories', () => {
    let generator

    beforeEach(() => {
      generator = fetchCategories()
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(call(CategoryApi.fetchCategories))
      expect(generator.next().value).toEqual(put(transactionFormFetchCategoriesSucceeded()))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects', () => {
      expect(generator.next().value).toEqual(call(CategoryApi.fetchCategories))
      expect(generator.throw('error').value).toEqual(put(apiError('error')))
      expect(generator.next().value).toBeUndefined()
    })
  })

  describe('fetchAccounts', () => {
    let generator

    beforeEach(() => {
      generator = fetchAccounts()
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(call(AccountApi.fetchAccounts))
      expect(generator.next().value).toEqual(put(transactionFormFetchAccountsSucceeded()))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects', () => {
      expect(generator.next().value).toEqual(call(AccountApi.fetchAccounts))
      expect(generator.throw('error').value).toEqual(put(apiError('error')))
      expect(generator.next().value).toBeUndefined()
    })
  })

  describe('cancel', () => {
    let generator

    beforeEach(() => {
      generator = cancel()
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(put(clearTransactionForm()))
      expect(generator.next().value).toEqual(put(push('/')))
      expect(generator.next().value).toBeUndefined()
    })
  })
})
