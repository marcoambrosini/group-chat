/** @format */

import React from 'react'
import styled from 'styled-components'
import Avatar from 'react-avatar'

export default function Message(props) {
  return (
    <StyledMessageWrapper>
      <Avatar name={props.username} size="40" round={true} />
      <StyledMessageData>
        <StyledMessageUserName>{props.username}</StyledMessageUserName>
        <StyledMessageText>{props.text}</StyledMessageText>
      </StyledMessageData>
    </StyledMessageWrapper>
  )
}

//styled-components

const StyledMessageWrapper = styled.div`
  margin: 0px;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  display: flex;
`

const StyledMessageData = styled.div`
  margin-left: 18px;
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
