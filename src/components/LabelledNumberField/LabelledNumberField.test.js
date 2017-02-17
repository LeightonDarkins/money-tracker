import React from 'react'
import { shallow, mount } from 'enzyme'

import LabelledNumberField from './LabelledNumberField'

describe('LabelledNumberField', () => {
  it('renders', () => {
    let wrapper = shallow(<LabelledNumberField label='Test' default='0.00' />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find('label').length).toBe(1)
    expect(wrapper.find('input').length).toBe(1)
  })
})
