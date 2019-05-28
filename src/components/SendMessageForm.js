/** @format */

import React, {useState} from 'react'
import styled from 'styled-components'

export default function SendMessageForm(props) {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.sendMessage(message)
    setMessage('')
  }

  const handleChange = event => {
    setMessage(event.target.value)
  }

  return (
    <div className="send-message-form">
      <StyledSendMessageFormContainer>
        <form onSubmit={handleSubmit}>
          <StyledSendMessageFormInput
            disabled={props.disabled}
            onChange={handleChange}
            value={message}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
        </form>
      </StyledSendMessageFormContainer>
    </div>
  )
}

//styled-components

const StyledSendMessageFormContainer = styled.div`
  width: calc(100% - 80px);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 0px 10px 0px 10px;
  border-radius: 20px;
  background: var(--send-message-form);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 11;
`

const StyledSendMessageFormInput = styled.input`
  width: calc(100% - 60px);
  padding: 15px 10px;
  border-radius: 20px;
  border-style: none;
  background: var(--send-message-form);
  font-weight: 300;
  &:focus {
    outline-width: 0;
  }
  &:placeholder {
    color: var(--main-text-color);
  }
`
