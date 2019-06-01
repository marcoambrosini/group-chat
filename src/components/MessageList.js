/** @format */

import React from 'react'
import {css} from 'glamor'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
import styled from 'styled-components'
import {GridLoader} from 'react-spinners'
import {css as cssEmotion} from '@emotion/core'

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
        <GridLoader css={override} sizeUnit={'px'} size={15} color={'#123abc'} loading={props.isLoadingMessage} />
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
  display: block;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 34px;
  font-weight: 300;
  color: var(--main-text-color);
`

//css in js for the spunner plugin
const override = cssEmotion`
  display: block;
  margin-left: calc(50vw - 15px);
  margin-top: calc(50vh - 15px);
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 15;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;
`
