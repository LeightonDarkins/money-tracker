import { put, call, takeLatest } from 'redux-saga/effects'
import AccountApi from '../../apis/Account.api'
import { types as accountFormActionTypes } from './AccountForm.actions'
import { fetchAccounts } from '../AccountList/AccountList.actions'
import { apiError } from '../../common/common.actions'

function * createAccount (action) {
  try {
    yield call(AccountApi.createAccount, action.accountDetails)
    yield put(fetchAccounts())
  } catch (error) {
    yield put(apiError(error))
  }
}

function * createAccountSaga () {
  yield takeLatest(accountFormActionTypes.accountFormSubmitted, createAccount)
}

export default createAccountSaga
