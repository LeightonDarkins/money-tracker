import { put, call, takeLatest } from 'redux-saga/effects'
import AccountApi from '../../apis/Account.api'
import { fetchTransactionsSucceeded, fetchTransactionsStarted, fetchTransactionsFailed, types } from './TransactionList.actions'
import { apiError } from '../../common/common.actions'

export function * fetchTransactions (action) {
  try {
    yield put(fetchTransactionsStarted())
    const transactions = yield call(AccountApi.fetchTransactionsForAccount, action.accountId)

    console.log(transactions)

    yield put(fetchTransactionsSucceeded(transactions))
  } catch (error) {
    yield put(apiError(error))
    yield put(fetchTransactionsFailed())
  }
}

function * accountListSaga () {
  yield takeLatest(types.fetchTransactions, fetchTransactions)
}

export default accountListSaga
