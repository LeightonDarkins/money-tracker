import React from 'react'
import { shallow, mount } from 'enzyme'

import CancelButton from './CancelButton'

describe('CancelButton', () => {
  it('renders', () => {
    let wrapper = shallow(<CancelButton />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.text()).toEqual('Cancel')
  })
})
