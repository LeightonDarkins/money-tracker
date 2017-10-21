/* global describe, it, expect, jest, beforeEach, afterEach */

import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import TransactionForm from './TransactionForm.component'
import moment from 'moment'
import th from '../../common/TestHelpers'
import DatePicker from 'react-datepicker'

const testDate = moment('19/10/2017', 'DD/MM/YYYY')

const defaultProps = {
  amount: 0,
  onAmountChange: th.empty,
  date: testDate,
  onDateChange: th.empty,
  category: 'category-1',
  onCategoryChange: th.empty,
  categories: [{ id: 'category-1' }, { id: 'category-2' }],
  account: 'account-1',
  onAccountChange: th.empty,
  accounts: [{ id: 'account-1' }, { id: 'account-2' }],
  onSubmitClick: th.empty,
  onCancelClick: th.empty,
  transactionType: 'expense',
  onTypeChange: th.empty,
  startDate: testDate,
  fetchCategories: th.empty,
  fetchAccounts: th.empty
}

const mockProps = (props) => {
  let mockedProps = props

  mockedProps.onAmountChange = jest.fn()
  mockedProps.onDateChange = jest.fn()
  mockedProps.onCategoryChange = jest.fn()
  mockedProps.onAccountChange = jest.fn()
  mockedProps.onSubmitClick = jest.fn()
  mockedProps.onCancelClick = jest.fn()
  mockedProps.onTypeChange = jest.fn()
  mockedProps.fetchCategories = jest.fn()
  mockedProps.fetchAccounts = jest.fn()

  return mockedProps
}

const resetMocks = (props) => {
  props.onAmountChange.mockReset()
  props.onDateChange.mockReset()
  props.onCategoryChange.mockReset()
  props.onAccountChange.mockReset()
  props.onSubmitClick.mockReset()
  props.onCancelClick.mockReset()
  props.onTypeChange.mockReset()
  props.fetchCategories.mockReset()
  props.fetchAccounts.mockReset()
}

describe('TransactionForm', () => {
  describe('Snapshots', () => {
    it('should render correctly in default state', () => {
      const transactionForm = renderer.create(<TransactionForm {...defaultProps} />)

      expect(transactionForm).toMatchSnapshot()
    })

    it('should render placeholders when data is missing', () => {
      const transactionForm = renderer.create(<TransactionForm
        {...defaultProps}
        categories={[]}
        accounts={[]} />)

      expect(transactionForm).toMatchSnapshot()
    })
  })

  describe('Mount', () => {
    it('calls fetchAccounts and fetchCategories when rendered', () => {
      const mockedProps = mockProps(defaultProps)
      mount(<TransactionForm {...mockedProps} />)

      expect(mockedProps.fetchAccounts).toBeCalled()
      expect(mockedProps.fetchCategories).toBeCalled()
    })
  })

  describe('Behaviour', () => {
    let wrapper, mockedProps

    beforeEach(() => {
      mockedProps = mockProps(defaultProps)
      wrapper = shallow(<TransactionForm {...mockedProps} />)
    })

    afterEach(() => {
      resetMocks(mockedProps)
    })

    it('calls onAmountChange, with a value in cents, when the amount is changed', () => {
      const changeEvent = {
        target: {
          value: '10'
        }
      }

      wrapper.find('.mt-number-input-container input').simulate('change', changeEvent)

      expect(mockedProps.onAmountChange).toBeCalledWith(1000)
    })

    it('does not call onAmountChange when the amount is not a number', () => {
      const changeEvent = {
        target: {
          value: 'test'
        }
      }

      wrapper.find('.mt-number-input-container input').simulate('change', changeEvent)

      expect(mockedProps.onAmountChange).not.toBeCalled()
    })

    it('calls onDateChange when the date is changed', () => {
      const input = '10/19/2017'

      wrapper.find(DatePicker).simulate('change', input)

      expect(mockedProps.onDateChange).toBeCalledWith(input)
    })

    it('calls onCategoryChange when the category is changed', () => {
      const selector = wrapper.find('.mt-category-select')

      selector.simulate('change', 'category-2')

      expect(mockedProps.onCategoryChange).toBeCalledWith('category-2')
    })

    it('calls onAccountChange when the account is changed', () => {
      const selector = wrapper.find('.mt-account-select')

      selector.simulate('change', 'account-2')

      expect(mockedProps.onAccountChange).toBeCalledWith('account-2')
    })

    it('calls onTypeChange when the type is changed', () => {
      const selector = wrapper.find('.mt-type-select')

      selector.simulate('change', 'income')

      expect(mockedProps.onTypeChange).toBeCalledWith('income')
    })

    it('calls onSubmitClick when the submit button is clicked', () => {
      wrapper.find('.confirm').simulate('click')

      const expectedFields = {
        account: mockedProps.account,
        amount: mockedProps.amount,
        category: mockedProps.category,
        date: mockedProps.date,
        transactionType: mockedProps.transactionType
      }

      expect(mockedProps.onSubmitClick).toBeCalledWith(expectedFields)
    })

    it('calls onCancelClick when the cancel button is clicked', () => {
      wrapper.find('.cancel').simulate('click')

      expect(mockedProps.onCancelClick).toBeCalled()
    })
  })
})
