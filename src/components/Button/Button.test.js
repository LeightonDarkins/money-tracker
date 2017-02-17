import React from 'react'
import { shallow, mount } from 'enzyme'

import constants from '../../globals/constants.js'
import Button from './Button'

describe('Button', () => {
  it('renders with text', () => {
    let wrapper = shallow(<Button text='test' />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.text()).toEqual('test')
  })

  it('renders with empty text', () => {
    let wrapper = shallow(<Button text={ constants.EMPTY_STRING } />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.text()).toEqual(constants.EMPTY_STRING)
  })

  it('renders disabled with no text', () => {
    let wrapper = shallow(<Button enabled={ false } />)
    expect(wrapper.text()).toEqual(constants.EMPTY_STRING)
    expect(wrapper.props().disabled).toBeTruthy();
  })
})
