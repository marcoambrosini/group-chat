/** @format */

import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

import StyledSidebar from './styled/StyledSidebar'

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
        <StyledSidebar>
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
        </StyledSidebar>
      </div>
    )
  }
}

export default NewRoomForm

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
