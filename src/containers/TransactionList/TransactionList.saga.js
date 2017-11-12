import { put, call, takeLatest } from 'redux-saga/effects'
import AccountApi from '../../apis/Account.api'
import CategoryApi from '../../apis/Category.api'
import { fetchTransactionsSucceeded,
  fetchTransactionsStarted,
  fetchTransactionsFailed,
  fetchCategoriesSucceeded,
  types } from './TransactionList.actions'
import { apiError } from '../../common/common.actions'

export function * fetchTransactions (action) {
  try {
    yield put(fetchTransactionsStarted())
    const transactions = yield call(AccountApi.fetchTransactionsForAccount, action.accountId)
    yield put(fetchTransactionsSucceeded(transactions))
  } catch (error) {
    yield put(apiError(error))
    yield put(fetchTransactionsFailed())
  }
}

export function * fetchCategories () {
  try {
    const categories = yield call(CategoryApi.fetchCategories)
    yield put(fetchCategoriesSucceeded(categories))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * accountListSaga () {
  yield takeLatest(types.fetchTransactions, fetchTransactions)
  yield takeLatest(types.fetchCategories, fetchCategories)
}

export default accountListSaga
