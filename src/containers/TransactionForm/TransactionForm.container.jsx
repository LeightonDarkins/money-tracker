import { connect } from 'react-redux'
import {
  amountChanged,
  dateChanged,
  accountChanged,
  categoryChanged,
  formSubmitted,
  formCancelled,
  typeChanged
} from './TransactionForm.actions'
import TransactionForm from '../../components/TransactionForm/TransactionForm.component.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.TransactionForm.amount,
    date: state.TransactionForm.date,
    category: state.TransactionForm.category,
    categories: state.TransactionForm.categories,
    account: state.TransactionForm.account,
    accounts: state.TransactionForm.accounts,
    transactionType: state.TransactionForm.transactionType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (transactionDetails) => {
      dispatch(formSubmitted(transactionDetails))
    },
    onCancelClick: () => {
      dispatch(formCancelled())
    },
    onAmountChange: (amount) => {
      dispatch(amountChanged(amount))
    },
    onDateChange: (date) => {
      dispatch(dateChanged(date))
    },
    onAccountChange: (event) => {
      dispatch(accountChanged(event.target.value))
    },
    onCategoryChange: (event) => {
      dispatch(categoryChanged(event.target.value))
    },
    onTypeChange: (event) => {
      dispatch(typeChanged(event.target.value))
    }
  }
}

const ConnectedTransactionForm = connect(mapStateToProps, mapDispatchToProps)(TransactionForm)

export default ConnectedTransactionForm
