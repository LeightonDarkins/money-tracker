import { put, call, takeLatest } from 'redux-saga/effects'
import CategoryApi from '../../apis/Category.api'
import { types } from './CategoryForm.actions'
import { apiError } from '../../common/common.actions'

function * createCategory (action) {
  try {
    yield call(CategoryApi.createCategory, action.categoryDetails)
  } catch (error) {
    yield put(apiError(error))
  }
}

function * createCategorySaga () {
  yield takeLatest(types.categoryFormSubmitted, createCategory)
}

export default createCategorySaga
