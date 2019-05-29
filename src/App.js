/** @format */

import React, {useState, useEffect} from 'react'
import Chatkit from '@pusher/chatkit-client'

import Chat from './views/Chat.js'

import {tokenUrl, instanceLocator, secretKey} from './config'
import SignUp from './views/SignUp.js'

export default function App() {
  const [roomId, setroomId] = useState(null)
  const [messages, setMessages] = useState([])
  const [joinableRooms, setJoinableRooms] = useState([])
  const [joinedRooms, setjoinedRooms] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'mrc',
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
          })
          .catch(err => console.log('error on joinable roomes: ', err))
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
  }, [])

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

  const createUser = userName => {
    chatManager.createUser({
      id: userName,
      name: userName,
    })
  }

  if (userId !== '') {
    return (
      <Chat
        roomId={roomId}
        subscribeToRoom={subscribeToRoom}
        rooms={[...joinableRooms, ...joinedRooms]}
        messages={messages}
        sendMessage={sendMessage}
        createRoom={createRoom}
      />
    )
  } else return <SignUp setUserId={setUserId} />
}
