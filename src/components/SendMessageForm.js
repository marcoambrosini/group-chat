import React from 'react'

class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault() 
        alert(this.state.message)
    }

    handleChange(event) {
        this.setState({
            message : event.target.value
        
        })

    }

    render() {
        console.log(this.state.message)
        return (
            <form 
                className="send-message-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    onChange = {this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm