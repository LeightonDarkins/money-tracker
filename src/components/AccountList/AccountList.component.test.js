/* global describe, it, expect, jest, beforeEach, afterEach */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import AccountList from './AccountList.component'
import th from '../../common/TestHelpers'

describe('AccountList', () => {
  describe('Snapshots', () => {
    it('should render with a spinner when loading', () => {
      const accountList = renderer.create(<AccountList
        accounts={[]}
        fetchAccounts={th.empty}
        onAccountClick={th.empty}
        onAddAccountClick={th.empty}
        onAddCategoryClick={th.empty}
        onAddTransactionClick={th.empty}
        isLoading />).toJSON()

      expect(accountList).toMatchSnapshot()
    })

    it('should render with a placeholder when no accounts are present', () => {
      const tree = renderer.create(<AccountList
        accounts={[]}
        fetchAccounts={th.empty}
        onAccountClick={th.empty}
        onAddAccountClick={th.empty}
        onAddCategoryClick={th.empty}
        onAddTransactionClick={th.empty} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('should render a list of accounts', () => {
      let testAccounts = [{
        id: 'testAccount1',
        name: 'testAccount1',
        balance: 500,
        openingBalance: 0
      }]

      const tree = renderer.create(
        <AccountList
          accounts={testAccounts}
          fetchAccounts={th.empty}
          onAccountClick={th.empty}
          onAddAccountClick={th.empty}
          onAddCategoryClick={th.empty}
          onAddTransactionClick={th.empty} />
      ).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('accountBalanceAsCurrency()', () => {
    const wrapper = shallow(<AccountList
      accounts={[]}
      onAccountClick={th.empty}
      onAddAccountClick={th.empty}
      onAddCategoryClick={th.empty}
      onAddTransactionClick={th.empty}
      />)
    const instance = wrapper.instance()

    it('returns $0.00 for empty array', () => {
      expect(instance.accountBalanceAsCurrency([])).toEqual('$0.00')
    })

    it('returns $10.00 for two accounts with balances of 500 cents', () => {
      let testAccounts = [{ balance: 500 }, { balance: 500 }]
      expect(instance.accountBalanceAsCurrency(testAccounts)).toEqual('$10.00')
    })

    it('returns $0.10 for two accounts with balances of 5 cents', () => {
      let testAccounts = [{ balance: 5 }, { balance: 5 }]
      expect(instance.accountBalanceAsCurrency(testAccounts)).toEqual('$0.10')
    })

    it('returns $1,000.00 for two accounts with balances of 50000', () => {
      let testAccounts = [{ balance: 50000 }, { balance: 50000 }]
      expect(instance.accountBalanceAsCurrency(testAccounts)).toEqual('$1,000.00')
    })
  })

  describe('Behaviour', () => {
    let wrapper
    let mockAddAccountClick, mockAddCategoryClick, mockAddTransactionClick

    beforeEach(() => {
      mockAddAccountClick = jest.fn()
      mockAddCategoryClick = jest.fn()
      mockAddTransactionClick = jest.fn()

      wrapper = shallow(<AccountList
        accounts={[]}
        onAccountClick={th.empty}
        onAddAccountClick={mockAddAccountClick}
        onAddCategoryClick={mockAddCategoryClick}
        onAddTransactionClick={mockAddTransactionClick} />)
    })

    afterEach(() => {
      mockAddAccountClick.mockReset()
      mockAddCategoryClick.mockReset()
      mockAddTransactionClick.mockReset()
    })

    it.skip('calls onAddAccountClick when the add account button is clicked', () => {
      wrapper.find('#mt-add-account').simulate('click')

      expect(mockAddAccountClick).toBeCalled()
    })

    it.skip('calls onAddCategoryClick when the add category button is clicked', () => {
      wrapper.find('#mt-add-category').simulate('click')

      expect(mockAddCategoryClick).toBeCalled()
    })

    it('calls onAddTransactionClick when the add transaction button is clicked', () => {
      wrapper.find('#mt-add-transaction').simulate('click')

      expect(mockAddTransactionClick).toBeCalled()
    })
  })
})
