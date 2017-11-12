import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Transaction from '../Transaction/Transaction.component.jsx'
import moment from 'moment'

import './TransactionList.scss'

class TransactionList extends Component {
  constructor (props) {
    super(props)

    this.routeMatch = this.props.match
  }

  componentDidMount () {
    this.props.fetchCategories()

    if (this.routeMatch && this.routeMatch.params) {
      this.props.fetchTransactions(this.routeMatch.params.accountId)
    }
  }

  displayList () {
    let list = []
    let date

    this.props.transactions.forEach(transaction => {
      if (!date) {
        date = transaction.date
        list.push({ type: 'date-divider', date: moment(date).format('DD/MM/YYYY') })
      } else if (moment(date).format('DD/MM/YYYY') !== moment(transaction.date).format('DD/MM/YYYY')) {
        date = transaction.date
        list.push({ type: 'date-divider', date: moment(date).format('DD/MM/YYYY') })
      }

      list.push(transaction)
    })

    return list
  }

  transactionList () {
    return this.displayList().map(item => {
      if (item.type === 'date-divider') {
        return <li
          className={item.type}
          key={item.date}>
          {item.date}
        </li>
      } else {
        this.props.categories.forEach(category => {
          if (item.category === category.id) {
            item.category = category.name
          }
        })

        return <Transaction
          key={item.id}
          amount={item.amount}
          date={item.date}
          category={item.category}
          onClick={() => this.props.onTransactionClick(item.id)} />
      }
    })
  }

  bodyContent () {
    if (this.props.isLoading) {
      return (<div className='spinner-container'>
        <i className='fa fa-circle-o-notch fa-spin fa-2x spinner' aria-hidden='true' />
      </div>)
    }

    if (this.props.transactions.length === 0) return <div className='placeholder'>No Transactions For Account</div>

    return <ul className='scroll-view'>{ this.transactionList() }</ul>
  }

  render () {
    return (
      <div id='TransactionList'>
        <section className='mt-header'>
          <h2>Transactions</h2>
        </section>
        <section className='mt-body'>
          { this.bodyContent() }
        </section>
        <section className='mt-footer'>
          footer
        </section>
      </div>
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
  isLoading: PropTypes.bool,
  fetchTransactions: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
}

export default TransactionList
