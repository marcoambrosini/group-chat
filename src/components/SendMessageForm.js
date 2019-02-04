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
        this.props.sendMessage(this.state.message)
        this.setState({message : ''})
    }

    handleChange(event) {
        this.setState({
            message : event.target.value
        
        })

    }

    render() {
        return (
            <form 
                className="send-message-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    disabled={this.props.disabled}
                    onChange = {this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm