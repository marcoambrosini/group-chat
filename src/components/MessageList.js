/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import styled from 'styled-components'

class MessageList extends React.Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrolltoBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <StyledJoinRoom className="join-room">&larr; Join a room!</StyledJoinRoom>
        </div>
      )
    } else
      return (
        <>
          <div className="message-list">
            <StyledMessageList>
              {this.props.messages.map((message, index) => {
                return <Message key={index} username={message.senderId} text={message.text} />
              })}
            </StyledMessageList>
          </div>
        </>
      )
  }
}

export default MessageList

const StyledMessageList = styled.div`
  box-sizing: border-box;
  padding-left: 30px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
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
