/** @format */

import React from 'react'
import styled from 'styled-components'

function Message(props) {
  return (
    <>
      <StyledMessage>
        <StyledMessageUserName>{props.username}</StyledMessageUserName>
        <StyledMessageText>{props.text}</StyledMessageText>
      </StyledMessage>
    </>
  )
}

export default Message

const StyledMessage = styled.div`
  margin: 15px;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`

const StyledMessageUserName = styled.div`
  font-size: 11px;
  color: var(--main-text-color);
  opacity: 0.9;
  margin-bottom: 6px;
`

const StyledMessageText = styled.div`
  color: var(--secondary-text-color);
  font-weight: 400;
  display: inline;
`
