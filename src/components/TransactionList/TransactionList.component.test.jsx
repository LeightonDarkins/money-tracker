/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import TransactionList from './TransactionList.component'

describe('TransactionListComponent', () => {
  const transactions = [
    {
      id: 'transaction-1',
      amount: 1000,
      date: '2017-11-08T20:42:35.805Z',
      category: 'category-1'
    }
  ]

  describe('Snapshots', () => {
    it('renders correctly with no transactions', () => {
      const transactionList = renderer.create(<TransactionList
        transactions={[]}
        onTransactionClick={(y) => y}
        />)

      expect(transactionList).toMatchSnapshot()
    })

    it('renders correctly while loading', () => {
      const transactionList = renderer.create(<TransactionList
        transactions={[]}
        onTransactionClick={(y) => y}
        isLoading
        />)

      expect(transactionList).toMatchSnapshot()
    })

    it('renders correctly with transactions', () => {
      const transactionList = renderer.create(<TransactionList
        transactions={transactions}
        onTransactionClick={(y) => y}
        />)

      expect(transactionList).toMatchSnapshot()
    })
  })

  describe('Behaviour', () => {
    let mockAddTransactionClick

    beforeEach(() => {
      mockAddTransactionClick = jest.fn()
    })

    afterEach(() => {
      mockAddTransactionClick.mockReset()
    })

    it('calls onTransactionClick when a transaction is clicked', () => {
      const wrapper = shallow(<TransactionList
        transactions={transactions}
        onTransactionClick={mockAddTransactionClick}
        isLoading={false} />)

      let transactionItems = wrapper.find('#TransactionList Transaction')

      expect(transactionItems).toHaveLength(1)

      transactionItems.simulate('click')

      expect(mockAddTransactionClick).toBeCalled()
    })
  })
})
