/** @format */

import React, {useState, useEffect} from 'react'
import Chatkit from '@pusher/chatkit-client'

import MessageList from '../components/MessageList'
import SendMessageForm from '../components/SendMessageForm'
import RoomList from '../components/RoomList'
import NewRoomForm from '../components/NewRoomForm'
import {tokenUrl, instanceLocator} from '../config'

export default function Chat(props) {
  const [roomId, setroomId] = useState(null)
  const [messages, setMessages] = useState([])
  const [joinableRooms, setJoinableRooms] = useState([])
  const [joinedRooms, setjoinedRooms] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: props.user.id,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl,
      }),
    })
    chatManager
      .connect()
      .then(currentUser => {
        setCurrentUser(currentUser) // this statement takes the currentUser that comes from the connect method and passes it up to the component context, so that later we can use currentuser methods (currentuser.whatever()) in the app component. For example this.currentUser.sendMessage()
        currentUser
          .getJoinableRooms()
          .then(joinableRooms => {
            setJoinableRooms(joinableRooms)
            setjoinedRooms(currentUser.rooms)
            props.setIsLoading(false)
          })
          .catch(err => console.log('error on joinable roomes: ', err))
      })
      .catch(err => {
        console.log('Error on connection', err)
        props.setIsLoading(false)
      })
  }, [props])

  const getRooms = () => {
    currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        setJoinableRooms(joinableRooms)
        setjoinedRooms(currentUser.rooms)
      })
      .catch(err => console.log('error on joinable roomes: ', err))
  }

  const subscribeToRoom = roomId => {
    setMessages([])
    currentUser
      .subscribeToRoomMultipart({
        roomId,
        hooks: {
          onMessage: message => {
            setMessages(messages => [...messages, message])
          },
        },
        messagelimit: 100,
      })
      .then(room => {
        setroomId(room.id)
        getRooms()
      })
      .catch(err => console.log('error on subscribing to room: ', err))
  }

  const sendMessage = text => {
    currentUser.sendSimpleMessage({
      text,
      roomId,
    })
  }

  const createRoom = name => {
    currentUser
      .createRoom({
        name,
      })
      .then(room => subscribeToRoom(room.id))
      .catch(err => console.log('error while creating room ', err))
  }
  return (
    <div className="chat">
      <RoomList roomId={roomId} subscribeToRoom={subscribeToRoom} rooms={[...joinableRooms, ...joinedRooms]} />{' '}
      <MessageList messages={messages} roomId={roomId} />{' '}
      <SendMessageForm sendMessage={sendMessage} disabled={!roomId} /> <NewRoomForm createRoom={createRoom} />{' '}
    </div>
  )
}
