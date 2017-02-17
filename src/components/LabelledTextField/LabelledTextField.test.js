import React from 'react'
import { shallow, mount } from 'enzyme'

import LabelledTextField from './LabelledTextField'

describe('LabelledTextField', () => {
  it('renders', () => {
    let wrapper = shallow(<LabelledTextField label="Test" placeholder="Test Placeholder" />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find('span').length).toEqual(1)
    expect(wrapper.contains('Test')).toBeTruthy()
  })
})
