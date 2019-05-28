/** @format */

import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

class NewRoomForm extends React.Component {
  constructor() {
    super()
    this.state = {
      roomName: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({
      roomName: '',
    })
  }

  render() {
    return (
      <div className="new-room-form">
        <StyledformContainer>
          <StyledNewRoomFormForm onSubmit={this.handleSubmit}>
            <StyledNewRoomFormInput
              value={this.state.roomName}
              type="text"
              onChange={this.handleChange}
              placeholder="New room's name"
              required
            />
            <StyledNewRoomFormButton id="create-room-btn" type="submit">
              <FontAwesomeIcon icon={faPlusSquare} size="md" />
            </StyledNewRoomFormButton>
          </StyledNewRoomFormForm>
        </StyledformContainer>
      </div>
    )
  }
}

export default NewRoomForm

const StyledformContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  background-color: var(--main-color);
  overflow: auto;
  height: 100%;
  z-index: 11;
`

const StyledNewRoomFormForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNewRoomFormInput = styled.input`
  width: 135px;
  background: var(--main-color);
  border: 0px;
  color: var(--sidebar-text-color);
  &::placeholder {
    color: var(--sidebar-text-color);
    font-weight: 200;
  }
  &:focus {
    outline-width: 0;
  }
`
/** */
const StyledNewRoomFormButton = styled.button`
  background: var(--main-color);
  color: var(--sidebar-text-color);
  border: 0;
  &:hover {
    color: var(--text-hover);
  }
`
