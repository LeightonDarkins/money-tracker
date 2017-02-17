import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    let wrapper = shallow(<Button text='test' />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.text()).toEqual('test')
  })
})
