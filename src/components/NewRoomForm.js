/** @format */

import React, {useState} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

export default function NewRoomForm(props) {
  const [roomName, setRoomName] = useState('')

  const handleChange = e => {
    setRoomName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.createRoom(roomName)
  }

  return (
    <div className="new-room-form">
      <StyledformContainer>
        <StyledNewRoomFormForm onSubmit={handleSubmit}>
          <StyledNewRoomFormInput
            value={roomName}
            type="text"
            onChange={handleChange}
            placeholder="New room's name"
            required
          />
          <StyledNewRoomFormButton id="create-room-btn" type="submit">
            <FontAwesomeIcon icon={faPlusSquare} size="lg" />
          </StyledNewRoomFormButton>
        </StyledNewRoomFormForm>
      </StyledformContainer>
    </div>
  )
}

//styled-components

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
const StyledNewRoomFormButton = styled.button`
  background: var(--main-color);
  color: var(--sidebar-text-color);
  border: 0;
  &:hover {
    color: var(--text-hover);
  }
`
