import React from 'react'
import { shallow, mount } from 'enzyme'

import AccountListItem from './AccountListItem'

describe('AccountList', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AccountListItem name='test' balance='25.45'/>)
  })

  it('renders', () => {
    expect(wrapper.type()).toEqual('li')
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('span').length).toEqual(2)

    let props = wrapper.instance().props

    expect(props.name).toEqual('test')
    expect(props.balance).toEqual('25.45')
  })
})
