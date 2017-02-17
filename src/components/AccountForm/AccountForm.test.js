import React from 'react'
import { shallow, mount } from 'enzyme'

import AccountForm from './AccountForm'
import LabelledTextField from '../LabelledTextField/LabelledTextField'
import LabelledNumberField from '../LabelledNumberField/LabelledNumberField'
import CancelButton from '../CancelButton/CancelButton'
import Button from '../Button/Button'

describe('AccountForm', () => {
  it('renders', () => {
    let wrapper = shallow(<AccountForm />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find(LabelledTextField).length).toBe(1)
    expect(wrapper.find(LabelledNumberField).length).toBe(1)
    expect(wrapper.find(CancelButton).length).toBe(1)
    expect(wrapper.find(Button).length).toBe(1)
  })
})
