/** @format */

import React, {useState} from 'react'
import {default as Chatkit} from '@pusher/chatkit-server'
import Chat from './views/Chat.js'
import {instanceLocator, key} from './config'
import SignUp from './views/SignUp.js'

const chatkit = new Chatkit({
  instanceLocator,
  key,
})

export default function App() {
  const [user, setUser] = useState(null)

  const createUser = userName => {
    chatkit
      .createUser({
        id: userName,
        name: userName,
      })
      .then(response => {
        setUser({
          name: response.name,
          id: response.id,
        })
      })
      .catch(err => {
        if (err.status === 400) {
          logInExistingUser(userName)
        } else {
          console.log('error whuile creating the user:' + err.status)
        }
      })
  }

  const logInExistingUser = userName => {
    setUser({
      id: userName,
      name: userName,
    })
  }

  if (user === null) {
    return <SignUp createUser={createUser} />
  } else return <Chat user={user} />
}
