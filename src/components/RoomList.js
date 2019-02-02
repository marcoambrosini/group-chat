import React from 'react'

class RoomList extends React.Component {
    render () {
        return (
            <ul>
            <h3>Your Rooms:</h3>
                <div className="rooms-list">
                    {this.props.rooms.map(room =>{
                        return (
                            <li key={room.id} className="room">
                                <a 
                                    onClick={() => this.props.subscribeToRoom(room.id)} 
                                    href='#'># {room.name}</a>
                            </li>    
                        )   
                    })}
                </div>
            </ul>
            
        )
    }
}

export default RoomList