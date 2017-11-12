/* eslint-env jest */

import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import AccountListSaga, { fetchAccounts, accountClicked, addTransactionClicked } from './AccountList.saga'
import { types, fetchAccountsSucceeded, fetchAccountsStarted, fetchAccountsFailed } from './AccountList.actions'
import { apiError } from '../../common/common.actions'
import AccountApi from '../../apis/Account.api'
import { ErrorHandler } from '../../common/ErrorHandling/ErrorHandler'

describe('AccountListSaga', () => {
  let saga

  beforeEach(() => {
    saga = AccountListSaga()
  })

  it('registers a generator to handle AccountList events', () => {
    expect(saga.next().value).toEqual(takeLatest(types.fetchAccounts, fetchAccounts))
    expect(saga.next().value).toEqual(takeLatest(types.accountClicked, accountClicked))
    expect(saga.next().value).toEqual(takeLatest(types.addTransactionClicked, addTransactionClicked))
    expect(saga.next().value).toBeUndefined()
  })

  describe('fetchAccounts', () => {
    let generator

    beforeEach(() => {
      generator = fetchAccounts()
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(put(fetchAccountsStarted()))
      expect(generator.next().value).toEqual(call(AccountApi.fetchAccounts))
      expect(generator.next().value).toEqual(put(fetchAccountsSucceeded()))
      expect(generator.next().value).toBeUndefined()
    })

    it('completes all, error case, side effects', () => {
      expect(generator.next().value).toEqual(put(fetchAccountsStarted()))
      expect(generator.throw('error').value).toEqual(call(ErrorHandler, 'error'))
      expect(generator.next().value).toEqual(put(apiError()))
      expect(generator.next().value).toEqual(put(fetchAccountsFailed()))
      expect(generator.next().value).toBeUndefined()
    })
  })

  describe('accountClicked', () => {
    let generator
    let action = {
      id: 'test-id'
    }

    beforeEach(() => {
      generator = accountClicked(action)
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(put(push(`account/${action.id}`)))
      expect(generator.next().value).toBeUndefined()
    })
  })

  describe('addTransactionClicked', () => {
    let generator

    beforeEach(() => {
      generator = addTransactionClicked()
    })

    it('completes all, happy path, side effects', () => {
      expect(generator.next().value).toEqual(put(push(`add-transaction`)))
      expect(generator.next().value).toBeUndefined()
    })
  })
})
