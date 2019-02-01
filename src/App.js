import React from 'react'

import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'


class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            messages : [],
            joinableRooms: [],
            joinedRooms: []
        }

        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() { 
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'mrc',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser// this statement takes the currentUser thet comes from the connect method and passes it up to the component context, so that later we can use currentuser methods (currentuser.whatever()) in the app component. For example this.currentUser.sendMessage()

                this.currentUser.getJoinableRooms()
                 .then(joinableRooms => {
                    this.setState({
                        joinableRooms :joinableRooms,
                        joinedRooms: this.currentUser.rooms
                    })
                 })
                 .catch(err => console.log('error on joinable roomes: ',err))

                currentUser.subscribeToRoom({
                    roomId: "19400437",
                    hooks: {
                        onMessage: message => {
                            this.setState({
                               messages : [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
            .catch(err => {
                console.log('Error on connection', err)
            })
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text : text,
            roomId : '19400437'
        }) 
    } 


    render() {

        return (
            <div className="app">
                <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage}/>
                <NewRoomForm />
            </div>
        );
    }
}

export default App

