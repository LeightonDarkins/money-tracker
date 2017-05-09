import React from 'react'
import { shallow, mount } from 'enzyme'

import constants from '../../globals/constants.js'
import ExpenseForm from './ExpenseForm.jsx'
import LabelledTextField from '../../components/LabelledTextField/LabelledTextField'
import CancelButton from '../../components/CancelButton/CancelButton'
import Button from '../../components/Button/Button'

describe('AccountForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ExpenseForm />)
  })

  it('renders', () => {
    expect(wrapper.type()).toEqual('div')

    expect(wrapper.find(LabelledTextField).length).toBe(2)
    expect(wrapper.find(CancelButton).length).toBe(1)
    expect(wrapper.find(Button).length).toBe(1)
  })
})
