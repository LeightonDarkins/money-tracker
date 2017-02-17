import React from 'react'
import { shallow, mount } from 'enzyme'

import LabelledTextField from './LabelledTextField'
import TextField from '../TextField/TextField'

describe('LabelledTextField', () => {
  it('renders', () => {
    let wrapper = shallow(<LabelledTextField label="Test" placeholder="Test Placeholder" />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find(TextField).length).toEqual(1)
    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.contains('Test')).toBeTruthy()
  })
})
