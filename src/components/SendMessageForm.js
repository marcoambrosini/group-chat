/** @format */

import React from 'react'
import styled from 'styled-components'

class SendMessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({message: ''})
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div className="send-message-form">
        <StyledSendMessageFormContainer>
          <form onSubmit={this.handleSubmit}>
            <StyledSendMessageFormInput
              disabled={this.props.disabled}
              onChange={this.handleChange}
              value={this.state.message}
              placeholder="Type your message and hit ENTER"
              type="text"
            />
          </form>
        </StyledSendMessageFormContainer>
      </div>
    )
  }
}

export default SendMessageForm

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
