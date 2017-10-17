/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import AccountList from './AccountList.component'

describe('AccountList', () => {
  describe('Snapshots', () => {
    it('should render with a spinner when loading', () => {
      const accountList = renderer.create(<AccountList accounts={[]} onAccountClick={(y) => y} isLoading />).toJSON()
      expect(accountList).toMatchSnapshot()
    })

    it('should render with a placeholder when no accounts are present', () => {
      const tree = renderer.create(<AccountList accounts={[]} onAccountClick={(y) => y} />).toJSON()
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
          onAccountClick={(y) => y} />
      ).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('accountBalanceAsCurrency()', () => {
    const thing = shallow(<AccountList accounts={[]} onAccountClick={(y) => y} />)

    it('returns $0.00 for empty array', () => {
      expect(thing.instance().accountBalanceAsCurrency([])).toEqual('$0.00')
    })

    it('returns $10.00 for two accounts with balances of 500 cents', () => {
      let testAccounts = [{ balance: 500 }, { balance: 500 }]
      expect(thing.instance().accountBalanceAsCurrency(testAccounts)).toEqual('$10.00')
    })

    it('returns $0.10 for two accounts with balances of 5 cents', () => {
      let testAccounts = [{ balance: 5 }, { balance: 5 }]
      expect(thing.instance().accountBalanceAsCurrency(testAccounts)).toEqual('$0.10')
    })

    it('returns $1,000.00 for two accounts with balances of 50000', () => {
      let testAccounts = [{ balance: 50000 }, { balance: 50000 }]
      expect(thing.instance().accountBalanceAsCurrency(testAccounts)).toEqual('$1,000.00')
    })
  })
})
