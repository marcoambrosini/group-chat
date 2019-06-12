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

  if (props.roomId === null || props.isLoadingMessages) {
    if (props.isLoadingMessages) {
      return (
        <div className="message-list">
          <StyledLoaderWrapper>
            <GridLoader css={override} sizeUnit={'px'} size={15} color={'#123abc'} loading={props.isLoadingMessages} />
          </StyledLoaderWrapper>
        </div>
      )
    }
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

const StyledLoaderWrapper = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;
`

//css in js for the spunner plugin
const override = cssEmotion`
  background-color: transparent;
  z-index: 15;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;
`
