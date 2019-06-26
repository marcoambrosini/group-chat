/** @format */

import React from 'react'
import {create} from 'react-test-renderer'
import MessageList from './MessageList'

describe('MessageList component', () => {
  test('it matches the snapshot', () => {
    const component = create(<MessageList />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
