import { put, call, takeLatest } from 'redux-saga/effects'
import TransactionApi from '../../apis/Transaction.api'
import AccountApi from '../../apis/Account.api'
import CategoryApi from '../../apis/Category.api'
import {
  types as transactionFormActionTypes,
  transactionFormFetchAccountsSucceeded,
  transactionFormFetchCategoriesSucceeded
} from './TransactionForm.actions'

import { apiError } from '../../common/common.actions'

function * createTransaction (action) {
  try {
    yield call(TransactionApi.createTransaction, action.transactionDetails)
  } catch (error) {
    yield put(apiError(error))
  }
}

function * fetchCategories (action) {
  try {
    const categories = yield call(CategoryApi.fetchCategories)
    yield put(transactionFormFetchCategoriesSucceeded(categories))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * fetchAccounts (action) {
  try {
    const accounts = yield call(AccountApi.fetchAccounts)
    yield put(transactionFormFetchAccountsSucceeded(accounts))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * createTransactionSaga () {
  yield takeLatest(transactionFormActionTypes.formSubmitted, createTransaction)
  yield takeLatest('TRANSACTION_FORM_FETCH_CATEGORIES', fetchCategories)
  yield takeLatest('TRANSACTION_FORM_FETCH_ACCOUNTS', fetchAccounts)
}

export default createTransactionSaga