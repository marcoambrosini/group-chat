/** @format */

import React, {useEffect} from 'react'
import {css} from 'glamor'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
import styled from 'styled-components'

export default function MessageList(props) {
  const AUTOSCROLL_ROOT_CSS = css({
    height: 'calc(100% - 80px)',
    width: 'calc(100% - 280px)',
    position: 'absolute',
    right: 0,
    top: 0,
  })

  if (!props.roomId) {
    return (
      <div className="message-list">
        <StyledJoinRoom className="join-room">&larr; Join a room!</StyledJoinRoom>
      </div>
    )
  } else
    return (
      <>
        <ScrollToBottom className={AUTOSCROLL_ROOT_CSS}>
          <div className="message-list">
            <StyledMessageList>
              {props.messages.map(message => {
                console.log(message)
                return <Message key={message.id} username={message.senderId} text={message.parts[0].payload.content} />
              })}
            </StyledMessageList>
          </div>
        </ScrollToBottom>
      </>
    )
}

const StyledMessageList = styled.div`
  box-sizing: border-box;
  padding-left: 30px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: var(--secondary-color);
`

const StyledJoinRoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 34px;
  font-weight: 300;
  color: var(--main-text-color);
`
