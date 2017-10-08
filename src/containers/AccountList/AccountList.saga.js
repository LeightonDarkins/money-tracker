import { put, call, takeLatest } from 'redux-saga/effects'
import AccountApi from '../../apis/Account.api'
import { fetchAccountsSucceeded, types } from './AccountList.actions'
import { apiError } from '../../common/common.actions'
import { push } from 'react-router-redux'

function * fetchAccounts (action) {
  try {
    const accounts = yield call(AccountApi.fetchAccounts)
    yield put(fetchAccountsSucceeded(accounts))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * accountClicked (action) {
  yield put(push(`account/${action.id}`))
}

function * addTransactionClicked (action) {
  yield put(push('add-transaction'))
}

function * accountListSaga () {
  yield takeLatest('FETCH_ACCOUNTS', fetchAccounts)
  yield takeLatest(types.accountClicked, accountClicked)
  yield takeLatest(types.addTransactionClicked, addTransactionClicked)
}

export default accountListSaga
