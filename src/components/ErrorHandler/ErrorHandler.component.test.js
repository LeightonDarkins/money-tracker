/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ErrorHandler from './ErrorHandler.component'
import th from '../../common/TestHelpers'

describe('ErrorHandler', () => {
  const errors = [
    {
      response: {
        headers: {
          date: '1234'
        },
        statusText: 'test'
      }
    }
  ]

  describe('Snapshots', () => {
    it('should render an empty ErrorHandler with no errors', () => {
      const errorHandler = renderer.create(<ErrorHandler
        errors={[]}
        onErrorClick={th.empty}
        />).toJSON()

      expect(errorHandler).toMatchSnapshot()
    })

    it('should render a populated ErrorHandler with errors', () => {
      const errorHandler = renderer.create(<ErrorHandler
        errors={errors}
        onErrorClick={th.empty}
        />).toJSON()

      expect(errorHandler).toMatchSnapshot()
    })
  })

  describe('Behaviour', () => {
    let mockOnErrorClick

    beforeEach(() => {
      mockOnErrorClick = jest.fn()
    })

    afterEach(() => {
      mockOnErrorClick.mockReset()
    })

    it('calls onErrorClick when an Error is clicked', () => {
      let wrapper = shallow(<ErrorHandler
        errors={errors}
        onErrorClick={mockOnErrorClick} />)

      wrapper.find('ErrorComponent').simulate('click')

      expect(mockOnErrorClick).toBeCalled()
    })
  })
})
