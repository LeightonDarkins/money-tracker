import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Transaction from '../Transaction/Transaction.component.jsx'

class TransactionList extends Component {
  constructor (props) {
    super(props)

    this.routeMatch = this.props.match
  }

  componentDidMount () {
    if (this.routeMatch && this.routeMatch.params) {
      this.props.fetchTransactions(this.routeMatch.params.accountId)
    }
  }

  render () {
    if (this.props.isLoading) {
      return (<div className='transaction-list-spinner-container'>
        <i className='fa fa-circle-o-notch fa-spin fa-2x transaction-list-spinner' aria-hidden='true' />
      </div>)
    }

    if (this.props.transactions.length === 0) return <ul><li>No Transactions For Account</li></ul>

    return (
      <ul id='TransactionList'>
        {
          this.props.transactions.map(transaction => (
            <Transaction
              key={transaction.id}
              amount={transaction.amount}
              date={transaction.date}
              category={transaction.category}
              onClick={() => this.props.onTransactionClick(transaction.id)} />
          ))
        }
      </ul>
    )
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  onTransactionClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default TransactionList
