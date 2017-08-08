import React from 'react'
import { shallow, mount } from 'enzyme'

import AccountList from './AccountList'
import AccountListItem from '../../components/AccountListItem/AccountListItem'

describe('AccountList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AccountList />)
  })

  it('renders', () => {
    expect(wrapper.type()).toEqual('div')

    // TODO: Mock Data To Get These Passing... 
    // expect(wrapper.find('h3').length).toBe(1)
    // expect(wrapper.find('ul').length).toBe(1)
    // expect(wrapper.find(AccountListItem).length).toBe(2)
  })
})
