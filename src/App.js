/** @format */

import React, {useState, useEffect} from 'react'
import {default as Chatkit} from '@pusher/chatkit-server'
import Chat from './views/Chat.js'
import {instanceLocator, key} from './config'
import SignUp from './views/SignUp.js'
import {GridLoader} from 'react-spinners'
import {css} from '@emotion/core'

export default function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const createUser = userName => {
    setIsLoading(true)
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
          setIsLoading(false)
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
    return (
      <>
        <GridLoader css={override} sizeUnit={'px'} size={15} color={'#123abc'} loading={isLoading} />
        <SignUp createUser={createUser} />
      </>
    )
  } else
    return (
      <>
        <GridLoader css={override} sizeUnit={'px'} size={15} color={'#123abc'} loading={isLoading} />
        <Chat user={user} setIsLoading={setIsLoading} />
      </>
    )
}

//chatkit instance
const chatkit = new Chatkit({
  instanceLocator,
  key,
})

//css in js for the spunner plugin
const override = css`
  display: block;
  margin-left: calc(50vw - 15px);
  margin-top: calc(50vh - 15px);
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 15;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;
`
