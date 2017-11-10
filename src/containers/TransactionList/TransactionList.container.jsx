import { connect } from 'react-redux'
import TransactionList from '../../components/TransactionList/TransactionList.component.jsx'
import { fetchTransactions } from './TransactionList.actions'

const mapStateToProps = state => {
  return {
    transactions: state.TransactionList.transactions,
    isLoading: state.TransactionList.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTransactionClick: (id) => {
      console.log(`Transaction Clicked ${id}`)
    },
    fetchTransactions: (id) => {
      console.log(`Fetching Transactions ${id}`)
      dispatch(fetchTransactions(id))
    }
  }
}

const ConnectedTransactionList = connect(
  mapStateToProps,
  mapDispatchToProps)(TransactionList)

export default ConnectedTransactionList
