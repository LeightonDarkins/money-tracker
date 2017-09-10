import { connect } from 'react-redux'
import { nameChanged, balanceChanged, accountFormSubmitted } from './AccountForm.actions'
import AccountForm from '../../components/AccountForm/AccountForm.component.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.AccountForm.name,
    balance: state.AccountForm.balance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (accountDetails) => {
      dispatch(accountFormSubmitted(accountDetails))
    },
    onNameChange: (event) => {
      dispatch(nameChanged(event.target.value))
    },
    onBalanceChange: (event) => {
      dispatch(balanceChanged(event.target.value))
    }
  }
}

const ConnectedAccountForm = connect(mapStateToProps, mapDispatchToProps)(AccountForm)

export default ConnectedAccountForm
