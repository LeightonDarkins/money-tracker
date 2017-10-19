import { types } from './TransactionForm.actions'
import moment from 'moment'

const initialState = { amount: 0, date: moment(), category: '', account: '', accounts: [], categories: [], transactionType: 'expense' }

const hasContents = (array) => array.length > 0

const categoryForm = (state = initialState, action) => {
  switch (action.type) {
    case types.amountChanged:
      return Object.assign({}, state, {
        amount: action.amount
      })

    case types.dateChanged:
      return Object.assign({}, state, {
        date: action.date
      })

    case types.categoryChanged:
      return Object.assign({}, state, {
        category: action.category
      })

    case types.accountChanged:
      return Object.assign({}, state, {
        account: action.account
      })

    case types.typeChanged:
      return Object.assign({}, state, {
        transactionType: action.transactionType
      })

    case types.transactionFormFetchAccountsSucceeded:
      if (hasContents(action.accounts)) {
        return Object.assign({}, state, {
          account: action.accounts[0].id,
          accounts: action.accounts
        })
      }

      return Object.assign({}, state, {
        accounts: action.accounts
      })

    case types.transactionFormFetchCategoriesSucceeded:
      if (hasContents(action.categories)) {
        return Object.assign({}, state, {
          category: action.categories[0].id,
          categories: action.categories
        })
      }

      return Object.assign({}, state, {
        categories: action.categories
      })

    case types.clearTransactionForm:
      return Object.assign({}, state, initialState)

    case types.returnDefaultDate:
      return Object.assign({}, state, {
        date: action.date
      })

    default:
      return state
  }
}

export default categoryForm
