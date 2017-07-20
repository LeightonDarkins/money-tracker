import React from 'react'
import { shallow, mount } from 'enzyme'

import constants from '../../globals/constants.js'
import AccountForm from './AccountForm'
import LabelledTextField from '../../components/LabelledTextField/LabelledTextField'
import CancelButton from '../../components/CancelButton/CancelButton'
import Button from '../../components/Button/Button'

describe('AccountForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AccountForm />)
  })

  it('renders', () => {
    expect(wrapper.type()).toEqual('div')
    
    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find(LabelledTextField).length).toBe(2)
    expect(wrapper.find(CancelButton).length).toBe(1)
    expect(wrapper.find(Button).length).toBe(1)

    let expectedStateObject = {
      accountName: constants.EMPTY_STRING,
      startingBalance: constants.EMPTY_STRING,
      accountNameValid: true,
      startingBalanceValid: true
    }

    expect(wrapper.instance().state).toEqual(expectedStateObject)
  })

  describe('.validateAccountName()', () => {
    it('invalid if string is empty', () => {
      let testValue = constants.EMPTY_STRING

      wrapper.instance().validateAccountName(testValue)

      expect(wrapper.instance().state.valid).toBeFalsy()
    })

    it('invalid if string is < 3 characters', () => {
      let testValue = '1'

      wrapper.instance().validateAccountName(testValue)

      expect(wrapper.instance().state.accountNameValid).toBeFalsy()
    })

    it('valid if string >= 3 characters', () => {
      let testValue = '123'

      wrapper.instance().validateAccountName(testValue)

      expect(wrapper.instance().state.accountNameValid).toBeTruthy()
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

  describe('.onStartingBalanceChange()', () => {
    it('set startingBalance on state object', () => {
      let testEvent = {
        target: {
          value: '12.00'
        }
      }

      wrapper.instance().onStartingBalanceChange(testEvent)

      expect(wrapper.instance().state.startingBalance).toEqual('12.00')
    })
  });

  describe('.validateStartingBalance()', () => {
    it('invalid if value is not a number', () => {
      let testValue = 'test'

      wrapper.instance().validateStartingBalance(testValue)

      expect(wrapper.instance().state.startingBalanceValid).toBeFalsy()
    })

    it('invalid if value is a number', () => {
      let testValue = '12.45'

      wrapper.instance().validateStartingBalance(testValue)

      expect(wrapper.instance().state.startingBalanceValid).toBeTruthy()
    })
  });
})
