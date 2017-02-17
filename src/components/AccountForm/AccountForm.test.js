import React from 'react'
import { shallow, mount } from 'enzyme'

import constants from '../../globals/constants.js'
import AccountForm from './AccountForm'
import LabelledTextField from '../LabelledTextField/LabelledTextField'
import CancelButton from '../CancelButton/CancelButton'
import Button from '../Button/Button'

describe('AccountForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AccountForm />)
  })

  it('renders', () => {
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find(LabelledTextField).length).toBe(1)
    expect(wrapper.find(CancelButton).length).toBe(1)
    expect(wrapper.find(Button).length).toBe(1)
  })

  describe('.validate()', () => {
    it('invalid if string is empty', () => {
      let testValue = constants.EMPTY_STRING

      wrapper.instance().validate(testValue)

      expect(wrapper.instance().state.valid).toBeFalsy()
    })

    it('invalid if string is < 3 characters', () => {
      let testValue = '1'

      wrapper.instance().validate(testValue)

      expect(wrapper.instance().state.valid).toBeFalsy()
    })

    it('valid if string >= 3 characters', () => {
      let testValue = '123'

      wrapper.instance().validate(testValue)

      expect(wrapper.instance().state.valid).toBeTruthy()
    })
  })

  describe('.onAccountNameChange()', () => {
    it('sets accountName on state object', () => {
      let testEvent = {
        target: {
          value: 'test'
        }
      }

      wrapper.instance().onAccountNameChange(testEvent)

      expect(wrapper.instance().state.accountName).toEqual('test')
    })
  })
})
