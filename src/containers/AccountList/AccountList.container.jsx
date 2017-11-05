import { connect } from 'react-redux'
import AccountList from '../../components/AccountList/AccountList.component.jsx'
import { accountClicked, addTransactionClicked, fetchAccounts } from './AccountList.actions'

const mapStateToProps = state => {
  return {
    accounts: state.AccountList.accounts,
    isLoading: state.AccountList.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAccountClick: (id) => {
      dispatch(accountClicked(id))
    },
    onAddTransactionClick: () => {
      dispatch(addTransactionClicked())
    },
    onAddCategoryClick: () => {
      console.log('category!')
    },
    onAddAccountClick: () => {
      console.log('account!')
    },
    fetchAccounts: () => {
      dispatch(fetchAccounts())
    }
  }
}

const ConnectedAccountList = connect(
  mapStateToProps,
  mapDispatchToProps)(AccountList)

export default ConnectedAccountList
