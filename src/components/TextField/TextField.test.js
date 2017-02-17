import React from 'react'
import { shallow, mount } from 'enzyme'

import TextField from './TextField'

describe('TextField', () => {
  it('renders', () => {
    let wrapper = shallow(<TextField placeholder='Test'/>)

    expect(wrapper.type()).toEqual('input')
  })
})
