/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ErrorComponent from './Error.component'
import th from '../../common/TestHelpers'

describe('Error', () => {
  describe('Snapshots', () => {
    it('should render an empty ErrorHandler with no errors', () => {
      const errorComponent = renderer.create(<ErrorComponent
        title={'title'}
        message={'message'}
        onClick={th.empty}
        />).toJSON()

      expect(errorComponent).toMatchSnapshot()
    })
  })

  describe('Behaviour', () => {
    let mockOnClick

    beforeEach(() => {
      mockOnClick = jest.fn()
    })

    afterEach(() => {
      mockOnClick.mockReset()
    })

    it('calls onErrorClick when an Error is clicked', () => {
      let wrapper = shallow(<ErrorComponent
        title={'title'}
        message={'message'}
        onClick={mockOnClick}
        />)

      wrapper.simulate('click')

      expect(mockOnClick).toBeCalled()
    })
  })
})
