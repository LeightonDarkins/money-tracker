import { put, call, takeLatest } from 'redux-saga/effects'
import CategoryApi from '../../apis/Category.api'
import { fetchCategoriesSucceeded } from './CategoryList.actions'
import { apiError } from '../../common/common.actions'

function * fetchCategories (action) {
  try {
    const categories = yield call(CategoryApi.fetchCategories)
    yield put(fetchCategoriesSucceeded(categories))
  } catch (error) {
    yield put(apiError(error))
  }
}

function * categoryListSaga () {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

export default categoryListSaga
