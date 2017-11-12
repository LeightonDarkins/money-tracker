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

let mockDate = {
  now: () => {
    return 'test-now'
  }
}

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
    let copyOfDate
    let action = {
      transactionDetails: {
        id: 'test'
      }
    }

    beforeEach(() => {
      copyOfDate = Date
      Date = mockDate // eslint-disable-line no-global-assign

      generator = createTransaction(action)
    })

    afterEach(() => {
      Date = copyOfDate // eslint-disable-line no-global-assign
      copyOfDate = undefined
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(call(TransactionApi.createTransaction, { id: 'test' }))
      expect(generator.next().value).toEqual(put(clearTransactionForm()))
      expect(generator.next().value).toEqual(put(push('/')))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects with no error responses', () => {
      let expectedError = {
        id: mockDate.now(),
        message: undefined,
        reason: undefined,
        status: 'NETWORK ERROR'
      }

      expect(generator.next().value).toEqual(call(TransactionApi.createTransaction, { id: 'test' }))
      expect(generator.throw('error').value).toEqual(put(apiError(expectedError)))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects with an error responses', () => {
      let error = {
        response: {
          status: 'test status',
          statusText: 'test status text',
          data: {
            message: 'test error'
          }
        }
      }

      let expectedError = {
        id: mockDate.now(),
        message: 'test error',
        reason: 'test status text',
        status: 'test status'
      }

      expect(generator.next().value).toEqual(call(TransactionApi.createTransaction, { id: 'test' }))
      expect(generator.throw(error).value).toEqual(put(apiError(expectedError)))
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
