import { connect } from 'react-redux'
import {
  amountChanged,
  dateChanged,
  accountChanged,
  categoryChanged,
  formSubmitted,
  formCancelled
} from './TransactionForm.actions'
import TransactionForm from '../../components/TransactionForm/TransactionForm.component.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.TransactionForm.amount,
    date: state.TransactionForm.date,
    category: state.TransactionForm.category,
    categories: state.TransactionForm.categories,
    account: state.TransactionForm.account,
    accounts: state.TransactionForm.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (accountDetails) => {
      dispatch(formSubmitted(accountDetails))
    },
    onCancelClick: () => {
      dispatch(formCancelled())
    },
    onAmountChange: (event) => {
      dispatch(amountChanged(event.target.value))
    },
    onDateChange: (event) => {
      dispatch(dateChanged(event.target.value))
    },
    onAccountChange: (event) => {
      dispatch(accountChanged(event.target.value))
    },
    onCategoryChange: (event) => {
      dispatch(categoryChanged(event.target.value))
    }
  }
}

const ConnectedTransactionForm = connect(mapStateToProps, mapDispatchToProps)(TransactionForm)

export default ConnectedTransactionForm
