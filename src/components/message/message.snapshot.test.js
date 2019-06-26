/** @format */

import React from 'react'
import {create} from 'react-test-renderer'
import Message from './Message'

describe('Message component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Message />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
