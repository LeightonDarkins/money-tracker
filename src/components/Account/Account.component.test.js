/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Account from './Account.component'

describe('Account', () => {
  describe('Snapshots', () => {
    it('renders correctly', () => {
      const account = renderer.create(<Account
        name='Test Account Name'
        balance={500}
        openingBalance={1000}
        onAccountClick={(y) => y} />).toJSON()
      expect(account).toMatchSnapshot()
    })
  })

  describe('Behaviour', () => {
    const mockAccountClickFunction = jest.fn()

    const wrapper = shallow(<Account
      name='Test Account Name'
      balance={500}
      openingBalance={1000}
      onAccountClick={mockAccountClickFunction} />)

    it('calls onAccountClick when clicked', () => {
      wrapper.find('.account-list-item').simulate('click')

      expect(mockAccountClickFunction).toBeCalled()
    })
  })
})
