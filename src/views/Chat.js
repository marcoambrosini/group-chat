/** @format */

import React from 'react'

import MessageList from '../components/MessageList'
import SendMessageForm from '../components/SendMessageForm'
import RoomList from '../components/RoomList'
import NewRoomForm from '../components/NewRoomForm'

export default function Chat(props) {
  return (
    <div className="chat">
      <RoomList roomId={props.roomId} subscribeToRoom={props.subscribeToRoom} rooms={props.rooms} />{' '}
      <MessageList messages={props.messages} roomId={props.roomId} />{' '}
      <SendMessageForm sendMessage={props.sendMessage} disabled={!props.roomId} />{' '}
      <NewRoomForm createRoom={props.createRoom} />{' '}
    </div>
  )
}
