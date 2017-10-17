/* global describe, it, expect */

import React from 'react'
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
})
