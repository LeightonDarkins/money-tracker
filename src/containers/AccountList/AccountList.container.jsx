import { connect } from 'react-redux'
import AccountList from '../../components/AccountList/AccountList.component.jsx'
import { accountClicked } from './AccountList.actions'

const mapStateToProps = state => {
  return {
    accounts: state.AccountList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAccountClick: (id) => {
      dispatch(accountClicked(id))
    },
    onAddTransactionClick: () => {
      console.log('transaction!')
    },
    onAddCategoryClick: () => {
      console.log('category!')
    },
    onAddAccountClick: () => {
      console.log('account!')
    }
  }
}

const ConnectedAccountList = connect(
  mapStateToProps,
  mapDispatchToProps)(AccountList)

export default ConnectedAccountList
