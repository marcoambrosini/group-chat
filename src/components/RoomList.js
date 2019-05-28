/** @format */

import React from 'react'
import styled from 'styled-components'

export default function RoomList(props) {
  const orderedRooms = [...props.rooms].sort((a, b) => a.id - b.id)
  return (
    <div className="rooms-list">
      <RoomListContainer>
        <StyledRoomsListUl>
          <StyledRoomsListH3>TEXT CHANNELS</StyledRoomsListH3>
          {orderedRooms.map(room => {
            const active = props.roomId === room.id ? 'active' : ''
            return (
              <StyledRoomsListLi key={room.id} className={'room ' + active}>
                <StyledRoomslistRoomA
                  onClick={() => {
                    console.log(room.id)
                    props.subscribeToRoom(room.id)
                  }}
                  href="#">
                  # {room.name}
                </StyledRoomslistRoomA>
              </StyledRoomsListLi>
            )
          })}
        </StyledRoomsListUl>
      </RoomListContainer>
    </div>
  )
}

const RoomListContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  background-color: var(--main-color);
  overflow: auto;
  height: 100%;
  z-index: 11;
`

const StyledRoomsListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: auto;
`

const StyledRoomsListLi = styled.li`
  margin: 10px 0;
`

const StyledRoomsListH3 = styled.h3`
  font-size: 12px;
  margin: 5px 0;
  color: var(--sidebar-text-color);
  font-weight: 600;
`

const StyledRoomslistRoomA = styled.a`
  color: var(--sidebar-text-color);
  font-weight: 400;
  text-decoration: none;
  &:hover {
    color: var(--text-hover);
  }
  &:active {
    color: var(--text-active);
  }
`
