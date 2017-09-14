import { put, call, takeLatest } from 'redux-saga/effects'
import AccountApi from '../../apis/Account.api'
import { fetchAccountsSucceeded } from './AccountList.actions'
import { apiError } from '../../common/common.actions'

function * fetchAccounts (action) {
  try {
    const accounts = yield call(AccountApi.fetchAccounts)
    yield put(fetchAccountsSucceeded(accounts))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * accountListSaga () {
  yield takeLatest('FETCH_ACCOUNTS', fetchAccounts)
}

export default accountListSaga
