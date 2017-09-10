import { put, call, takeLatest } from 'redux-saga/effects'
import AccountsApi from '../../apis/Accounts.api'
import { fetchAccountsSucceeded } from './AccountList.actions'
import { apiError } from '../../common/common.actions'

function * fetchAccounts (action) {
  try {
    const accounts = yield call(AccountsApi.fetchAccounts)
    yield put(fetchAccountsSucceeded(accounts))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * accountListSaga () {
  yield takeLatest('FETCH_ACCOUNTS', fetchAccounts)
}

export default accountListSaga
