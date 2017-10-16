import { types } from './TransactionForm.actions'

const initialState = { amount: 0, date: '', category: '', account: '', accounts: [], categories: [], transactionType: 'expense' }

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
      return Object.assign({}, state, {
        account: action.accounts[0].id,
        accounts: action.accounts
      })

    case types.transactionFormFetchCategoriesSucceeded:
      return Object.assign({}, state, {
        category: action.categories[0].id,
        categories: action.categories
      })

    case types.clearTransactionForm:
      return Object.assign({}, state, initialState)

    default:
      return state
  }
}

export default categoryForm
