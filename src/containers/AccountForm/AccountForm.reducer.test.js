/* global describe, it, expect */

import reducer from './AccountForm.reducer'
import { types } from './AccountForm.actions'

describe('AccountForm Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ name: '', balance: 0 })
  })

  it('should respond to CHANGE_NAME correctly', () => {
    expect(reducer(undefined, { type: types.nameChanged, name: 'testf' }))
    .toEqual({ name: 'testf', balance: 0 })
  })
})
