import { connect } from 'react-redux'
import TransactionList from '../../components/TransactionList/TransactionList.component.jsx'
import { fetchTransactions, fetchCategories } from './TransactionList.actions'

const mapStateToProps = state => {
  return {
    transactions: state.TransactionList.transactions,
    categories: state.TransactionList.categories,
    isLoading: state.TransactionList.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTransactionClick: (id) => {
      console.log(`Transaction Clicked ${id}`)
    },
    fetchTransactions: (id) => {
      dispatch(fetchTransactions(id))
    },
    fetchCategories: (id) => {
      dispatch(fetchCategories())
    }
  }
}

const ConnectedTransactionList = connect(
  mapStateToProps,
  mapDispatchToProps)(TransactionList)

export default ConnectedTransactionList
